import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import ListItemButton from '@mui/material/ListItemButton'; // Use ListItemButton for better semantics
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScienceIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IncidentCommandCenter from './components/IncidentCommand/IncidentCommandCenter';
import ProductTrackingPage from './components/ProductTracking/ProductTrackingPage';
import InvestigationPage from './components/Investigation/InvestigationPage';
import ResourcesPage from './components/ResourceManagement/ResourcesPage';
import NotificationsPage from './components/Notifications/NotificationsPage';

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

const drawerWidth = 240;

// Define the navigation items
const navItems = [
  { text: 'Incident Command', icon: <DashboardIcon />, path: '/' },
  { text: 'Product Tracking', icon: <TimelineIcon />, path: '/products' },
  { text: 'Investigation', icon: <ScienceIcon />, path: '/investigation' },
  { text: 'Resources', icon: <PeopleIcon />, path: '/resources' },
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
];

function App() {
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
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton component={Link} to={item.path}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          {/* Main Content Area */}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar /> {/* Offset for AppBar */}
            <Container maxWidth="lg">
              <Routes>
                <Route path="/" element={<IncidentCommandCenter />} />
                <Route path="/products" element={<ProductTrackingPage />} />
                <Route path="/investigation" element={<InvestigationPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 