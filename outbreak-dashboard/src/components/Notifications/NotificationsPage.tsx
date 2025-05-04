import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Badge,
  Chip,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { notifications as initialNotifications, Notification } from '../../mock/data';
import { format } from 'date-fns';

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const handleToggleRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(n =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  const getPriorityColor = (priority: string): 'error' | 'warning' | 'info' | 'default' => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alert': return <ErrorIcon color="error" />;
      case 'warning': return <WarningIcon color="warning" />;
      case 'info': return <InfoIcon color="info" />;
      default: return <NotificationsIcon />;
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 0, mr: 2 }}>
          Notifications
        </Typography>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsActiveIcon />
        </Badge>
      </Box>

      <Paper>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {notifications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map((notification) => (
            <ListItem
              key={notification.id}
              secondaryAction={
                <IconButton edge="end" aria-label="toggle read" onClick={() => handleToggleRead(notification.id)}>
                  {notification.read ? <CheckCircleIcon color="success" /> : <MarkAsUnreadIcon />}
                </IconButton>
              }
              disablePadding
              sx={{ opacity: notification.read ? 0.6 : 1 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                    {getTypeIcon(notification.type)}
                </ListItemIcon>
                <ListItemText
                  primary={notification.message}
                  secondary={`${format(new Date(notification.timestamp), 'PPpp')} - Priority: `}
                />
                <Chip label={notification.priority} color={getPriorityColor(notification.priority)} size="small" sx={{ ml: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default NotificationsPage; 