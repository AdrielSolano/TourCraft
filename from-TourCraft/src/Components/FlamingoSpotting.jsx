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
import imga5 from '../assets/imga5.png';

const FlamingoSpotting = () => {
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
                image={imga5}
                alt="Flamingo Spotting"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Flamingo Spotting
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Wildlife" color="primary" />
              <Chip label="Nature" color="secondary" />
              <Chip label="Photography" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Experience the magical sight of pink flamingos in their natural habitat at Holbox Island. 
              These elegant birds flock to the shallow waters and lagoons around the island, creating 
              a spectacular natural display. Join a guided tour to learn about flamingo behavior and 
              get the perfect photographs of these beautiful creatures.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Pink flamingo sightings in natural habitat<br/>
              • Expert wildlife guides<br/>
              • Photography opportunities<br/>
              • Learn about flamingo behavior<br/>
              • Visit multiple flamingo locations<br/>
              • Small group experience
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <AccessTime sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Duration: 2-3 hours
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <LocationOn sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Various Lagoons, Holbox Island
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.8} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.8 (678 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              $40 USD
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
              Book This Tour
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FlamingoSpotting; 