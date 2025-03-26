import ArrowBack from "@mui/icons-material/ArrowBack";
import Check from "@mui/icons-material/Check";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Pets from "@mui/icons-material/Pets";
import LocationOn from "@mui/icons-material/LocationOn";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';

// Importación de imágenes (asegúrate de que los archivos existan en estas rutas)
import Img1 from '../assets/Img1.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';
import Img4 from '../assets/Img4.png';
import bannerImage from "../assets/banner-image.png"; // Renombré image43.png a banner-image.png
import featureImage from "../assets/feature-image.png"; // Renombré Rectangle10.png a feature-image.png

// Sample data for guides
const guides = [
    {
        id: 1,
        name: "Sebastián Monteverde",
        description: "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Professional photographer", "Certified guide"],
        bio: '"Hola, soy Sebastian, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: Img1,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 2,
        name: "Mariana Del Valle",
        description: "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Mariana, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: Img2,
        backgroundColor: "#ffffff",
    },
    {
        id: 3,
        name: "Camila Arrieta",
        description: "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Camila, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Meridad, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: Img3,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 4,
        name: "Valeria Sandoval",
        description: "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Valeria, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: Img4,
        backgroundColor: "#ffffff",
    },
];

// Sample data for locations
const locations = [
    { name: "Xcaret", selected: false },
    { name: "Cancun", selected: false },
    { name: "Merida", selected: true },
    { name: "Cozumel", selected: false },
    { name: "Tulum", selected: false },
    { name: "Isla Mujeres", selected: false },
    { name: "Puerto Morelos", selected: false },
    { name: "Hol-box", selected: false },
];

