import ArrowBack from "@mui/icons-material/ArrowBack";
import Check from "@mui/icons-material/Check";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Pets from "@mui/icons-material/Pets";
import LocationOn from "@mui/icons-material/LocationOn"; // Esta es la importación que faltaba
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
import { Link } from "react-router-dom";

// Sample data for guides
const guides = [
    {
        id: 1,
        name: "Sebastián Monteverde",
        description:
            "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Professional photographer", "Certified guide"],
        bio: '"Hola, soy Sebastian, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: "/Img1.png",
        backgroundColor: "#f1f1f1",
    },
    {
        id: 2,
        name: "Mariana Del Valle",
        description:
            "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Mariana, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: "/Img2.png",
        backgroundColor: "#ffffff",
    },
    {
        id: 3,
        name: "Camila Arrieta",
        description:
            "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Camila, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Meridad, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: "/Img3.png",
        backgroundColor: "#f1f1f1",
    },
    {
        id: 4,
        name: "Valeria Sandoval",
        description:
            "Ac euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
        languages: "Spanish/English/Japanese",
        experience: "5 years of experience in the Merida",
        skills: ["Certified guide", "Certified guide"],
        bio: '"Hola, soy Valeria, guía certificado con una gran pasión por la Riviera Maya. Llevo más de cinco años mostrando a los viajeros la belleza natural y cultural de nuestra región, desde los cenotes hasta las ruinas mayas. Mi objetivo es crear experiencias únicas y auténticas para que cada visitante se lleve recuerdos inolvidables. ¡Será un placer ser tu guía en esta aventura!"',
        location: "Merida, MX",
        rating: 4.9,
        reviews: 300,
        price: "40$/day",
        image: "/Img4.png",
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
            }}
        >
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    width: "1512px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBack />}
                    sx={{
                        position: "absolute",
                        top: "172px",
                        left: "82px",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "18px",
                    }}
                >
                    Back
                </Button>

                {/* Main Title */}
                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        top: "261px",
                        left: "147px",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#0e3d4d",
                        fontSize: "48px",
                    }}
                >
                    Let's take a look at our guides
                </Typography>

                {/* Feature Section */}
                <Grid
                    container
                    sx={{
                        position: "absolute",
                        top: "371px",
                        left: "150px",
                        gap: "92px",
                    }}
                >
                    <Grid item>
                        <Box
                            component="img"
                            src="/rectangle10.png"
                            alt="Feature Image"
                            sx={{ width: "515px", height: "541px", objectFit: "cover" }}
                        />
                    </Grid>

                    <Grid item>
                        <Stack spacing={4} sx={{ width: "478px" }}>
                            <Stack spacing={1}>
                                <DirectionsCar sx={{ fontSize: 43, color: "#0e3d4d" }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#0e3d4d",
                                        fontSize: "40px",
                                    }}
                                >
                                    Don't worry about driving
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        color: "#0e3d4d",
                                        fontSize: "25px",
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
                                        fontSize: "40px",
                                    }}
                                >
                                    Come with your friend!
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        color: "#0e3d4d",
                                        fontSize: "25px",
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
                    component="img"
                    src="/image43.png"
                    alt="Banner"
                    sx={{
                        position: "absolute",
                        width: "950px",
                        height: "90px",
                        top: "1013px",
                        left: "281px",
                    }}
                />

                {/* Guides In Section Title */}
                <Typography
                    variant="h4"
                    sx={{
                        position: "absolute",
                        top: "1199px",
                        left: "668px",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#0e3d4d",
                        fontSize: "40px",
                    }}
                >
                    Guides in
                </Typography>

                {/* Location Filter */}
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        position: "absolute",
                        top: "1277px",
                        left: "173px",
                        width: "1166px",
                        height: "46px",
                        justifyContent: "center",
                    }}
                >
                    {locations.map((location, index) => (
                        <Chip
                            key={index}
                            label={location.name}
                            clickable
                            sx={{
                                height: "44px",
                                width: "130px",
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

                {/* Guide Cards */}
                {guides.map((guide, index) => (
                    <Card
                        key={index}
                        sx={{
                            position: "absolute",
                            top: 1411 + index * 759,
                            left: "36px",
                            width: "1440px",
                            borderRadius: "25px",
                            bgcolor: guide.backgroundColor,
                            p: 0,
                            boxShadow: "none",
                        }}
                    >
                        <CardContent sx={{ p: 0 }}>
                            <Grid container spacing={4} sx={{ p: 7.5 }}>
                                {/* Left side for even index, right side for odd index */}
                                {index % 2 === 0 ? (
                                    <>
                                        <Grid item xs={6}>
                                            <GuideInfo guide={guide} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <GuideImage guide={guide} />
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <Grid item xs={6}>
                                            <GuideImage guide={guide} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <GuideInfo guide={guide} />
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
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
                    fontSize: "28px",
                }}
            >
                Guide In Merida
            </Typography>

            <Typography
                sx={{
                    opacity: 0.6,
                    height: "48px",
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
                            width: "345px",
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
                            width: "415px",
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
                                width: "454px",
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

            <Stack direction="row" alignItems="center" spacing={2}>
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
                width: "600px",
                height: "482px",
                borderRadius: "30px",
                overflow: "hidden",
                backgroundImage: `url(${guide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
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