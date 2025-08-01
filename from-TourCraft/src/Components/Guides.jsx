import React, { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Check from "@mui/icons-material/Check";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Pets from "@mui/icons-material/Pets";
import LocationOn from "@mui/icons-material/LocationOn";
import Star from "@mui/icons-material/Star";
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
    ThemeProvider as MuiThemeProvider,
    createTheme,
    CssBaseline,
    Checkbox,
    FormControlLabel,
    FormGroup
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

// Importación de imágenes
import img53 from '../assets/img53.png';
import img40 from '../assets/img40.png';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import guide1 from '../assets/guide1.jpg';
import guide2 from '../assets/guide2.jpg';
import guide3 from '../assets/guide3.jpg';
import guide4 from '../assets/guide4.jpg';
import guide5 from '../assets/guide5.jpg';
import guide6 from '../assets/guide6.jpg';
import guide7 from '../assets/guide7.jpg';
// Datos de guías turísticos
const guides = [
    {
        id: 1,
        name: "Sebastián Monteverde",
        description: "Expert in Mayan culture and photography tours. Specialized in creating memorable experiences.",
        languages: "Spanish/English/Japanese",
        experience: "8 years of experience in Cancun",
        skills: ["Professional photographer", "Certified guide", "Mayan culture expert"],
        bio: '"Hi, I\'m Sebastian, a certified guide with a great passion for Cancun and the Riviera Maya. For over eight years, I\'ve been showing travelers the natural and cultural beauty of our region, from cenotes to Mayan ruins. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cancun, MX",
        rating: 4.9,
        reviews: 300,
        image: guide1,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 2,
        name: "Mariana Del Valle",
        description: "Bilingual guide with focus on eco-tourism and sustainable adventures.",
        languages: "Spanish/English/French",
        experience: "6 years of experience in Merida",
        skills: ["Certified guide", "Eco-tourism specialist", "Cultural heritage expert"],
        bio: '"Hi, I\'m Mariana, a certified guide with a great passion for Merida and the Yucatan Peninsula. For over six years, I\'ve been showing travelers the natural and cultural beauty of our region, from cenotes to Mayan ruins. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Merida, MX",
        rating: 4.8,
        reviews: 250,
        image: guide2,
        backgroundColor: "#ffffff",
    },
    {
        id: 3,
        name: "Camila Arrieta",
        description: "Food and history specialist, offering unique culinary journeys.",
        languages: "Spanish/English/Italian",
        experience: "7 years of experience in Tulum",
        skills: ["Certified guide", "Culinary expert", "Archaeological specialist"],
        bio: '"Hi, I\'m Camila, a certified guide with a great passion for Tulum and the Riviera Maya. For over seven years, I\'ve been showing travelers the natural and cultural beauty of our region, from cenotes to Mayan ruins. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Tulum, MX",
        rating: 4.7,
        reviews: 180,
        image: guide3,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 4,
        name: "Valeria Sandoval",
        description: "Adventure guide with expertise in water sports and jungle expeditions.",
        languages: "Spanish/English/German",
        experience: "5 years of experience in Playa del Carmen",
        skills: ["Certified guide", "Water sports expert", "Adventure specialist"],
        bio: '"Hi, I\'m Valeria, a certified guide with a great passion for Playa del Carmen and the Riviera Maya. For over five years, I\'ve been showing travelers the natural and cultural beauty of our region, from cenotes to Mayan ruins. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Playa del Carmen, MX",
        rating: 4.6,
        reviews: 220,
        image: guide4,
        backgroundColor: "#ffffff",
    },
    {
        id: 5,
        name: "Carlos Méndez",
        description: "Marine biologist and whale shark specialist with deep knowledge of marine life.",
        languages: "Spanish/English/Portuguese",
        experience: "10 years of experience in Holbox",
        skills: ["Marine biologist", "Whale shark expert", "Eco-tourism certified"],
        bio: '"Hi, I\'m Carlos, a marine biologist and certified guide with a great passion for Holbox and its marine life. For over ten years, I\'ve been showing travelers the natural beauty of our region, from whale sharks to pristine beaches. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Holbox, MX",
        rating: 4.9,
        reviews: 150,
        image: guide5,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 6,
        name: "Isabella Rodríguez",
        description: "Scuba diving instructor and coral reef conservation specialist.",
        languages: "Spanish/English/French",
        experience: "9 years of experience in Cozumel",
        skills: ["Scuba instructor", "Coral reef expert", "Marine conservationist"],
        bio: '"Hi, I\'m Isabella, a scuba diving instructor and certified guide with a great passion for Cozumel and its underwater world. For over nine years, I\'ve been showing travelers the natural beauty of our region, from coral reefs to marine life. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cozumel, MX",
        rating: 4.8,
        reviews: 200,
        image: guide6,
        backgroundColor: "#ffffff",
    },
    {
        id: 7,
        name: "Roberto Silva",
        description: "Archaeologist and Mayan ruins expert with extensive knowledge of ancient civilizations.",
        languages: "Spanish/English/Mayan",
        experience: "12 years of experience in Cancun",
        skills: ["Archaeologist", "Mayan ruins expert", "Cultural historian"],
        bio: '"Hi, I\'m Roberto, an archaeologist and certified guide with a great passion for Cancun and Mayan culture. For over twelve years, I\'ve been showing travelers the cultural beauty of our region, from ancient ruins to historical sites. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cancun, MX",
        rating: 4.9,
        reviews: 280,
        image: guide7,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 8,
        name: "Ana García",
        description: "Cenote specialist and cave diving expert with focus on underground exploration.",
        languages: "Spanish/English/Italian",
        experience: "6 years of experience in Tulum",
        skills: ["Cenote expert", "Cave diver", "Adventure guide"],
        bio: '"Hi, I\'m Ana, a cenote specialist and certified guide with a great passion for Tulum and its underground wonders. For over six years, I\'ve been showing travelers the natural beauty of our region, from cenotes to cave systems. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Tulum, MX",
        rating: 4.7,
        reviews: 160,
        image: p1,
        backgroundColor: "#ffffff",
    },
    {
        id: 9,
        name: "Diego Martínez",
        description: "Professional photographer and adventure guide specializing in wildlife photography tours.",
        languages: "Spanish/English/Portuguese",
        experience: "11 years of experience in Holbox",
        skills: ["Wildlife photographer", "Bird watching expert", "Nature conservationist"],
        bio: '"Hi, I\'m Diego, a wildlife photographer and certified guide with a great passion for Holbox and its natural wonders. For over eleven years, I\'ve been showing travelers the incredible biodiversity of our region, from flamingos to exotic birds. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Holbox, MX",
        rating: 4.8,
        reviews: 175,
        image: p2,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 10,
        name: "Sofia Herrera",
        description: "Marine biologist and snorkeling expert with focus on coral reef preservation.",
        languages: "Spanish/English/French",
        experience: "8 years of experience in Cozumel",
        skills: ["Marine biologist", "Snorkeling instructor", "Coral reef specialist"],
        bio: '"Hi, I\'m Sofia, a marine biologist and certified guide with a great passion for Cozumel and its underwater paradise. For over eight years, I\'ve been showing travelers the incredible marine life of our region, from colorful fish to coral reefs. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cozumel, MX",
        rating: 4.7,
        reviews: 190,
        image: p3,
        backgroundColor: "#ffffff",
    },
    {
        id: 11,
        name: "Luis Mendoza",
        description: "Historian and cultural guide specializing in colonial architecture and local traditions.",
        languages: "Spanish/English/Mayan",
        experience: "9 years of experience in Merida",
        skills: ["Cultural historian", "Architecture expert", "Local traditions specialist"],
        bio: '"Hi, I\'m Luis, a cultural historian and certified guide with a great passion for Merida and its rich heritage. For over nine years, I\'ve been showing travelers the cultural beauty of our region, from colonial buildings to traditional markets. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Merida, MX",
        rating: 4.6,
        reviews: 210,
        image: p4,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 12,
        name: "Elena Torres",
        description: "Adventure sports instructor and extreme activities coordinator.",
        languages: "Spanish/English/German",
        experience: "7 years of experience in Playa del Carmen",
        skills: ["Adventure sports instructor", "Extreme activities expert", "Safety specialist"],
        bio: '"Hi, I\'m Elena, an adventure sports instructor and certified guide with a great passion for Playa del Carmen and its thrilling activities. For over seven years, I\'ve been showing travelers the exciting adventures of our region, from zip-lining to rappelling. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Playa del Carmen, MX",
        rating: 4.8,
        reviews: 165,
        image: p1,
        backgroundColor: "#ffffff",
    },
    {
        id: 13,
        name: "Carmen Vega",
        description: "Art historian and cultural guide specializing in local crafts and traditions.",
        languages: "Spanish/English/French",
        experience: "8 years of experience in Merida",
        skills: ["Art historian", "Cultural specialist", "Local crafts expert"],
        bio: '"Hi, I\'m Carmen, an art historian and certified guide with a great passion for Merida and its artistic heritage. For over eight years, I\'ve been showing travelers the cultural beauty of our region, from traditional crafts to colonial art. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Merida, MX",
        rating: 4.7,
        reviews: 185,
        image: p2,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 14,
        name: "Miguel Ángel",
        description: "Professional photographer and Instagram influencer specializing in travel photography.",
        languages: "Spanish/English/Portuguese",
        experience: "6 years of experience in Cancun",
        skills: ["Travel photographer", "Social media expert", "Content creator"],
        bio: '"Hi, I\'m Miguel Ángel, a travel photographer and certified guide with a great passion for Cancun and its photogenic locations. For over six years, I\'ve been showing travelers the most beautiful spots of our region, from pristine beaches to hidden gems. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cancun, MX",
        rating: 4.6,
        reviews: 195,
        image: p3,
        backgroundColor: "#ffffff",
    },
    {
        id: 15,
        name: "Patricia Morales",
        description: "Yoga instructor and wellness guide specializing in beach and cenote yoga sessions.",
        languages: "Spanish/English/Italian",
        experience: "9 years of experience in Tulum",
        skills: ["Yoga instructor", "Wellness guide", "Meditation expert"],
        bio: '"Hi, I\'m Patricia, a yoga instructor and certified guide with a great passion for Tulum and its spiritual energy. For over nine years, I\'ve been showing travelers the wellness side of our region, from beach yoga to cenote meditation. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Tulum, MX",
        rating: 4.9,
        reviews: 145,
        image: p4,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 16,
        name: "Fernando Ruiz",
        description: "Fishing guide and marine sports specialist with expertise in deep sea fishing.",
        languages: "Spanish/English/German",
        experience: "12 years of experience in Cozumel",
        skills: ["Fishing guide", "Marine sports expert", "Boat captain"],
        bio: '"Hi, I\'m Fernando, a fishing guide and certified captain with a great passion for Cozumel and its marine adventures. For over twelve years, I\'ve been showing travelers the best fishing spots of our region, from deep sea to reef fishing. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cozumel, MX",
        rating: 4.8,
        reviews: 170,
        image: p1,
        backgroundColor: "#ffffff",
    },
    {
        id: 17,
        name: "Lucía Hernández",
        description: "Culinary guide and food tour specialist with focus on local cuisine and markets.",
        languages: "Spanish/English/French",
        experience: "7 years of experience in Playa del Carmen",
        skills: ["Culinary guide", "Food tour expert", "Local cuisine specialist"],
        bio: '"Hi, I\'m Lucía, a culinary guide and certified food expert with a great passion for Playa del Carmen and its delicious cuisine. For over seven years, I\'ve been showing travelers the gastronomic wonders of our region, from street food to fine dining. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Playa del Carmen, MX",
        rating: 4.7,
        reviews: 155,
        image: p2,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 18,
        name: "Ricardo Mendoza",
        description: "Archaeologist and Mayan astronomy expert with deep knowledge of ancient calendars.",
        languages: "Spanish/English/Mayan",
        experience: "15 years of experience in Merida",
        skills: ["Archaeologist", "Mayan astronomy expert", "Cultural researcher"],
        bio: '"Hi, I\'m Ricardo, an archaeologist and certified guide with a great passion for Merida and Mayan astronomy. For over fifteen years, I\'ve been showing travelers the astronomical knowledge of our ancient civilization, from celestial alignments to calendar systems. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 225,
        image: p3,
        backgroundColor: "#ffffff",
    },
    {
        id: 19,
        name: "Adriana Silva",
        description: "Eco-tourism specialist and sustainable travel coordinator with focus on conservation.",
        languages: "Spanish/English/Portuguese",
        experience: "10 years of experience in Holbox",
        skills: ["Eco-tourism specialist", "Conservation expert", "Sustainable travel guide"],
        bio: '"Hi, I\'m Adriana, an eco-tourism specialist and certified guide with a great passion for Holbox and its natural conservation. For over ten years, I\'ve been showing travelers the sustainable side of our region, from wildlife protection to eco-friendly practices. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Holbox, MX",
        rating: 4.8,
        reviews: 135,
        image: p4,
        backgroundColor: "#f1f1f1",
    },
    {
        id: 20,
        name: "Javier Torres",
        description: "Nightlife guide and entertainment specialist with expertise in local bars and clubs.",
        languages: "Spanish/English/Italian",
        experience: "6 years of experience in Cancun",
        skills: ["Nightlife guide", "Entertainment specialist", "Party coordinator"],
        bio: '"Hi, I\'m Javier, a nightlife guide and certified entertainment specialist with a great passion for Cancun and its vibrant nightlife. For over six years, I\'ve been showing travelers the best parties of our region, from beach clubs to rooftop bars. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!"',
        location: "Cancun, MX",
        rating: 4.5,
        reviews: 180,
        image: p1,
        backgroundColor: "#ffffff",
    },
];

// Datos de ubicaciones
const locations = [
    { name: "Cancun", selected: false },
    { name: "Merida", selected: true },
    { name: "Tulum", selected: false },
    { name: "Playa del Carmen", selected: false },
    { name: "Holbox", selected: false },
    { name: "Cozumel", selected: false },
];

// Opciones de filtros
const languageOptions = [
    { label: "English", checked: true },
    { label: "Spanish", checked: false },
    { label: "Chinese", checked: false },
    { label: "Korean", checked: true },
    { label: "Japanese", checked: false },
    { label: "Russian", checked: false },
    { label: "Italian", checked: false },
];

const budgetOptions = [
    { label: "$$$$", checked: false },
    { label: "$$$", checked: false },
    { label: "$$", checked: true },
    { label: "$", checked: false },
];

const featureOptions = [
    { label: "Eco-friendly", checked: true },
    { label: "Free Initial Consultation", checked: false },
    { label: "Certified", checked: false },
    { label: "Verified", checked: false },
    { label: "Weekend Availability", checked: true },
    { label: "Pet-Friendly", checked: false },
];

const availabilityOptions = [{ label: "Available now", checked: false }];

const ratingOptions = [
    { label: "5", checked: true },
    { label: "4", checked: true },
    { label: "3", checked: false },
    { label: "2-1", checked: false },
];

// THEME - Configuración del tema de Material-UI
const appTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        background: {
            default: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: ["Inter", "Playfair Display"].join(","),
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "normal",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                        borderColor: "#000000",
                        borderWidth: 2,
                    },
                },
                outlined: {
                    borderWidth: 2,
                    "&:hover": {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#000000",
                },
            },
        },
    },
});

