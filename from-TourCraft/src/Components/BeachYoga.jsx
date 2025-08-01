import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Rating,
  Chip,
  Divider,
} from '@mui/material';
import { AccessTime, LocationOn } from '@mui/icons-material';
import imga1 from '../assets/imga1.png';

const BeachYoga = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Holbox');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Button
          onClick={handleBackClick}
          sx={{
            mb: 3,
            color: '#1976d2',
            '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.04)' },
          }}
        >
          ← Back to Holbox
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={imga1}
                alt="Beach Yoga"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Beach Yoga
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Wellness" color="primary" />
              <Chip label="Yoga" color="secondary" />
              <Chip label="Relaxation" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Connect with your inner self while practicing yoga on the pristine beaches of Holbox. 
              This peaceful experience combines the healing power of yoga with the natural beauty of 
              the Caribbean Sea. Perfect for all skill levels, from beginners to advanced practitioners, 
              this beach yoga session will leave you feeling refreshed and rejuvenated.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Sunrise or sunset yoga sessions<br/>
              • Professional yoga instructor<br/>
              • All skill levels welcome<br/>
              • Yoga mats provided<br/>
              • Oceanfront practice location<br/>
              • Meditation and breathing exercises
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <AccessTime sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Duration: 1-1.5 hours
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <LocationOn sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Holbox Beach
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.9} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.9 (345 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              $25 USD
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                bgcolor: '#1976d2',
                '&:hover': { bgcolor: '#1565c0' },
              }}
            >
              Book This Session
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BeachYoga; 