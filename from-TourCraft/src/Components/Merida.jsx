import AccessTime from "@mui/icons-material/AccessTime";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import alux from "../assets/alux.jpg";
import harris from "../assets/harris.jpg";
import rolandi from "../assets/rolandi.jpg";
import hard from "../assets/hard.jpg";
import i3 from "../assets/i3.jpg";
import i1 from "../assets/i1.jpg";
import image54 from "../assets/image54.png";
import img from "../assets/img.png";
import UX1 from "../assets/UX1.jpg";
import frame341 from "../assets/Frame341.png";
import img40 from "../assets/img40.png";
import arch from "../assets/arch.jpg";
import cen4 from "../assets/cen4.jpg";
import izamal from "../assets/izamal.webp";
import progreso from "../assets/progreso.jpg";
import grande from "../assets/grande.jpg";
import cuza from "../assets/cuza.jpg";
import apoala from "../assets/apoala.jpg";
import kuuk from "../assets/kuuk.avif";
import teya from "../assets/teya.jpeg";
import rosas from "../assets/rosas.jpeg";

const featuredTours = [
  {
    id: 1,
    title: "Chichen-Itza",
    image: img,
    rating: 5,
    reviews: 1,
    duration: "1 day",
    originalPrice: "$1200",
    price: "$960",
    badge: "Best seller",
  },
  {
    id: 2,
    title: "Uxmal, Kabah",
    image: UX1,
    rating: 5,
    reviews: 1,
    duration: "2 days",
    price: "$2250",
  },
];

const topActivities = [
  {
    id: 1,
    title: "Architecture in Merida",
    image: arch,
    rating: 5,
    reviews: 1,
    duration: "9 Nights, 8 days",
    price: "$1500",
  },
  {
    id: 2,
    title: "4 Cenotes Tour",
    image: cen4,
    rating: 5,
    reviews: 1,
    duration: "10 Nights, 9 days",
    price: "$2200",
  },
  {
    id: 3,
    title: "Izamal",
    image: izamal,
    rating: 5,
    reviews: 1,
    duration: "7 Nights, 8 days",
    originalPrice: "$1200",
    price: "$960",
  },
  {
    id: 4,
    title: "Progreso Beach",
    image: progreso,
    rating: 5,
    reviews: 1,   
    duration: "7 Nights, 8 days",
    originalPrice: "$1500",
    price: "$1200",
  },
  {
    id: 5,
    title: "Plaza Grande (Main Square)",
    image: grande,
    rating: 5,
    reviews: 1,
    duration: "3 Nights, 4 days",
    price: "$860",
  },
  {
    id: 6,
    title: "Cenotes de Cuzamá",
    image: cuza,
    rating: 5,
    reviews: 1,
    duration: "10 Nights, 9 days",
    price: "$1020",
  },
];

const restaurantData = [
  {
    title: "La Chaya Maya - Mérida",
    image: i1,
    url: "https://lachayamaya.com/",
    description: "Auténtica cocina yucateca en ambiente tradicional"
  },
  {
    title: "Porfirio's - Mérida",
    image: i3,
    url: "https://porfirios.com.mx/",
    description: "Gastronomía mexicana contemporánea"
  },
  {
    title: "Apoala - Mérida",
    image: apoala,
    url: "https://www.instagram.com/apoala.merida/",
    description: "Cocina oaxaqueña-yucateca fusión"
  },
  {
    title: "Kuuk - Mérida",
    image: kuuk,
    url: "https://www.kuuk.mx/",
    description: "Alta cocina yucateca con estrella Michelin"
  },
  {
    title: "Hacienda Teya - Mérida",
    image: teya,
    url: "https://haciendateya.com/",
    description: "Cocina tradicional en hacienda histórica"
  },
  {
    title: "Rosas & Xocolate - Mérida",
    image: rosas,
    url: "https://www.rosasandxocolate.com/",
    description: "Experiencia gourmet con chocolate como protagonista"
  }
];

