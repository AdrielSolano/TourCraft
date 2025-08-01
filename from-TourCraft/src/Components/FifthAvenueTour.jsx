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
import imga4 from "../assets/imga4.png";

const FifthAvenueTour = () => {
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
            5th Avenue Tour
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0px 3px 20px rgba(0,0,0,0.08)" }}>
              <CardMedia
                component="img"
                height="400"
                image="https://imgs.search.brave.com/MYE35k9WOwAMy_WQzE-sAF4LdeDJt3ieW7TZhsEAsQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2lsbGVzLXNtYXJ0/aG9tZXBsYXlhLmNv/bS9fbWVkaWEvaW1n/L3NtYWxsL3BsYXlh/LTVlbWUtYXZlbnVl/LndlYnA"
                alt="5th Avenue Playa del Carmen"
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
                  About 5th Avenue
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: "Playfair Display",
                    color: "#666",
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  La Quinta Avenida (5th Avenue) is the heart and soul of Playa del Carmen. This pedestrian-only street 
                  stretches for 20 blocks and is lined with restaurants, bars, shops, and entertainment venues. It's the perfect 
                  place to experience the vibrant culture and nightlife of the Riviera Maya.
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
                      Duration: 2-3 hours
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: "#0e3d4d" }} />
                    <Typography sx={{ fontFamily: "Playfair Display" }}>
                      Location: Playa del Carmen Downtown
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
                    • Explore local artisan shops and boutiques
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Taste authentic Mexican cuisine
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Visit the famous Mamita's Beach Club
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Experience live music and entertainment
                  </Typography>
                  <Typography sx={{ fontFamily: "Playfair Display", color: "#666" }}>
                    • Shop for souvenirs and local crafts
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
                      $35
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

export default FifthAvenueTour; 