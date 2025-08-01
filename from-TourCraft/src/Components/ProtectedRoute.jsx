import React from 'react';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, marginBottom: '140px' }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontFamily: 'Playfair Display', fontWeight: 700 }}>
            Access Required
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
            You must be logged in to access this page.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/Log-in')}
            sx={{
              bgcolor: '#7bbcb0',
              '&:hover': { bgcolor: '#6aa99d' },
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              px: 4,
              py: 1.5
            }}
          >
            Sign In
          </Button>
        </Paper>
      </Container>
    );
  }

  return children;
};

export default ProtectedRoute; 