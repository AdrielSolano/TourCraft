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
import imga3 from '../assets/imga3.png';
import image54 from '../assets/image54.png';

const ChankanaabBeach = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Cozumel');
  };

  const handleBookNow = () => {
    // Aquí puedes agregar la lógica para reservar
    console.log('Booking Chankanaab Beach tour');
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
              backgroundImage: `url(${imga3})`,
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
              Chankanaab Beach
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
                Experience Paradise at Chankanaab Beach
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
                Discover the pristine beauty of Chankanaab Beach, a marine park and beach club that 
                offers the perfect combination of relaxation and adventure. This protected area features 
                crystal-clear waters, vibrant coral reefs, and a dolphin encounter program that makes 
                it one of Cozumel's most popular destinations.
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
                    • Professional snorkeling equipment rental
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Guided snorkeling tours of coral reefs
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Dolphin encounter programs
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Beach facilities and amenities
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
                      Duration: 7 Nights, 8 days
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: '#7bbcb0' }} />
                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                      Location: Chankanaab Beach, Cozumel
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
                    From $960
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

export default ChankanaabBeach; 