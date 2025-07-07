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
import img1 from "../assets/img1.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";
import card13 from "../assets/card13.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import i3 from "../assets/i3.jpg";
import i1 from "../assets/i1.jpg";

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
    { name: "Merida", image: card10 },
    { name: "Playa del Carmen",  image: card11 },
    { name: "Cancun", image: card13 },
    { name: "Cozumel", image: card1 },
    { name: "Tulum",  image: card2 },
    { name: "Isla Mujeres", image: card3 },
];

const restaurantData = [
    {
        title: "We are in Merida!",
        image: i1,
        url: "https://lachayamaya.com/",
    },
    {
        title: "Come and enjoy delicious food in Merida",
        image: i3,
        url: "https://porfirios.com.mx/locaciones/restaurante-mexicano-en-merida/",
    },
    {
        title: "We are in Playa del Carmen!",
        image: i1,
        url: "https://lachayamaya.com/",
    },
    {
        title: "We are in Merida!",
        image: i3,
        url: "https://porfirios.com.mx/locaciones/restaurante-mexicano-en-merida/",
    },
];

// Main component
export const Tours = () => {
    return (
        <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
            <Container maxWidth="xl" sx={{ px: { xs: 2, md: 15 }, py: 8 }}>
                {/* Header */}
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
                        backgroundImage: `url(${img1})`,
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
                        }}
                    >
                        Places you have to try!
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 2 }}>
                        {restaurantData.map((restaurant, index) => (
                            <Box
                                key={index}
                                sx={{
                                    minWidth: 631,
                                    height: 360,
                                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${restaurant.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 5,
                                    p: 8,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    align="center"
                                    sx={{ color: "white", fontWeight: "bold", textShadow: "1px 1px 0px black" }}
                                >
                                    {restaurant.title}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "white",
                                        color: "black",
                                        px: 5,
                                        py: 1.5,
                                        borderRadius: 3,
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.9)",
                                        },
                                    }}
                                    component={Link}
                                    href={restaurant.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Go web
                                </Button>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Tours;
