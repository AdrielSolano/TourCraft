import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
  Rating,
} from '@mui/material';
import AccessTime from "@mui/icons-material/AccessTime";
import LocationOn from "@mui/icons-material/LocationOn";
import imga2 from '../assets/imga2.png';

const CenoteSwimAdventure = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/PlayadelCarmen');
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ px: 15, py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Button 
            onClick={handleBackClick}
            sx={{ 
              mb: 3, 
              color: "#0e3d4d",
              fontFamily: "Playfair Display",
              textTransform: "none",
              fontSize: "16px"
            }}
          >
            ← Back to Playa del Carmen
          </Button>
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: "#0e3d4d",
              fontSize: { xs: "32px", md: "48px" }
            }}
          >
            Cenote Swim Adventure
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0px 3px 20px rgba(0,0,0,0.08)" }}>
              <CardMedia
                component="img"
                height="400"
                image={imga2}
                alt="Cenote Swim Adventure"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    color: "#0e3d4d",
                    mb: 2
                  }}
                >
                  About Cenote Swim Adventure
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    color: "#666",
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  Dive into the mystical world of cenotes with this exciting swimming adventure. Explore 
                  ancient underground caves and crystal-clear natural pools formed by collapsed limestone. 
                  This unique experience combines adventure, nature, and the rich geological history of 
                  the Yucatan Peninsula.
                </Typography>
              </Box>

              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    color: "#0e3d4d",
                    mb: 2
                  }}
                >
                  What to Expect
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AccessTime sx={{ color: "#0e3d4d" }} />
                    <Typography sx={{ fontFamily: "Playfair Display" }}>
                      Duration: 4-5 hours
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: "#0e3d4d" }} />
                    <Typography sx={{ fontFamily: "Playfair Display" }}>
                      Location: Various Cenotes, Playa del Carmen
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    color: "#0e3d4d",
                    mb: 2
                  }}
                >
                  Highlights
                </Typography>
                <Stack spacing={1}>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Swim in crystal-clear cenote waters
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Explore underground cave systems
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Learn about Mayan history and geology
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Professional safety equipment provided
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Small group guided experience
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Stalactite and stalagmite formations
                  </Typography>
                </Stack>
              </Box>

              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    color: "#0e3d4d",
                    mb: 2
                  }}
                >
                  Experience Details
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Playfair Display", fontWeight: 600 }}>
                      Price
                    </Typography>
                    <Typography sx={{ fontFamily: "Playfair Display", fontWeight: 600, color: "#0e3d4d" }}>
                      $65
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Playfair Display", fontWeight: 600 }}>
                      Rating
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Rating value={5} readOnly size="small" />
                      <Typography sx={{ fontFamily: "Playfair Display" }}>
                        5.0 (1 review)
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#80b9ad",
                  color: "#0e3d4d",
                  borderRadius: "12px",
                  py: 2,
                  textTransform: "none",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: "#6da89c"
                  }
                }}
              >
                Book This Experience
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CenoteSwimAdventure; 