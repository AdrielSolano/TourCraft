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
import frame341 from '../assets/Frame341.png';

const BirdWatching = () => {
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
                image={frame341}
                alt="Bird Watching"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Bird Watching
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Wildlife" color="primary" />
              <Chip label="Nature" color="secondary" />
              <Chip label="Photography" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Embark on a guided bird watching adventure in Holbox, home to over 150 species of 
              birds including flamingos, pelicans, herons, and migratory birds. This pristine 
              island offers some of the best bird watching opportunities in the Yucatan Peninsula, 
              with expert guides who will help you spot and identify various species in their 
              natural habitat.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Over 150 bird species to observe<br/>
              • Expert local birding guides<br/>
              • Flamingo and pelican sightings<br/>
              • Migratory bird watching<br/>
              • Professional binoculars provided<br/>
              • Photography opportunities
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <AccessTime sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Duration: 3-4 hours
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <LocationOn sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Various Locations, Holbox Island
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.9} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.9 (423 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              $55 USD
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

export default BirdWatching; 