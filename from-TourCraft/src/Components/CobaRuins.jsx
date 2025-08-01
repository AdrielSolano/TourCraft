import React from 'react';
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
  Divider
} from '@mui/material';
import AccessTime from "@mui/icons-material/AccessTime";
import LocationOn from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import imga3 from "../assets/imga3.png";

const CobaRuins = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Tulum');
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
            ← Back to Tulum
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
            Coba Ruins
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0px 3px 20px rgba(0,0,0,0.08)" }}>
              <CardMedia
                component="img"
                height="400"
                image={imga3}
                alt="Coba Ruins"
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
                  About Coba Ruins
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    color: "#666",
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  Coba is one of the most important Mayan archaeological sites in the Yucatan 
                  Peninsula. This ancient city features the tallest pyramid in the region, 
                  Nohoch Mul, which visitors can climb for spectacular jungle views. The site 
                  also includes ancient causeways and numerous temple structures.
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
                      Duration: Half day
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: "#0e3d4d" }} />
                    <Typography sx={{ fontFamily: "Playfair Display" }}>
                      Location: Coba Archaeological Zone
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
                    • Climb the tallest pyramid in the region
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Explore ancient Mayan causeways
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Learn about Mayan history and culture
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Jungle surroundings and wildlife
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Professional bilingual guide
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
                  Tour Details
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Playfair Display", fontWeight: 600 }}>
                      Price
                    </Typography>
                    <Typography sx={{ fontFamily: "Playfair Display", fontWeight: 600, color: "#0e3d4d" }}>
                      $75
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
                Book This Tour
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CobaRuins; 