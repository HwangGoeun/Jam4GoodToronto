import React, { useMemo } from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Supplier, Customer, MaterialDocument, LabTest } from '../../types';

// Import mock data
import suppliersData from '../../mock/suppliers.json';
import customersData from '../../mock/customers.json';
import materialDocumentsData from '../../mock/materialDocuments.json';
import labTestsData from '../../mock/labTests.json';

// Assert types for imported JSON
const suppliers = suppliersData as Supplier[];
const customers = customersData as Customer[];
const materialDocuments = materialDocumentsData as MaterialDocument[];
const labTests = labTestsData as LabTest[];

const ProductJourneyMap: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>();

  // Find relevant data for the current batchId
  const batchData = useMemo(() => {
    if (!batchId) return null;

    // Find all material documents related to this batch
    const relevantDocs = materialDocuments.filter(doc => doc.Batch === batchId);
    if (relevantDocs.length === 0) return null; // Batch not found

    // For simplicity, assume one primary doc defines the main flow (or aggregate later)
    const primaryDoc = relevantDocs[0]; 

    // Find the supplier(s) linked to these documents
    const linkedSupplierIds = new Set(relevantDocs.map(doc => doc.Supplier));
    const relevantSuppliers = suppliers.filter(s => linkedSupplierIds.has(s.BusinessPartner));

    // Find the customer(s) linked to these documents
    const linkedCustomerIds = new Set(relevantDocs.map(doc => doc.Customer));
    const relevantCustomers = customers.filter(c => linkedCustomerIds.has(c.Customer));

    // Find positive lab tests for this batch
    const positiveTest = labTests.find(test => test.batchId === batchId && test.status === 'positive');

    return {
      batchId,
      primaryDoc,
      suppliers: relevantSuppliers,
      customers: relevantCustomers,
      positiveTest
    };
  }, [batchId]);

  if (!batchData) {
    return <Typography>Batch details not found for {batchId}.</Typography>;
  }

  // TODO: Add Header (Product Name, Assigned To)
  // TODO: Add Tabs (Timeline, Action Items)

  return (
    <Box sx={{ p: 2 }}>
       <Typography variant="h5" gutterBottom>Romaine Lettuce - 600g (3 hearts)</Typography> {/* Placeholder name */} 
       {/* Header placeholder */}

       {/* TODO: Add Tabs component here */}

       {/* Main Diagram Area */}
       <Grid container spacing={2} alignItems="flex-start" sx={{ mt: 3 }}> 

         {/* Producers Column - Grid item */}
         {/* @ts-ignore - Still might need this for the outer Grid item */}
         <Grid item xs={4}> 
           <Typography variant="h6" align="center" gutterBottom>Producers</Typography>
           {batchData.suppliers.map(supplier => (
             // Use Paper directly inside Grid item, remove nested Grid container
             <Paper key={supplier.BusinessPartner} elevation={2} sx={{ p: 1.5, mb: 2 }}>
               <Typography variant="subtitle1">{supplier.CompanyName}</Typography>
               <Chip label={supplier.BusinessPartner} size="small" sx={{ mr: 0.5 }} />
               <Typography variant="caption" display="block">{supplier.CityName}, {supplier.Region}</Typography>
               {/* Use Box or Typography directly for inner layout, not Grid */}
               <Box sx={{ mt: 1, fontSize: '0.8rem' }}>
                 <Typography component="div">Units: {/* Placeholder */}</Typography>
                 <Typography component="div">Harvest: {/* Placeholder */}</Typography>
                 <Typography component="div">Delivery: {/* Placeholder */}</Typography>
               </Box>
             </Paper>
           ))}
         </Grid>

         {/* Processing Column - Grid item */}
         {/* @ts-ignore - Still might need this for the outer Grid item */}
         <Grid item xs={4}> 
           <Typography variant="h6" align="center" gutterBottom>Processing</Typography>
           <Paper elevation={2} sx={{ p: 1.5, mb: 2, border: batchData.positiveTest ? '2px solid red' : 'none' }}>
               <Typography variant="subtitle1">Romaine Lettuce - 600g (3 hearts)</Typography> 
               <Typography variant="caption" display="block">Brand: Andy Boys</Typography> 
               <Box sx={{ mt: 1, fontSize: '0.8rem' }}>
                 <Typography component="div">Units: {batchData.primaryDoc.Quantity}</Typography>
                 <Typography component="div">Processing Date: {batchData.primaryDoc.DocumentDate}</Typography>
                 <Typography component="div">Delivery Scheduled: May 6/25 12:00pm</Typography> 
               </Box>

               {batchData.positiveTest && (
                 <Paper sx={{ p: 1, mt: 2, bgcolor: 'error.light', color: 'error.contrastText' }}>
                   <Typography variant="subtitle2">⚠️ E Coli Detected</Typography>
                   <Typography variant="body2">Severity: High</Typography> 
                   <Typography variant="body2">Decision: Recall is deemed necessary</Typography> 
                 </Paper>
               )}
           </Paper>
         </Grid>

         {/* Distribution Column - Grid item */}
         {/* @ts-ignore - Still might need this for the outer Grid item */}
         <Grid item xs={4}> 
           <Typography variant="h6" align="center" gutterBottom>Distribution</Typography>
            {batchData.customers.length > 0 && (
                 <Paper elevation={2} sx={{ p: 1.5, mb: 2 }}>
                    <Typography variant="subtitle1">Sprout Route</Typography> 
                     <Box sx={{ mt: 1, fontSize: '0.8rem' }}>
                          <Typography component="div">Units: {batchData.primaryDoc.Quantity}</Typography>
                          <Typography component="div">Scheduled departure: {batchData.primaryDoc.DocumentDate}</Typography>
                          <Typography component="div">Estimated Delivery: May 8/25 1:48 pm</Typography>
                     </Box>
                    <Typography variant="caption" display="block" sx={{mt: 1}}>Destinations:</Typography>
                    <Box sx={{mt: 0.5}}>
                        {batchData.customers.map(customer => (
                            <Chip key={customer.Customer} label={customer.CustomerName} size="small" sx={{ mr: 0.5, mb: 0.5 }}/>
                        ))}
                    </Box>
                 </Paper>
            )}
         </Grid>

       </Grid>
    </Box>
  );
};

export default ProductJourneyMap; 