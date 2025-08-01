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

const YalahauLagoon = () => {
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
                image={imga3}
                alt="Yalahau Lagoon"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Yalahau Lagoon
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Swimming" color="primary" />
              <Chip label="Nature" color="secondary" />
              <Chip label="Freshwater" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Experience the crystal-clear freshwater of Yalahau Lagoon, a natural spring-fed 
              swimming hole surrounded by lush mangroves. This hidden gem offers a refreshing 
              escape from the salty ocean waters and is perfect for swimming, snorkeling, and 
              observing local wildlife. The lagoon's name means "clear water" in Mayan.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Crystal-clear freshwater swimming<br/>
              • Surrounded by lush mangroves<br/>
              • Perfect for snorkeling<br/>
              • Wildlife observation opportunities<br/>
              • Natural spring-fed waters<br/>
              • Peaceful and uncrowded
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
                Yalahau Lagoon, Holbox Island
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.7} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.7 (892 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              $15 USD
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
              Book This Visit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default YalahauLagoon; 