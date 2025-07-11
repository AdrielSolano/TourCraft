// Imports
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    Link,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Images
import image38 from "../assets/image38.png";
import img from "../assets/img.png";
import img11 from "../assets/img11.png";
import img22 from "../assets/img22.png";
import img33 from "../assets/img33.png";
import img34 from "../assets/img34.png";
import img44 from "../assets/img44.png";
import movistar from "../assets/movistar.png";
import card10 from "../assets/Card10.png";
import card11 from "../assets/Card11.png";
import card13 from "../assets/Card13.png";
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";
import i3 from "../assets/i3.jpg";
import i1 from "../assets/i1.jpg";
import alux from "../assets/alux.jpg";
import harris from "../assets/harris.jpg";
import rolandi from "../assets/rolandi.jpg";
import hard from "../assets/hard.jpg";


// Data
const tourData = [
    {
        title: "Chichen-Itza, Merida",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 1500,
        originalPrice: null,
        discount: null,
        image: img,
    },
    {
        title: "Isla de las tortugas, Akumal",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 2200,
        originalPrice: null,
        discount: null,
        image: img11,
    },
    {
        title: "Sian Ka'an Biosphere Reserve",
        rating: 5,
        reviews: 1,
        duration: "2 days",
        price: 960,
        originalPrice: 1200,
        image: img22,
    },
    {
        title: "Puerto Morelos tour",
        rating: 5,
        reviews: 1,
        duration: "3 days",
        price: 1200,
        originalPrice: 1500,
        image: img33,
    },
    {
        title: "Ruinas de Cobá",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 860,
        originalPrice: null,
        discount: null,
        image: img34,
    },
    {
        title: "Cenote Dos Ojos, Tulum",
        rating: 5,
        reviews: 1,
        duration: "4 hours",
        price: 1020,
        originalPrice: null,
        discount: null,
        image: img44,
    },
];

const placesData = [
    { image: card10 },
    { image: card2 },
    { image: card3 },
    { image: card11 },
    { image: card1 },
    { image: card13 },
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
        title: "Alux - Playa del Carmen",
        image: alux,
        url: "https://aluxrestaurant.com/",
        description: "Restaurante en una cueva natural"
    },
    {
        title: "Harry's - Cancún",
        image: harris,
        url: "https://harrys.com.mx/",
        description: "Carnes premium y mariscos frescos"
    },
    {
        title: "Hartwood - Tulum",
        image: hard, 
        url: "https://www.hartwoodtulum.com/",
        description: "Cocina de autor con ingredientes locales y técnicas al fuego"
    },
    {
        title: "Casa Rolandi - Isla Mujeres",
        image: rolandi,
        url: "https://casarolandi.com/",
        description: "Cocina italiana con toques mexicanos"
    }
];