const Guides = () => {
    return (
        <Box
            sx={{
                bgcolor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                minHeight: "100vh",
                position: "relative",
                pb: 40 // Añadido padding bottom para evitar que el footer corte contenido
            }}
        >
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    width: "100%",
                    maxWidth: "1512px",
                    position: "relative",
                }}
            >
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBack />}
                    component={RouterLink}
                    to="/"
                    sx={{
                        position: "absolute",
                        top: { xs: "20px", md: "172px" },
                        left: { xs: "20px", md: "82px" },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "18px",
                        zIndex: 1
                    }}
                >
                    Back
                </Button>

                {/* Main Title */}
                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        top: { xs: "80px", md: "261px" },
                        left: { xs: "20px", md: "147px" },
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#0e3d4d",
                        fontSize: { xs: "32px", md: "48px" },
                        width: { xs: "90%", md: "auto" },
                        zIndex: 1
                    }}
                >
                    Let's take a look at our guides
                </Typography>

                {/* Feature Section */}
                <Grid
                    container
                    sx={{
                        mt: { xs: "160px", md: "371px" },
                        px: { xs: 2, md: "150px" },
                        gap: { xs: "40px", md: "92px" },
                        flexDirection: { xs: "column", md: "row" }
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: "100%",
                                height: { xs: "300px", md: "541px" },
                                backgroundImage: `url(${featureImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "16px"
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center" // Esto centra verticalmente el contenido
                        }}
                    >
                        <Stack spacing={4} sx={{ width: "100%" }}>
                            <Stack spacing={1}>
                                <DirectionsCar sx={{ fontSize: 43, color: "#0e3d4d" }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#0e3d4d",
                                        fontSize: { xs: "28px", md: "40px" },
                                    }}
                                >
                                    Don't worry about driving
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        color: "#0e3d4d",
                                        fontSize: { xs: "18px", md: "25px" },
                                    }}
                                >
                                    The guide will do it for you, when you hire the guide he will
                                    take care of taking you to your destination.
                                </Typography>
                            </Stack>

                            <Stack spacing={1} sx={{ mt: 4 }}>
                                <Pets sx={{ fontSize: 39, color: "#0e3d4d" }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#0e3d4d",
                                        fontSize: { xs: "28px", md: "40px" },
                                    }}
                                >
                                    Come with your friend!
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        color: "#0e3d4d",
                                        fontSize: { xs: "18px", md: "25px" },
                                    }}
                                >
                                    Find your guide who also loves pets!
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Banner Image */}
                <Box
                    sx={{
                        width: { xs: "90%", md: "950px" },
                        height: "90px",
                        mx: "auto",
                        mt: { xs: 8, md: 10 },
                        mb: { xs: 6, md: 8 },
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                {/* Guides In Section Title */}
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#0e3d4d",
                        fontSize: { xs: "28px", md: "40px" },
                        mb: 4
                    }}
                >
                    Guides in
                </Typography>

                {/* Location Filter */}
                <Box sx={{ overflowX: "auto", px: 2 }}>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            width: "max-content",
                            mx: "auto",
                            mb: 6,
                            px: 2,
                            height: "46px",
                        }}
                    >
                        {locations.map((location, index) => (
                            <Chip
                                key={index}
                                label={location.name}
                                clickable
                                sx={{
                                    height: "44px",
                                    minWidth: "130px",
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    ...(location.selected
                                        ? {
                                            bgcolor: "#4daf9b",
                                            color: "white",
                                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
                                        }
                                        : {
                                            bgcolor: "transparent",
                                            border: "1px solid #7bbcb0",
                                            color: "text.primary",
                                        }),
                                }}
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Guide Cards */}
                <Box sx={{ px: { xs: 2, md: 4 }, mb: 10 }}>
                    {guides.map((guide, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: "100%",
                                borderRadius: "25px",
                                bgcolor: guide.backgroundColor,
                                mb: 6,
                                boxShadow: "none",
                            }}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Grid container spacing={4} sx={{ p: { xs: 3, md: 7.5 } }}>
                                    {/* Alternar orden en móvil */}
                                    <Grid item xs={12} md={6} order={{ xs: index % 2 === 0 ? 1 : 2, md: 'unset' }}>
                                        <GuideInfo guide={guide} />
                                    </Grid>
                                    <Grid item xs={12} md={6} order={{ xs: index % 2 === 0 ? 2 : 1, md: 'unset' }}>
                                        <GuideImage guide={guide} />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

// Guide Info Component
const GuideInfo = ({ guide }) => {
    return (
        <Stack spacing={4}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "28px" },
                }}
            >
                Guide In Merida
            </Typography>

            <Typography
                sx={{
                    opacity: 0.6,
                    height: "auto",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                }}
            >
                <Box component="span" sx={{ fontWeight: 900, fontStyle: "italic" }}>
                    {guide.name}
                </Box>
                <Box component="span">. {guide.description}</Box>
            </Typography>

            <Stack spacing={2.75}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Check />
                    <Typography
                        sx={{
                            fontWeight: 500,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            width: "100%",
                        }}
                    >
                        {guide.languages}
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                    <Check />
                    <Typography
                        sx={{
                            fontWeight: 500,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            width: "100%",
                        }}
                    >
                        {guide.experience}
                    </Typography>
                </Stack>

                {guide.skills.map((skill, index) => (
                    <Stack key={index} direction="row" spacing={1} alignItems="center">
                        <Check />
                        <Typography
                            sx={{
                                fontWeight: 500,
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                width: "100%",
                            }}
                        >
                            {skill}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Box
                sx={{
                    bgcolor: "#538392",
                    borderRadius: "8px",
                    p: 3,
                    boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.08)",
                }}
            >
                <Typography
                    sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: 500,
                    }}
                >
                    {guide.bio}
                </Typography>
            </Box>

            <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
                <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                        {guide.location}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: "15px" }} />

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={guide.rating} precision={0.1} readOnly size="small" />
                    <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                        {guide.rating}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                        ({guide.reviews} reviews)
                    </Typography>
                </Stack>
            </Stack>

            <Button
                variant="contained"
                sx={{
                    bgcolor: "#80b9ad",
                    borderRadius: "12px",
                    py: 2,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    width: "fit-content",
                    '&:hover': {
                        bgcolor: "#6da89c"
                    }
                }}
            >
                Choose place to go with me!
            </Button>
        </Stack>
    );
};

// Guide Image Component
const GuideImage = ({ guide }) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "482px" },
                borderRadius: "30px",
                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src={guide.image}
                alt={`Guide ${guide.name}`}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
            <Chip
                label={guide.price}
                sx={{
                    position: "absolute",
                    top: "32px",
                    right: "32px",
                    bgcolor: "white",
                    fontWeight: 600,
                    fontSize: "20px",
                    height: "46px",
                    borderRadius: "8px",
                    px: 2,
                }}
            />
        </Box>
    );
};

export default Guides;