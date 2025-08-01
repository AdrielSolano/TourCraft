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
import imga4 from '../assets/imga4.png';

const KaanLuumLagoon = () => {
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
                image={imga4}
                alt="Kaan Luum Lagoon"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Kaan Luum Lagoon
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Swimming" color="primary" />
              <Chip label="Nature" color="secondary" />
              <Chip label="Adventure" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Experience the magical Kaan Luum Lagoon, a hidden gem in the heart of the Yucatan Peninsula. 
              This stunning turquoise lagoon is surrounded by lush jungle and offers a perfect escape from 
              the crowds. The crystal-clear waters are ideal for swimming, floating, and connecting with 
              nature in this serene paradise.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Crystal-clear turquoise waters<br/>
              • Surrounded by lush jungle<br/>
              • Perfect for swimming and floating<br/>
              • Less crowded than other cenotes<br/>
              • Natural beauty and tranquility<br/>
              • Great for photography
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
                Kaan Luum, Tulum
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.7} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.7 (892 reviews)
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
              Book This Visit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default KaanLuumLagoon; 