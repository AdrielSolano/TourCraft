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
import harris from "../assets/harris.jpg";
import i3 from "../assets/i3.jpg";
import i1 from "../assets/i1.jpg";
import image54 from "../assets/image54.png";
import frame341 from "../assets/Frame341.png";
import imga5 from "../assets/imga5.png";
import imga4 from "../assets/imga4.png";
import imga3 from "../assets/imga3.png";
import imga1 from "../assets/imga1.png";
import img40 from "../assets/img40.png";
import cocop from "../assets/cocop.jpg";
import swin from "../assets/swin.jpg";
import ferry from "../assets/ferry.webp";
import rio from "../assets/rio.jpg";
import xplor from "../assets/xplor.png";
import threeD from "../assets/3d.webp"; // Assuming you have a 3D Museum image


const featuredTours = [
    {
        id: 1,
        title: "5th Avenue Shopping",
        image: "https://imgs.search.brave.com/MYE35k9WOwAMy_WQzE-sAF4LdeDJt3ieW7TZhsEAsQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2lsbGVzLXNtYXJ0/aG9tZXBsYXlhLmNv/bS9fbWVkaWEvaW1n/L3NtYWxsL3BsYXlh/LTVlbWUtYXZlbnVl/LndlYnA",
        rating: 5,
        reviews: 1,
        duration: "Flexible",
        price: "Free",
        badge: "Popular",
    },
    {
        id: 2,
        title: "Xcaret Park",
        image: "https://imgs.search.brave.com/Eqbsmp1puSb7zC4wzKtvyMvvroZX7pr5RsmxfzybkRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/Mi8yOS8wNi80Ni94/Y2FyZXQtMTIyODE4/Ml82NDAuanBn",
        rating: 5,
        reviews: 1,
        duration: "Full day",
        price: "$120",
    },
];

const topActivities = [
    {
        id: 1,
        title: "Cenote Swim Adventure",
        image: swin,
        rating: 5,
        reviews: 1,
        duration: "Half day",
        price: "$65",
    },
    {
        id: 2,
        title: "Coco Bongo Playa",
        image: cocop,
        rating: 5,
        reviews: 1,
        duration: "Night",
        price: "$75",
    },
    {
        id: 3,
        title: "Ferry to Cozumel",
        image: ferry,
        rating: 5,
        reviews: 1,
        duration: "Full day",
        price: "$25",
    },
    {
        id: 4,
        title: "Rio Secreto",
        image: rio,
        rating: 5,
        reviews: 1,
        duration: "Half day",
        price: "$89",
    },
    {
        id: 5,
        title: "Xplor Adventure Park",
        image: xplor, // You might want to use a different image
        rating: 5,
        reviews: 1,
        duration: "Full day",
        price: "$119",
    },
    {
        id: 6,
        title: "3D Museum of Wonders",
        image: threeD, // You might want to use a different image
        rating: 5,
        reviews: 1,
        duration: "2 hours",
        price: "$15",
    },
];

const restaurantData = [
    {
        title: "Alux Restaurant",
        image: harris,
        url: "https://aluxrestaurant.com/",
        description: "Unique dining in a natural cave"
    },
    {
        title: "La Cueva del Chango",
        image: i1,
        url: "https://lacuevadelchango.com/",
        description: "Authentic Mexican in jungle setting"
    },
    {
        title: "Oh Lala!",
        image: i3,
        url: "https://ohlalaplayadelcarmen.com/",
        description: "Intimate gourmet dining experience"
    },
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
                            sx={{ textDecoration: "line-through", fontFamily: "Inter", color: "#999999" }}
                        >
                            {tour.originalPrice}
                        </Typography>
                    )}
                    <Typography variant="body1" fontFamily="Inter" fontWeight={600}>
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

export default function PlayaDelCarmen() {
    const navigate = useNavigate();

    const handleFifthAvenueClick = () => {
        navigate('/FifthAvenueTour');
    };

    const handleXcaretClick = () => {
        navigate('/XcaretPark');
    };

    // Top Activities navigation handlers
    const handleCenoteClick = () => {
        navigate('/CenoteAdventure');
    };

    const handleCocoBongoClick = () => {
        navigate('/CocoBongoPlaya');
    };

    const handleFerryClick = () => {
        navigate('/CozumelFerry');
    };

    const handleRioSecretoClick = () => {
        navigate('/RioSecreto');
    };
    const handleXplorClick = () => {
        navigate('/XplorAdventure');
    };
    const handleMuseumClick = () => {
        navigate('/3DMuseum');
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
                            Playa del Carmen
                        </Typography>
                    </Box>

                    <Grid container spacing={3} sx={{ mb: 7.5 }}>
                        {featuredTours.map((tour) => (
                            <Grid item xs={12} md={6} key={tour.id}>
                                <TourCard
                                    tour={tour}
                                    onClick={
                                        tour.title === "5th Avenue Shopping"
                                            ? handleFifthAvenueClick
                                            : tour.title === "Xcaret Park"
                                                ? handleXcaretClick
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
                                        tour.title === "Cenote Swim Adventure"
                                            ? handleCenoteClick
                                            : tour.title === "Coco Bongo Playa"
                                                ? handleCocoBongoClick
                                                : tour.title === "Ferry to Cozumel"
                                                    ? handleFerryClick
                                                    : tour.title === "Rio Secreto"
                                                        ? handleRioSecretoClick
                                                        : tour.title === "Xplor Adventure Park"
                                                            ? handleXplorClick
                                                            : tour.title === "3D Museum of Wonders"
                                                                ? handleMuseumClick
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

                <Stack spacing={6} sx={{ py: 6, marginBottom: '100px' }}>
                    <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "black", fontFamily: "Playfair Display", mb: 4 }}>
                        Best restaurants in Playa del Carmen
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
                                        <Typography variant="h4" align="center" sx={{ fontFamily: "Playfair Display", color: "white", fontWeight: "bold", textShadow: "1px 1px 3px rgba(0,0,0,0.8)", mb: 2, fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
                                            {restaurant.title}
                                        </Typography>
                                        <Typography variant="body1" align="center" sx={{ fontFamily: "Playfair Display", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.8)", mb: 3, px: 2 }}>
                                            {restaurant.description}
                                        </Typography>
                                        <Button
                                            component="a"
                                            href={restaurant.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"

                                            sx={{ bgcolor: "white", fontFamily: "Inter", color: "black", px: 5, py: 1.5, borderRadius: 3, fontWeight: "bold", "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}
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