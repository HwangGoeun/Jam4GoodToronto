import React from 'react';
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
  Grid,
} from '@mui/material';
import { labTests, consumerComplaints } from '../../mock/data';
import { format } from 'date-fns';

const InvestigationPage: React.FC = () => {
  const getLabStatusChip = (status: string) => {
    switch (status) {
      case 'positive': return <Chip label="Positive" color="error" size="small" />;
      case 'negative': return <Chip label="Negative" color="success" size="small" />;
      case 'pending': return <Chip label="Pending" color="warning" size="small" />;
      case 'completed': return <Chip label="Completed" color="info" size="small" />;
      default: return <Chip label={status} size="small" />;
    }
  };

  const getComplaintStatusChip = (status: string) => {
    switch (status) {
      case 'new': return <Chip label="New" color="error" size="small" />;
      case 'investigating': return <Chip label="Investigating" color="warning" size="small" />;
      case 'resolved': return <Chip label="Resolved" color="success" size="small" />;
      default: return <Chip label={status} size="small" />;
    }
  };

  const getComplaintSeverityChip = (severity: string) => {
    switch (severity) {
      case 'high': return <Chip label="High" color="error" size="small" />;
      case 'medium': return <Chip label="Medium" color="warning" size="small" />;
      case 'low': return <Chip label="Low" color="info" size="small" />;
      default: return <Chip label={severity} size="small" />;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Investigation
      </Typography>

      <Grid container spacing={4}>
        {/* Lab Tests Section */}
        {/* @ts-ignore - Suppressing persistent Grid type error */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Lab Test Results
          </Typography>
          <Paper>
            <TableContainer>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Test ID</TableCell>
                    <TableCell>Batch ID</TableCell>
                    <TableCell>Test Date</TableCell>
                    <TableCell>Test Type</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {labTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell>{test.id}</TableCell>
                      <TableCell><Chip label={test.batchId} size="small" /></TableCell>
                      <TableCell>{format(new Date(test.testDate), 'yyyy-MM-dd HH:mm')}</TableCell>
                      <TableCell>{test.testType}</TableCell>
                      <TableCell>{getLabStatusChip(test.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Consumer Complaints Section */}
        {/* @ts-ignore - Suppressing persistent Grid type error */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Consumer Complaints
          </Typography>
          <Paper>
            <TableContainer>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Complaint ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Batch ID</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {consumerComplaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell>{complaint.id}</TableCell>
                      <TableCell>{format(new Date(complaint.date), 'yyyy-MM-dd HH:mm')}</TableCell>
                      <TableCell><Chip label={complaint.batchId} size="small" /></TableCell>
                      <TableCell>{getComplaintSeverityChip(complaint.severity)}</TableCell>
                      <TableCell>{getComplaintStatusChip(complaint.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestigationPage; 