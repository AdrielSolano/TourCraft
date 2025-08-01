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

const CenoteYalahau = () => {
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
                image={imga4}
                alt="Cenote Yalahau"
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Cenote Yalahau
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Swimming" color="primary" />
              <Chip label="Cenote" color="secondary" />
              <Chip label="Nature" color="success" />
            </Stack>

            <Typography variant="body1" color="text.secondary" paragraph>
              Discover the mystical Cenote Yalahau, a natural sinkhole filled with crystal-clear 
              freshwater. This sacred cenote was once used by the ancient Mayans for ceremonial 
              purposes and is now a perfect spot for swimming and connecting with nature. The 
              cenote's deep blue waters and surrounding jungle create a truly magical atmosphere.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              • Crystal-clear freshwater swimming<br/>
              • Ancient Mayan ceremonial site<br/>
              • Surrounded by lush jungle<br/>
              • Deep blue cenote waters<br/>
              • Peaceful and spiritual atmosphere<br/>
              • Perfect for meditation and relaxation
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
                Cenote Yalahau, Holbox Island
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.8} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                4.8 (567 reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              $20 USD
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

export default CenoteYalahau; 