// Main component
export const Tours = () => {
    return (
        <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
            <Container maxWidth="xl" sx={{ px: { xs: 2, md: 15 }, py: 8 }}>
                <Box
                    sx={{
                        position: "relative",
                        height: 392,
                        backgroundImage: `url(${image38})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 2,
                        mb: 8,
                    }}
                >
                    <Card
                        sx={{
                            position: "absolute",
                            bottom: -51,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "90%",
                            maxWidth: 1062,
                            p: 3,
                            borderRadius: "20px",
                            boxShadow: "0px 3px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <Stack direction="row" spacing={4} alignItems="center">
                            <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
                                {/* Location */}
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <LocationOnIcon sx={{ color: "#80b9ad" }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold" }}>
                                            Location
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.4 }}>
                                            Where are you going?
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Date */}
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <CalendarTodayIcon sx={{ color: "#80b9ad" }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold" }}>
                                            Date
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.4 }}>
                                            Set date
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Guests */}
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <PeopleIcon sx={{ color: "#80b9ad" }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold" }}>
                                            Guests
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.4 }}>
                                            2 guests, 1 room
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>

                            {/* Search */}
                            <Button
                                variant="contained"
                                startIcon={<SearchIcon />}
                                sx={{
                                    bgcolor: "#80b9ad",
                                    borderRadius: 3,
                                    px: 3,
                                    py: 1.5,
                                    "&:hover": {
                                        bgcolor: "#6ba89c",
                                    },
                                }}
                            >
                                Search
                            </Button>
                        </Stack>
                    </Card>
                </Box>

                {/* Tours */}
                <Stack spacing={8}>
                    <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "black", fontFamily: "serif" }}>
                        Popular Tours
                    </Typography>

                    <Grid container spacing={3}>
                        {tourData.map((tour, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        height: 494,
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        boxShadow: "0px 3px 20px rgba(0,0,0,0.08)",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 260,
                                            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${tour.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                        }}
                                    >
                                    </Box>
                                    <CardContent sx={{ p: 4 }}>
                                        <Stack spacing={3}>
                                            <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                                {tour.title}
                                            </Typography>

                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Rating value={tour.rating} readOnly size="small" />
                                                <Typography variant="body2" sx={{ opacity: 0.4 }}>
                                                    ({tour.reviews} Review)
                                                </Typography>
                                            </Stack>

                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <ScheduleIcon sx={{ fontSize: 24 }} />
                                                <Typography variant="body1">{tour.duration}</Typography>
                                            </Stack>

                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Typography variant="body1" sx={{ opacity: 0.4 }}>
                                                    From
                                                </Typography>
                                                {tour.originalPrice && (
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ textDecoration: "line-through", color: "#999999" }}
                                                    >
                                                        ${tour.originalPrice}
                                                    </Typography>
                                                )}
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    ${tour.price}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Separator image */}
                <Box
                    sx={{
                        width: "100%",
                        height: 126,
                        backgroundImage: `url(${movistar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        my: 4,
                    }}
                />

                {/* Places */}
                <Stack spacing={8} sx={{ py: 8 }}>
                    <Stack spacing={3} alignItems="center">
                        <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", fontFamily: "serif" }}>
                            Places
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ opacity: 0.6, maxWidth: 372 }}>
                            Discover amazing places in the Riviera Maya
                        </Typography>
                    </Stack>

                    <Grid container spacing={3}>
                        {placesData.map((place, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        height: 248,
                                        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${place.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: "20px",
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        p: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{ color: "white", fontWeight: "bold", mb: 2 }}
                                    >
                                        {place.name}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                <Divider sx={{ my: 4 }} />

                {/* Restaurants */}
                <Stack spacing={6} sx={{ py: 6 }}>
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            color: "black",
                            fontFamily: "serif",
                            mb: 4
                        }}
                    >
                        Places you have to try!
                    </Typography>

                    <Box sx={{ px: { xs: 1, md: 4 }, mx: 'auto', maxWidth: '95%' }}>
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={2000}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]}
                            // Añade espacio entre slides
                            centerPadding="20px"
                            slidesMargin={20}
                        >
                            {restaurantData.map((restaurant, index) => (
                                <Box key={index} sx={{
                                    px: 2,
                                    py: 1,
                                    // Añade margen derecho excepto para el último elemento
                                    mr: index !== restaurantData.length - 1 ? 3 : 0
                                }}>
                                    <Box
                                        sx={{
                                            height: 380, // Altura ligeramente reducida
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
                                            // Añade margen interno
                                            margin: '0 10px',
                                            // Añade transición para hover
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.02)'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            align="center"
                                            sx={{
                                                color: "white",
                                                fontWeight: "bold",
                                                textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                                                mb: 2,
                                                fontSize: { xs: '1.5rem', md: '1.75rem' } // Tamaño responsive
                                            }}
                                        >
                                            {restaurant.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            align="center"
                                            sx={{
                                                color: "white",
                                                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                                                mb: 3,
                                                px: 2 // Padding horizontal para el texto
                                            }}
                                        >
                                            {restaurant.description}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: "white",
                                                color: "black",
                                                px: 5,
                                                py: 1.5,
                                                borderRadius: 3,
                                                fontWeight: "bold",
                                                "&:hover": {
                                                    bgcolor: "rgba(255,255,255,0.9)",
                                                },
                                            }}
                                            component={Link}
                                            href={restaurant.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
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
};

export default Tours;
