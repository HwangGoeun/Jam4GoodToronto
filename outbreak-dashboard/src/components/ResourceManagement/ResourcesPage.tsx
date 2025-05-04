import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';

const ResourcesPage: React.FC = () => {
  // Mock data (replace with real data later)
  const teamAssignments = [
    { role: 'Incident Lead', name: 'Sarah Johnson' },
    { role: 'QA Contact', name: 'John Smith' },
    { role: 'Logistics Coordinator', name: 'Alan Reid' },
    { role: 'Comms Specialist', name: 'Chloe T.' },
  ];

  const requiredTraining = [
    { name: 'HACCP Refresher', status: 'Completed' },
    { name: 'Recall Procedures', status: 'Completed' },
    { name: 'Sanitation Protocols', status: 'Pending' },
  ];

  const equipmentStatus = [
    { name: 'Packaging Line A', status: 'Operational' },
    { name: 'Packaging Line B', status: 'Under Maintenance' },
    { name: 'Wash Station 1', status: 'Operational' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Resources & Preparedness
      </Typography>

      <Grid container spacing={4}>
        {/* Team Assignments */}
        {/* @ts-ignore - Suppressing persistent Grid type error */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Team Assignments
          </Typography>
          <Paper sx={{ p: 2 }}>
            <List dense>
              {teamAssignments.map((assignment) => (
                <ListItem key={assignment.role}>
                  <ListItemIcon>
                    <AssignmentIndIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={assignment.role} secondary={assignment.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Training Records */}
        {/* @ts-ignore - Suppressing persistent Grid type error */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Required Training Status
          </Typography>
          <Paper sx={{ p: 2 }}>
             <List dense>
              {requiredTraining.map((training) => (
                <ListItem key={training.name}>
                  <ListItemIcon>
                    <SchoolIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={training.name} secondary={training.status} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Equipment Status */}
        {/* @ts-ignore - Suppressing persistent Grid type error */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Equipment Status
          </Typography>
          <Paper sx={{ p: 2 }}>
             <List dense>
              {equipmentStatus.map((equipment) => (
                <ListItem key={equipment.name}>
                  <ListItemIcon>
                    <ConstructionIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={equipment.name} secondary={equipment.status} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResourcesPage; 