// COMPONENTS - Componentes reutilizables

// Componente ThemeProvider
const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

// Componente GuideInfo - Muestra la información de un guía
const GuideInfo = ({ guide }) => {
    return (
        <Stack spacing={4}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "28px" },
                }}
            >
                Guide In {guide.location.split(',')[0]}
            </Typography>

            <Typography
                sx={{
                    opacity: 0.6,
                    height: "auto",
                    overflow: "hidden",
                    fontFamily: "Playfair Display",
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
                            fontFamily: "Playfair Display",
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
                            fontFamily: "Playfair Display",
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
                                fontFamily: "Playfair Display",
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
                        fontFamily: "Playfair Display",
                        fontWeight: 500,
                    }}
                >
                    {guide.bio}
                </Typography>
            </Box>

            <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
                <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Playfair Display" }}>
                        {guide.location}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: "15px" }} />

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={guide.rating} precision={0.1} readOnly size="small" />
                    <Typography sx={{ fontSize: "14px", fontWeight: 700, fontFamily: "Inter" }}>
                        {guide.rating}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Playfair Display" }}>
                        (
                        <Box
                            component="span"
                            sx={{
                                fontFamily: "Inter",
                                fontWeight: 600,
                                fontSize: "14px",
                            }}
                        >
                            {guide.reviews}
                        </Box>{" "}
                        reviews)
                    </Typography>

                </Stack>
            </Stack>

            <Button
                component={RouterLink}
                to="/GuideSelectionated"
                variant="contained"
                sx={{
                    bgcolor: "#80b9ad",
                    borderRadius: "12px",
                    py: 2,
                    textTransform: "none",
                    fontFamily: "Inter",
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

// Componente GuideImage - Muestra la imagen de un guía
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
                    objectFit: "cover",
                    objectPosition: "top center"
                }}
            />
        </Box>
    );
};

