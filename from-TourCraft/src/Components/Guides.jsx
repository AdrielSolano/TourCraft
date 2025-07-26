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
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';

// Datos de guías turísticos
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
        image: p2,
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
        image: p1,
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
        image: p2,
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
        image: p1,
        backgroundColor: "#ffffff",
    },
];

// Datos de ubicaciones
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
                Guide In Merida
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
                    objectFit: "cover"
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
                    {/* Back Button */}
                    <Button
                        startIcon={<ArrowBack />}
                        component={RouterLink}
                        to="/"
                        sx={{
                            position: "absolute",
                            top: { xs: "24px", md: "32px" },
                            left: { xs: "16px", md: "32px" },
                            textTransform: "none",
                            fontWeight: 100,
                            fontFamily: "Inter",
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
                            mt: { xs: "160px", md: "371px" },
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
                            spacing={2}
                            sx={{
                                width: "max-content",
                                mx: "auto",
                                mb: 6,
                                px: 2,
                                height: "46px",
                            }}
                        >
                            {locations.map((location) => (
                                <Chip
                                    key={location.name}
                                    label={location.name}
                                    clickable
                                    component={RouterLink}
                                    to={location.name === "Merida" ? "/Merida" : "#"}
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
        </ThemeProvider>
    );
};

export default Guides;