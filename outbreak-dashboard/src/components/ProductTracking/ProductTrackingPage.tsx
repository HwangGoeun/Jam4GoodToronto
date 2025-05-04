import React, { useMemo } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import ForceGraph2D from 'react-force-graph-2d';
import { Supplier, Customer, MaterialDocument } from '../../types';
import suppliersData from '../../mock/suppliers.json';
import customersData from '../../mock/customers.json';
import materialDocumentsData from '../../mock/materialDocuments.json';

const suppliers: Supplier[] = suppliersData;
const customers: Customer[] = customersData;
const materialDocuments: MaterialDocument[] = materialDocumentsData;

const ProductTrackingPage: React.FC = () => {
  // Prepare data for the force graph
  const graphData = useMemo(() => {
    const nodes: any[] = [];
    const links: any[] = [];
    const nodeIds = new Set();

    // Add suppliers
    suppliers.forEach(s => {
      if (!nodeIds.has(s.BusinessPartner)) {
        nodes.push({ id: s.BusinessPartner, name: s.CompanyName, type: 'supplier' });
        nodeIds.add(s.BusinessPartner);
      }
    });

    // Add customers
    customers.forEach(c => {
      if (!nodeIds.has(c.Customer)) {
        nodes.push({ id: c.Customer, name: c.CustomerName, type: 'customer' });
        nodeIds.add(c.Customer);
      }
    });

    // Add batches and links
    materialDocuments.forEach(doc => {
      const batchId = `batch-${doc.Batch}`;
      // Add batch node if it doesn't exist
      if (!nodeIds.has(batchId)) {
        nodes.push({ id: batchId, name: `Batch: ${doc.Batch}`, type: 'batch' });
        nodeIds.add(batchId);
      }
      // Link supplier to batch
      if (nodeIds.has(doc.Supplier) && nodeIds.has(batchId)) {
        links.push({ source: doc.Supplier, target: batchId });
      }
      // Link batch to customer
      if (nodeIds.has(batchId) && nodeIds.has(doc.Customer)) {
        links.push({ source: batchId, target: doc.Customer });
      }
    });

    return { nodes, links };
  }, []);

  const getNodeColor = (node: any) => {
    switch (node.type) {
      case 'supplier': return '#1976d2'; // Blue
      case 'customer': return '#dc004e'; // Pink
      case 'batch': return '#ff9800'; // Orange
      default: return '#bdbdbd'; // Grey
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Product & Batch Tracking
      </Typography>

      {/* Material Documents Table */}
      <Paper sx={{ mb: 4 }}>
        <TableContainer>
          <Table stickyHeader aria-label="material documents table">
            <TableHead>
              <TableRow>
                <TableCell>Document ID</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Material</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materialDocuments.map((doc) => (
                <TableRow key={doc.MaterialDocument}>
                  <TableCell>{doc.MaterialDocument}</TableCell>
                  <TableCell>
                    <Chip 
                      label={doc.Batch} 
                      color={doc.Batch === 'GFRM0520-QC' ? 'error' : 'default'} 
                      size="small" 
                    />
                  </TableCell>
                  <TableCell>{doc.Material}</TableCell>
                  <TableCell>{suppliers.find(s => s.BusinessPartner === doc.Supplier)?.CompanyName || doc.Supplier}</TableCell>
                  <TableCell>{customers.find(c => c.Customer === doc.Customer)?.CustomerName || doc.Customer}</TableCell>
                  <TableCell align="right">{doc.Quantity}</TableCell>
                  <TableCell>{doc.DocumentDate}</TableCell>
                  <TableCell>{doc.ShipmentStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Supply Chain Network Graph */}
      <Paper sx={{ height: '500px', position: 'relative', p: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
          Supply Chain Flow (Graph Temporarily Disabled)
        </Typography>
        {/* 
        <ForceGraph2D
          graphData={graphData}
          nodeLabel="name"
          nodeColor={getNodeColor}
          linkColor={() => 'rgba(0,0,0,0.2)'}
          linkWidth={1}
          nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
            const label = node.name;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black'; // Node text color
            ctx.fillText(label, node.x, node.y + 10); // Adjust text position below node
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, 5 / globalScale, 0, 2 * Math.PI, false);
            ctx.fillStyle = getNodeColor(node);
            ctx.fill();
          }}
        />
        */}
      </Paper>
    </Box>
  );
};

export default ProductTrackingPage; 