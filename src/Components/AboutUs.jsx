import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

// Importaciones de imágenes
import rectangle46 from "/src/assets/rectangle46.png";
a
import Vector from "../assets/Vector.png";

// Imágenes de miembros del equipo
import David from "../assets/Image3.png";
import Adriel from "../assets/image.png";
import DavidDominguez from "../assets/imaga2.png";
import Adrian from "../assets/image4.png";
import Jesus from "../assets/image1.png";

const AboutUs = () => {
    // Estado para manejar la expansión de cada accordion
    const [expandedMember, setExpandedMember] = useState(null);

    // Descripción común para todos los miembros
    const teamMemberDescription = `We are a team dedicated to connecting travelers with the best experiences that the Riviera Maya has to offer. Through our platform, we provide visitors access to a variety of tourism options, including expert guides, historical sites, natural adventures, and authentic cultural experiences. Our focus is on offering a practical and reliable way to explore this magical region, providing detailed information, personalized services, and a secure space for booking—all in one convenient place.`;

    // Datos de los miembros del equipo
    const teamMembers = [
        {
            name: "David Santiago Gutierrez Calderon",
            title: "Proyect leader, Software developer, TourCraft Group.",
            image: David
        },
        {
            name: "Adriel Arturo Solano Peraza",
            title: "Scrum master, Software Develoment, TourCraft Group.",
            image: Adriel
        },
        {
            name: "David Dominguez Fraga",
            title: "Software Analyst, TourCraft Group.",
            image: DavidDominguez
        },
        {
            name: "Adrian Francisco Farias Aranda",
            title: "UX and UI Designer, TourCraft Group.",
            image: Adrian
        },
        {
            name: "Jesus Gallegos Gaspar",
            title: "Team Leader, Software developer, TourCraft Group.",
            image: Jesus
        }
    ];

    // Manejador para expandir/colapsar el accordion
    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpandedMember(isExpanded ? index : null);
    };

    return (
        <Box sx={{ bgcolor: "white", width: "100%" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    width: "100%",
                    height: "451px",
                    position: "relative",
                    backgroundImage: `url(${rectangle46})`, // Ya lo tienes bien                    
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        width: "748px",
                        color: "white",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        fontSize: "40px",
                        textAlign: "center",
                        letterSpacing: "-0.8px",
                        lineHeight: "34px",
                    }}
                >
                    WE OFFER PERSONAL GUIDES FOR YOU
                </Typography>
            </Box>

            {/* Contact Us Button and About Us Title */}
            <Container
                maxWidth="lg"
                sx={{ mt: 6, display: "flex", alignItems: "center" }}
            >
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#f3f3f3",
                        color: "black",
                        borderRadius: "15px",
                        textTransform: "none",
                        height: "58px",
                        mr: 4,
                    }}
                    startIcon={
                        <Box
                            component="img"
                            src={Vector}
                        />
                    }
                >
                    Contact Us
                </Button>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: "neutral.900",
                        ml: 40,
                    }}
                >
                    About Us
                </Typography>
            </Container>

            {/* About Us Description */}
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "justify",
                        lineHeight: 1.6,
                    }}
                >
                    Welcome to TourCraft, a space designed to offer authentic and
                    personalized experiences in the Riviera Maya. We are passionate
                    about connecting travelers with the best our region has to offer,
                    from the stunning beaches and cenotes to its vibrant culture and
                    delicious cuisine. Our mission is to make unique destinations
                    accessible while supporting local guides and small businesses,
                    promoting sustainable, high-quality tourism.
                    <br />
                    <br />
                    Here, you can explore, plan, and customize your journey with us,
                    selecting points of interest, transportation options, and services
                    tailored to your needs. Whether you're seeking a nature adventure, a
                    deep cultural experience, or recommendations for the best dining
                    spots, we're here to help you create unforgettable memories in the
                    heart of the Riviera Maya.
                </Typography>
            </Container>

            {/* Team Members Section */}
            <Container maxWidth="md" sx={{ mt: 6 }}>
                {teamMembers.map((member, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: "flex",
                            mb: 4,
                            boxShadow: "none",
                            height: expandedMember === index ? "auto" : "500px",
                            maxHeight: "700px", // Máxima altura para prevenir desbordamiento
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ width: 338, height: 332, objectFit: "cover", m: 2 }}
                            image={member.image}
                            alt={member.name}
                        />
                        <CardContent sx={{ width: 344, p: 4, display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 800,
                                    fontFamily: "'Commissioner', sans-serif",
                                }}
                            >
                                {member.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontStyle: "italic",
                                    fontFamily: "'Commissioner', sans-serif",
                                    mb: 2,
                                }}
                            >
                                {member.title}
                            </Typography>
                            <Accordion
                                expanded={expandedMember === index}
                                onChange={handleAccordionChange(index)}
                                sx={{
                                    boxShadow: 'none',
                                    border: '1px solid rgba(0, 0, 0, 0.12)',
                                    mt: 1,
                                    '&:before': {
                                        display: 'none',
                                    },
                                    '&.Mui-expanded': {
                                        m: 0,
                                        mb: 2,
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel-content-${index}`}
                                    id={`panel-header-${index}`}
                                    sx={{
                                        minHeight: 'auto',
                                        '& .MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                            '&.Mui-expanded': {
                                                margin: '8px 0',
                                            }
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'primary.main',
                                            fontWeight: 'medium'
                                        }}
                                    >
                                        {expandedMember === index ? "Hide Description" : "View Team Member Description"}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        pt: 2,
                                        '& .MuiTypography-root': {
                                            transition: 'all 0.3s ease',
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: "justify",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {teamMemberDescription}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </Box>
    );
};

export default AboutUs;