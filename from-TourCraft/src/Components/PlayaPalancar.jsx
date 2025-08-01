import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import frame341 from '../assets/Frame341.png';
import image54 from '../assets/image54.png';
import { Link as RouterLink } from 'react-router-dom';

const PlayaPalancar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Cozumel');
  };

  const handleBookNow = () => {
    // Aquí puedes agregar la lógica para reservar
    console.log('Booking Playa Palancar tour');
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ px: 0, overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ px: 15 }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              sx={{
                mb: 2,
                fontFamily: "Playfair Display",
                fontWeight: 600,
                fontSize: "18px",
                color: "#000000",
                textTransform: "none",
              }}
            >
              Back to Cozumel
            </Button>
          </Box>

          {/* Hero Section */}
          <Box
            sx={{
              height: 400,
              borderRadius: "20px",
              backgroundImage: `url(${frame341})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: "20px",
              }}
            />
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              sx={{
                fontSize: "48px",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                fontFamily: "Playfair Display",
                position: 'relative',
                zIndex: 1,
              }}
            >
              Playa Palancar
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  mb: 3,
                  color: "#0e3d4d"
                }}
              >
                Discover Paradise at Playa Palancar
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Playfair Display",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  mb: 4,
                  color: "#666"
                }}
              >
                Experience the pristine beauty of Playa Palancar, one of Cozumel's most beautiful and 
                secluded beaches. This untouched paradise features powdery white sand, crystal-clear 
                turquoise waters, and a peaceful atmosphere perfect for relaxation and rejuvenation 
                in nature's embrace.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  mb: 2,
                  color: "#0e3d4d"
                }}
              >
                What's Included:
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Access to pristine white sand beaches
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Crystal-clear turquoise waters for swimming
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Excellent snorkeling opportunities
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Secluded and peaceful atmosphere
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Natural beauty and tranquility
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Professional bilingual guide
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Transportation to and from the beach
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Light refreshments and snacks
                  </Typography>
                </Stack>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  mb: 2,
                  color: "#0e3d4d"
                }}
              >
                Tour Details:
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: '#7bbcb0' }} />
                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                      Duration: 3 Nights, 4 days
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: '#7bbcb0' }} />
                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                      Location: Playa Palancar, Cozumel Island
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ borderRadius: 3, p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    mb: 3,
                    color: "#0e3d4d"
                  }}
                >
                  Tour Information
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ color: '#7bbcb0', fontWeight: 700 }}>
                    From $860
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    per person
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={5} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1, color: '#666' }}>
                      (1 Review)
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleBookNow}
                  sx={{
                    bgcolor: '#7bbcb0',
                    py: 2,
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "none",
                    '&:hover': {
                      bgcolor: '#6aa99d'
                    }
                  }}
                >
                  Book Now
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    color: '#666',
                    fontFamily: "Playfair Display"
                  }}
                >
                  Free cancellation up to 24 hours before tour
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default PlayaPalancar; 