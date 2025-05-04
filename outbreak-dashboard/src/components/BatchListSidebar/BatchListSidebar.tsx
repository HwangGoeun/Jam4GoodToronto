import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Mock data for now - replace with actual data fetching and logic later
const mockBatches = [
  { id: 'GFRM0520-QC', name: 'Romaine Lettuce - 600g (3 hearts)', status: 'alert' },
  { id: 'GFRM0519-ON', name: 'Romaine Lettuce - 600g (3 hearts)', status: 'ok' },
  { id: 'GFRM0518-MB', name: 'Romaine Lettuce - 600g (3 hearts)', status: 'ok' },
];

const BatchListSidebar: React.FC = () => {
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
        {mockBatches.map((batch) => (
          <ListItem key={batch.id} /* TODO: Add Link component */ sx={{ 
              borderLeft: batch.status === 'alert' ? '4px solid red' : 'none', 
              bgcolor: batch.status === 'alert' ? 'rgba(255, 0, 0, 0.1)' : 'transparent'
            }}>
            <ListItemText primary={batch.name} secondary={`Batch: ${batch.id}`} />
            {/* TODO: Add status icon/indicator */} 
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BatchListSidebar; 