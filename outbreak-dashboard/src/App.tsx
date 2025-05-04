import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BatchListSidebar from './components/BatchListSidebar/BatchListSidebar';
import ProductJourneyMap from './components/ProductJourneyMap/ProductJourneyMap';

// Define the theme (can be customized later)
const theme = createTheme({
  palette: {
    mode: 'light', // Can be 'light' or 'dark'
    primary: {
      main: '#1976d2', // Example primary color (Material UI blue)
    },
    secondary: {
      main: '#dc004e', // Example secondary color (Material UI pink)
    },
  },
});

const drawerWidth = 280;

function App() {
  // Example: Define a default batch ID to redirect to
  const defaultBatchId = 'GFRM0520-QC'; // Or fetch the first/most relevant one

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          {/* App Bar */}
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Outbreak Response Dashboard
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Sidebar Drawer */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar /> {/* Offset for AppBar */}
            <BatchListSidebar />
          </Drawer>

          {/* Main Content Area */}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar /> {/* Offset for AppBar */}
            <Container maxWidth={false} disableGutters>
              <Routes>
                {/* Route for specific batch details */}
                <Route path="/batch/:batchId" element={<ProductJourneyMap />} />
                {/* Default route: Redirect to a specific batch or show a welcome page */}
                <Route path="/" element={<Navigate to={`/batch/${defaultBatchId}`} replace />} />
                {/* Optional: Add a 404 or catch-all route */}
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 