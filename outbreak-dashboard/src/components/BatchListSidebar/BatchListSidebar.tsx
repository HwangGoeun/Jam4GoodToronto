import React, { useMemo } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, TextField, InputAdornment } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom'; // Use alias to avoid name clash
import SearchIcon from '@mui/icons-material/Search';
import { MaterialDocument, LabTest } from '../../types'; // Import types

// Import actual data
import materialDocumentsData from '../../mock/materialDocuments.json';
import labTestsData from '../../mock/labTests.json';

// Assert types
const materialDocuments = materialDocumentsData as MaterialDocument[];
const labTests = labTestsData as LabTest[];

const BatchListSidebar: React.FC = () => {
  const { batchId: currentBatchId } = useParams<{ batchId: string }>(); // Get current batch ID to highlight

  // Derive unique batches and their status
  const batches = useMemo(() => {
    const uniqueBatches = new Map<string, { name: string; status: 'alert' | 'ok' }>();

    materialDocuments.forEach(doc => {
      if (!uniqueBatches.has(doc.Batch)) {
        // Placeholder for deriving name - could come from doc.Material or another source
        const name = `Product Batch ${doc.Batch}`;
        // Check lab tests for status
        const hasPositiveTest = labTests.some(test => test.batchId === doc.Batch && test.status === 'positive');
        uniqueBatches.set(doc.Batch, {
          name: name,
          status: hasPositiveTest ? 'alert' : 'ok'
        });
      }
    });

    // Convert map to array
    return Array.from(uniqueBatches.entries()).map(([id, data]) => ({ id, ...data }));

  }, []); // Recalculate only if data changes (add dependencies if needed)

  // TODO: Add state for search, filtering, sorting

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Product Updates</Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 1 }}
      />
      {/* TODO: Add Sort By dropdown */}
      <List dense>
        {batches.map((batch) => (
          <ListItem key={batch.id} disablePadding sx={{ 
              borderLeft: batch.status === 'alert' ? '4px solid red' : 'none', 
              // Highlight the selected batch
              bgcolor: batch.id === currentBatchId ? 'action.selected' : (batch.status === 'alert' ? 'rgba(255, 0, 0, 0.08)' : 'transparent')
            }}>
             {/* Wrap ListItemButton with RouterLink */}
            <ListItemButton component={RouterLink} to={`/batch/${batch.id}`}>
                {/* Use primary/secondary text, could add icons later */}
                <ListItemText primary={batch.name} secondary={`Batch: ${batch.id}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BatchListSidebar; 