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
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Groups,
  Paid,
  DirectionsBus,
  Schedule,
  CardTravel,
  Explore,
  LocalTaxi,
  DirectionsWalk,
  ChevronRight
} from '@mui/icons-material';
import imga1 from '../assets/imga1.png';
import image54 from '../assets/image54.png';
import img from '../assets/img.png';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import axios from "axios";
import lolaValentina from "../assets/lola-valentina.jpg";
import laCasaDeLasMayoras from "../assets/la-casa-de-las-mayoras.jpg";
import laRosaNegra from "../assets/la-rosa-negra.jpg";

const iconMap = {
  "Business Tours": CardTravel,
  "Nature & Adventure": Explore,
  "Transportation": LocalTaxi,
  "Local Visit": DirectionsWalk,
  "Pet Friendly": DirectionsBus,
};

const texts = [
  "3 pickup location options: Parque de Santa Ana, Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana. See more",
  "Van (2 hours)",
  "Chichén Itzá - Photo stop, Visit, Guided tour, Free time, Shopping (2.5 hours)",
  "Van (15 minutes)",
  "Cenote Ik Kil - Lunch, Swimming (2.5 hours)",
  "Van (1 hour)",
  "Izamal - Photo stop, Visit, Guided tour, Free time, Shopping (1.5 hours)",
  "Van (1 hour)",
  "3 drop-off locations: Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana, Parque de Santa Ana"
];

const ScubaDivingTour = () => {
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
    const idZona = "688bd70cf77e1f6903e19c7c";
    axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
      .then(res => setZona(res.data.data))
      .catch(err => console.error("Error al obtener zona turística", err));
  }, []);

  const handleBack = () => {
    navigate('/Cozumel');
  };

  const handleBookNow = () => {
    // Aquí puedes agregar la lógica para reservar
    console.log('Booking Scuba Diving Tour');
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
              backgroundImage: `url(https://imgs.search.brave.com/9bo7DwFQ2Hn0OM8mhsMDdthfV-4ag50JnzJfnO692C8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVzcG9uc2libGV0/cmF2ZWwuY29tL2lt/YWdlc0NsaWVudC9T/XzEzOTc1Ni5qcGc)`,
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
              Scuba Diving Tour
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
                Explore the Underwater Wonders of Cozumel
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
                    • Professional PADI certified dive guides
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Complete scuba diving equipment rental
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Safety briefing and training session
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Multiple world-class dive sites
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Marine life identification and education
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Underwater photography opportunities
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                    • Transportation to and from dive sites
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
                      Duration: 10 Nights, 9 days
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: '#7bbcb0' }} />
                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                      Location: Cozumel, Quintana Roo
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
                    From $2250
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

        <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ fontWeight: 700, mb: 7.5, fontFamily: "Playfair Display" }}>
                    Nearby places in Scuba Diving Tour
                </Typography>

                <Grid container spacing={5}>
                    {[
                        {
                            image: lolaValentina,
                            title: 'Coral Reef Restaurant',
                            description: 'Beachfront restaurant specializing in fresh seafood and tropical cuisine. Perfect for post-diving refreshment with ocean views.',
                            url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155162-Reviews-Coral_Reef_Restaurant-Cozumel_Yucatan_Peninsula.html"
                        },
                        {
                            image: laCasaDeLasMayoras,
                            title: 'El Buzo',
                            description: 'Diving-themed restaurant with fresh catch of the day and international cuisine. Famous for their seafood paella and diver stories.',
                            url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155163-Reviews-El_Buzo-Cozumel_Yucatan_Peninsula.html"
                        },
                        {
                            image: laRosaNegra,
                            title: 'Marina Grill',
                            description: 'Restaurant at the marina with fresh seafood and grilled specialties. Known for their ceviche and sunset dining experience.',
                            url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155164-Reviews-Marina_Grill-Cozumel_Yucatan_Peninsula.html"
                        }
                    ].map((place, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                                boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.08)',
                                borderRadius: '20px',
                                overflow: 'hidden'
                            }}>
                                <CardMedia
                                    component="img"
                                    image={place.image}
                                    alt={place.title}
                                    sx={{ height: 404, borderRadius: '24px', mb: 2, width: '100%' }}
                                />
                                <CardContent sx={{ px: 1.25 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, fontFamily: "Playfair Display" }}>
                                        {place.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3.125, fontFamily: "Playfair Display" }}>
                                        {place.description}
                                    </Typography>
                                    <Link
                                        href={place.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        sx={{
                                            color: '#80b9ad',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontFamily: "Inter"
                                        }}
                                    >
                                        See More <ChevronRight />
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

      </Container>
    </Box>
  );
};

export default ScubaDivingTour; 