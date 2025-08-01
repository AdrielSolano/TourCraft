import React, { useEffect, useState } from 'react';
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
import {
  CardTravel,
  Explore,
  LocalTaxi,
  DirectionsWalk,
  DirectionsBus,
} from '@mui/icons-material';
import imga5 from '../assets/imga5.png';
import image54 from '../assets/image54.png';
import img12 from '../assets/img12.jpg';
import axios from "axios";

const iconMap = {
  "Business Tours": CardTravel,
  "Nature & Adventure": Explore,
  "Transportation": LocalTaxi,
  "Local Visit": DirectionsWalk,
  "Pet Friendly": DirectionsBus,
};

const CozumelMuseum = () => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [zona, setZona] = useState(null);

  const getDescription = () => {
    if (zona && zona.descripción) {
      return zona.descripción;
    }
    if (zona && !zona.descripción) {
      return 'No data available for this place.';
    }
    return 'Loading description...';
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/categoria")
      .then(res => setCategorias(res.data.data))
      .catch(err => console.error("Error al obtener categorías", err));
  }, []);

  useEffect(() => {
    const idZona = "688bd708f77e1f6903e19c7b"; // San Gervasio Ruins ID
    axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
      .then(res => setZona(res.data.data))
      .catch(err => console.error("Error al obtener zona turística", err));
  }, []);

  const handleBack = () => {
    navigate('/Cozumel');
  };

  const handleBookNow = () => {
    // Aquí puedes agregar la lógica para reservar
    console.log('Booking Cozumel Museum tour');
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
              backgroundImage: `url(${img12})`,
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
              Cozumel Museum
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
                Discover the Rich Heritage of Cozumel
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
                {getDescription()}
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
                    • Guided tour of the museum exhibits
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Ancient Mayan artifacts and history
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Maritime history of Cozumel
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Marine life exhibits and education
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Interactive educational displays
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Professional bilingual guide
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Transportation to and from the museum
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
                      Location: San Miguel, Cozumel
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
                    From $1200
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    per person
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {categorias.map((cat) => {
                    const Icon = iconMap[cat.nombre] || CardTravel;
                    return (
                      <Chip
                        key={cat._id}
                        icon={<Icon sx={{ color: '#80b9ad' }} />}
                        label={cat.nombre}
                        sx={{ backgroundColor: "#fff", color: '#80b9ad', fontWeight: 700, border: "none", boxShadow: 1, fontFamily: "Playfair Display" }}
                      />
                    );
                  })}
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

export default CozumelMuseum; 