// MAIN COMPONENT - Componente principal de la página
const Guides = () => {
    // Estados para los filtros
    const [languages, setLanguages] = useState(languageOptions);
    const [budgets, setBudgets] = useState(budgetOptions);
    const [features, setFeatures] = useState(featureOptions);
    const [availability, setAvailability] = useState(availabilityOptions);
    const [ratings, setRatings] = useState(ratingOptions);
    const [locations, setLocations] = useState([
        { name: "Cancun", selected: false },
        { name: "Merida", selected: true },
        { name: "Tulum", selected: false },
        { name: "Playa del Carmen", selected: false },
        { name: "Holbox", selected: false },
        { name: "Cozumel", selected: false },
    ]);

    // Manejadores de cambios para los filtros
    const handleLanguageChange = (index) => {
        const newLanguages = [...languages];
        newLanguages[index].checked = !newLanguages[index].checked;
        setLanguages(newLanguages);
    };

    const handleBudgetChange = (index) => {
        const newBudgets = [...budgets];
        newBudgets[index].checked = !newBudgets[index].checked;
        setBudgets(newBudgets);
    };

    const handleFeatureChange = (index) => {
        const newFeatures = [...features];
        newFeatures[index].checked = !newFeatures[index].checked;
        setFeatures(newFeatures);
    };

    const handleAvailabilityChange = (index) => {
        const newAvailability = [...availability];
        newAvailability[index].checked = !newAvailability[index].checked;
        setAvailability(newAvailability);
    };

    const handleRatingChange = (index) => {
        const newRatings = [...ratings];
        newRatings[index].checked = !newRatings[index].checked;
        setRatings(newRatings);
    };

    const handleLocationChange = (index) => {
        const newLocations = locations.map((location, i) => ({
            ...location,
            selected: i === index
        }));
        setLocations(newLocations);
    };

    return (
        <ThemeProvider>
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    minHeight: "100vh",
                    position: "relative",
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
                    {/* Main Title */}
                    <Typography
                        variant="h3"
                        sx={{
                            position: "absolute",
                            top: { xs: "80px", md: "61px" },
                            left: { xs: "20px", md: "147px" },
                            fontFamily: "Playfair Display",
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
                    <Box
                        sx={{
                            mt: { xs: "160px", md: "171px" },
                            px: { xs: 2, md: "150px" },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: { xs: "40px", md: "92px" }
                        }}
                    >
                        {/* Left Image */}
                        <Box
                            component="img"
                            src={img53}
                            alt="Tropical resort with swimming pool"
                            sx={{
                                width: "515px",
                                height: "541px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                flexShrink: 0
                            }} />

                        {/* Right Text */}
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "478px"
                        }}>
                            <Stack spacing={8}>
                                <Stack spacing={2}>
                                    <DirectionsCar sx={{ fontSize: 43, color: "#0e3d4d" }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: "Playfair Display",
                                            fontWeight: 600,
                                            color: "#0e3d4d",
                                            fontSize: "40px",
                                            lineHeight: "normal"
                                        }}
                                    >
                                        Don't worry about driving
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "Playfair Display",
                                            fontWeight: 500,
                                            color: "#0e3d4d",
                                            fontSize: "25px",
                                            lineHeight: "normal",
                                            whiteSpace: "pre-line"
                                        }}
                                    >
                                        {`The guide will do it for you, when you\nhire the guide he will take care of taking\nyou to your destination.`}
                                    </Typography>
                                </Stack>

                                <Stack spacing={2}>
                                    <Pets sx={{ fontSize: 39, color: "#0e3d4d" }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: "Playfair Display",
                                            fontWeight: 600,
                                            color: "#0e3d4d",
                                            fontSize: "40px",
                                            lineHeight: "normal"
                                        }}
                                    >
                                        Come with your friend!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "Playfair Display",
                                            fontWeight: 500,
                                            color: "#0e3d4d",
                                            fontSize: "25px",
                                            lineHeight: "normal"
                                        }}
                                    >
                                        Find your guide who also loves pets!
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                    {/* Banner Image */}
                    <Box
                        sx={{
                            width: { xs: "90%", md: "950px" },
                            height: "90px",
                            mx: "auto",
                            mt: { xs: 8, md: 10 },
                            mb: { xs: 6, md: 8 },
                            backgroundImage: `url(${img40})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }} />

                    {/* Guides In Section Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            fontFamily: "Playfair Display",
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
                            spacing={4}
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
                                    key={location.name}
                                    label={location.name}
                                    clickable
                                    onClick={() => handleLocationChange(index)}
                                    sx={{
                                        height: "44px",
                                        minWidth: "130px",
                                        borderRadius: "30px",
                                        fontSize: "14px",
                                        fontFamily: "Playfair Display",
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
                                    }} />
                            ))}
                        </Stack>
                    </Box>

                    {/* Additional Filters */}
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mb: 6,
                        px: 2,
                        overflowX: "auto"
                    }}>
                        <Stack
                            direction="row"
                            spacing={5.625}
                            sx={{
                                width: { xs: "100%", md: "1266px" },
                                height: "361px",
                                mx: "auto"
                            }}
                        >
                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, color: "text.primary", fontFamily: "Playfair Display" }}
                                >
                                    Language
                                </Typography>
                                <FormGroup>
                                    {languages.map((language, index) => (
                                        <FormControlLabel
                                            key={language.label}
                                            control={
                                                <Checkbox
                                                    checked={language.checked}
                                                    onChange={() => handleLanguageChange(index)}
                                                    size="small"
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: language.checked ? "primary.main" : "text.secondary",
                                                        fontSize: "14px",
                                                        fontFamily: "Playfair Display",
                                                    }}
                                                >
                                                    {language.label}
                                                </Typography>
                                            }
                                            sx={{ margin: 0, marginBottom: 1 }}
                                        />
                                    ))}
                                </FormGroup>
                            </Stack>

                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, color: "text.primary", fontFamily: "Playfair Display" }}
                                >
                                    Budget
                                </Typography>
                                <FormGroup>
                                    {budgets.map((budget, index) => (
                                        <FormControlLabel
                                            key={budget.label}
                                            control={
                                                <Checkbox
                                                    checked={budget.checked}
                                                    onChange={() => handleBudgetChange(index)}
                                                    size="small"
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: budget.checked ? "primary.main" : "text.secondary",
                                                        fontSize: "14px",
                                                        fontFamily: "Playfair Display",
                                                    }}
                                                >
                                                    {budget.label}
                                                </Typography>
                                            }
                                            sx={{ margin: 0, marginBottom: 1 }}
                                        />
                                    ))}
                                </FormGroup>
                            </Stack>

                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, color: "text.primary", fontFamily: "Playfair Display" }}
                                >
                                    Features
                                </Typography>
                                <FormGroup>
                                    {features.map((feature, index) => (
                                        <FormControlLabel
                                            key={feature.label}
                                            control={
                                                <Checkbox
                                                    checked={feature.checked}
                                                    onChange={() => handleFeatureChange(index)}
                                                    size="small"
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: feature.checked ? "primary.main" : "text.secondary",
                                                        fontSize: "14px",
                                                        fontFamily: "Playfair Display",
                                                    }}
                                                >
                                                    {feature.label}
                                                </Typography>
                                            }
                                            sx={{ margin: 0, marginBottom: 1 }}
                                        />
                                    ))}
                                </FormGroup>
                            </Stack>

                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, color: "text.primary", fontFamily: "Playfair Display" }}
                                >
                                    Availability
                                </Typography>
                                <FormGroup>
                                    {availability.map((item, index) => (
                                        <FormControlLabel
                                            key={item.label}
                                            control={
                                                <Checkbox
                                                    checked={item.checked}
                                                    onChange={() => handleAvailabilityChange(index)}
                                                    size="small"
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: item.checked ? "primary.main" : "text.secondary",
                                                        fontSize: "14px",
                                                        fontFamily: "Playfair Display",
                                                    }}
                                                >
                                                    {item.label}
                                                </Typography>
                                            }
                                            sx={{ margin: 0, marginBottom: 1 }}
                                        />
                                    ))}
                                </FormGroup>
                            </Stack>

                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, color: "text.primary", fontFamily: "Playfair Display" }}
                                >
                                    Average rating
                                </Typography>
                                <FormGroup>
                                    {ratings.map((rating, index) => (
                                        <FormControlLabel
                                            key={rating.label}
                                            control={
                                                <Checkbox
                                                    checked={rating.checked}
                                                    onChange={() => handleRatingChange(index)}
                                                    size="small"
                                                />
                                            }
                                            label={
                                                <Stack direction="row" spacing={0.5} alignItems="center">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: rating.checked ? "primary.main" : "text.secondary",
                                                            fontSize: "14px",
                                                            fontFamily: "Inter",
                                                        }}
                                                    >
                                                        {rating.label}
                                                    </Typography>
                                                    <Star sx={{ fontSize: "12px", color: "#FFB400" }} />
                                                </Stack>
                                            }
                                            sx={{ margin: 0, marginBottom: 1 }}
                                        />
                                    ))}
                                </FormGroup>
                            </Stack>
                        </Stack>
                    </Box>

                    {/* Guide Cards */}
                    <Box   sx={{ px: { xs: 2, md: 4 }, mb: 10 }}>
                        {guides
                            .filter(guide => {
                                const selectedLocation = locations.find(loc => loc.selected);
                                if (!selectedLocation) return true;
                                return guide.location.includes(selectedLocation.name);
                            })
                            .map((guide, index) => (
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
                                         {/* Información siempre arriba, imagen siempre abajo */}
                                         <Grid item xs={12} md={6}>
                                             <GuideInfo guide={guide} />
                                         </Grid>
                                         <Grid item xs={12} md={6}>
                                             <GuideImage guide={guide} />
                                         </Grid>
                                     </Grid>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Guides;