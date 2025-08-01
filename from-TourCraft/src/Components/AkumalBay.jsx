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
import imga3 from '../assets/imga3.png';

const AkumalBay = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Tulum');
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
          ← Back to Tulum
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={imga3}
                alt="Akumal Bay"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Akumal Bay
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Beach" color="primary" />
              <Chip label="Relaxation" color="secondary" />
              <Chip label="Nature" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Discover the pristine beauty of Akumal Bay, a protected marine sanctuary known for its 
              calm waters and abundant sea life. This picturesque bay offers perfect conditions for 
              swimming, snorkeling, and simply relaxing on its white sandy beaches. The bay's name 
              means "Place of the Turtle" in Mayan, and you'll often spot these gentle creatures 
              in their natural habitat.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Pristine white sand beaches<br/>
              • Crystal-clear turquoise waters<br/>
              • Protected marine sanctuary<br/>
              • Perfect for swimming and snorkeling<br/>
              • Sea turtle sightings<br/>
              • Peaceful and uncrowded atmosphere
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <AccessTime sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Duration: Full day
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <LocationOn sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Akumal Bay, Tulum
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.9} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.9 (2,156 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              Free Entry
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
              Visit Beach
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AkumalBay; 