const TourCard = ({ tour, onClick }) => (
  <Card
    sx={{
      height: 494,
      borderRadius: "20px",
      boxShadow: "0px 3px 20px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="260"
        image={tour.image}
        alt={tour.title}
        sx={{ objectFit: "cover" }}
      />
      {tour.badge && (
        <Chip
          label={tour.badge}
          sx={{
            position: "absolute",
            top: 32,
            right: 32,
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            fontSize: "20px",
            height: "auto",
            px: 2,
            py: 1,
          }}
        />
      )}
    </Box>

    <CardContent sx={{ p: 4, pb: 2 }}>
      <Stack spacing={2.5}>
        <Stack spacing={2}>
          <Typography variant="h6" fontFamily="Playfair Display" fontWeight={600} fontSize="20px">
            {tour.title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Rating value={tour.rating} readOnly size="small" />
            <Typography variant="body2" fontFamily="Playfair Display" color="text.secondary">
              ({tour.reviews} Review)
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTime sx={{ width: 16, height: 16 }} />
            <Typography variant="body2" fontFamily="Playfair Display">{tour.duration}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="body2" fontFamily="Playfair Display" color="text.secondary">
            From
          </Typography>
          {tour.originalPrice && (
            <Typography
              variant="caption"
              sx={{ textDecoration: "line-through", fontFamily:"Inter",  color: "#999999" }}
            >
              {tour.originalPrice}
            </Typography>
          )}
          <Typography variant="body1" fontFamily="Inter"fontWeight={600}>
            {tour.price}
          </Typography>
        </Stack>
      </Stack>
    </CardContent>

    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: 32,
        right: 32,
        fontFamily: "Inter",
        backgroundColor: "#80b9ad",
        color: "#0e3d4d",
        borderRadius: "40px",
        textTransform: "none",
        fontWeight: 800,
        fontSize: "12px",
        px: 3,
        py: 1,
        "&:hover": {
          backgroundColor: "#6ba399",
        },
      }}
    >
      Rent Now
    </Button>
  </Card>
);

export default function Merida() {
  const navigate = useNavigate();

  const handleChichenItzaClick = () => {
    navigate('/PlaceSelectionated');
  };
  const handleChichenItzaClick2 = () => {
    navigate('/PlaceSelectionated2');
  };

  // Top Activities navigation handlers
  const handleArchitectureClick = () => {
    navigate('/ArchitectureMerida');
  };

  const handleCenotesClick = () => {
    navigate('/CenotesTour');
  };

  const handleIzamalClick = () => {
    navigate('/Izamal');
  };

  const handleProgresoClick = () => {
    navigate('/ProgresoBeach');
  };

  const handlePlazaGrandeClick = () => {
    navigate('/PlazaGrande');
  };

  const handleCenotesCuzamaClick = () => {
    navigate('/CenotesCuzama');
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ px: 0, overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ px: 15 }}>
          <Box
            sx={{
              height: 320,
              borderRadius: "20px",
              backgroundImage: `url(${image54})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 7.5,
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              sx={{
                fontSize: "48px",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                fontFamily: "Playfair Display",
              }}
            >
              Merida
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 7.5 }}>
            {featuredTours.map((tour) => (
              <Grid item xs={12} md={6} key={tour.id}>
                <TourCard 
                  tour={tour} 
                  onClick={
                    tour.title === "Chichen-Itza"
                      ? handleChichenItzaClick
                      : tour.title === "Uxmal, Kabah"
                      ? handleChichenItzaClick2
                      : undefined
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box
          sx={{
            width: "100vw",
            height: 184,
            backgroundColor: "#f3f3f3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 7.5,
            ml: "calc(-50vw + 50%)",
          }}
        >
          <Box
            component="img"
            src={img40}
            alt="Advertisement"
            sx={{ maxWidth: 1067, height: 129, objectFit: "cover" }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ px: 15 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#0e3d4d"
            sx={{ fontSize: "40px", mb: 7.5, fontFamily: "Playfair Display" }}
          >
            Top activities
          </Typography>

          <Grid container spacing={3} sx={{ mb: 5 }}>
            {topActivities.map((tour) => (
              <Grid item xs={12} md={4} key={tour.id}>
                <TourCard 
                  tour={tour} 
                  onClick={
                    tour.title === "Architecture in Merida"
                      ? handleArchitectureClick
                      : tour.title === "4 Cenotes Tour"
                      ? handleCenotesClick
                      : tour.title === "Izamal"
                      ? handleIzamalClick
                      : tour.title === "Progreso Beach"
                      ? handleProgresoClick
                      : tour.title === "Plaza Grande (Main Square)"
                      ? handlePlazaGrandeClick
                      : tour.title === "Cenotes de Cuzamá"
                      ? handleCenotesCuzamaClick
                      : undefined
                  }
                />
              </Grid>
            ))}
          </Grid>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2.5}
            sx={{ mb: 15 }}
          >
            <IconButton sx={{ width: 50, height: 50, backgroundColor: "#e5e5e5", borderRadius: "25px", "&:hover": { backgroundColor: "#d5d5d5" } }}>
              <ArrowBackIos sx={{ width: 8, height: 16 }} />
            </IconButton>
            <IconButton sx={{ width: 50, height: 50, backgroundColor: "#538392", borderRadius: "25px", "&:hover": { backgroundColor: "#4a7580" } }}>
              <ArrowForwardIos sx={{ width: 8, height: 16, color: "white" }} />
            </IconButton>
          </Stack>
        </Container>

        <Divider sx={{ mx: 15, mb: 10 }} />

        <Stack spacing={6} sx={{ py: 6, marginBottom:'100px' }}>
          <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "black", fontFamily: "Playfair Display", mb: 4 }}>
            Local restaurants in Merida
          </Typography>

          <Box sx={{ px: { xs: 1, md: 4 }, mx: "auto", maxWidth: "95%", overflow: "hidden" }}>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              responsive={[{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}
            >
              {restaurantData.map((restaurant) => (
                <Box key={restaurant.title} sx={{ px: 2, py: 1 }}>
                  <Box
                    sx={{
                      height: 380,
                      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${restaurant.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                      p: 4,
                      boxShadow: 3,
                      margin: "0 10px",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                      "&:hover": { transform: "scale(1.02)" },
                    }}
                  >
                    <Typography variant="h4" align="center"  sx={{ fontFamily:"Playfair Display", color: "white", fontWeight: "bold", textShadow: "1px 1px 3px rgba(0,0,0,0.8)", mb: 2, fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
                      {restaurant.title}
                    </Typography>
                    <Typography variant="body1" align="center"  sx={{ fontFamily:"Playfair Display",color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.8)", mb: 3, px: 2 }}>
                      {restaurant.description}
                    </Typography>
                    <Button
                      component="a"
                      href={restaurant.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      
                      sx={{ bgcolor: "white",fontFamily:"Inter", color: "black", px: 5, py: 1.5, borderRadius: 3, fontWeight: "bold", "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}
                    >
                      Visit Website
                    </Button>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}