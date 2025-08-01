import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Chip, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ArrowBack, ChevronRight, CardTravel, Explore, LocalTaxi, DirectionsWalk, Groups, Paid, DirectionsBus, Schedule } from '@mui/icons-material';
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';
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
    "Professional PADI certified dive guide briefing",
    "Boat (30 minutes)",
    "Palancar Reef - Deep diving, Marine life, Coral formations (2 hours)",
    "Boat (15 minutes)",
    "Columbia Wall - Wall diving, Currents, Large fish (1.5 hours)",
    "Boat (15 minutes)",
    "Santa Rosa Wall - Drift diving, Turtles, Rays (1.5 hours)",
    "Boat (30 minutes)",
    "Return to marina with equipment cleaning and debriefing"
];

const ScubaDivingTour = () => {
    const testimonialsRef = useRef(null);
    const [categorias, setCategorias] = useState([]);
    const [zona, setZona] = useState(null);

    const getDescription = () => {
        return 'Discover the underwater wonders of Cozumel with our professional scuba diving tours! Explore world-renowned dive sites like Palancar Reef, Columbia Wall, and Santa Rosa Wall. Experience vibrant coral formations, encounter tropical marine life including turtles, rays, and colorful fish. Our PADI certified guides ensure safe and unforgettable diving experiences for both beginners and advanced divers.';
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

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/Cozumel" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image="https://imgs.search.brave.com/9bo7DwFQ2Hn0OM8mhsMDdthfV-4ag50JnzJfnO692C8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVzcG9uc2libGV0/cmF2ZWwuY29tL2lt/YWdlc0NsaWVudC9T/XzEzOTc1Ni5qcGc"
                                    alt="Scuba Diving Tour main view"
                                    sx={{ borderRadius: '12px', mb: 2.25, width: '100%', height: 'auto' }}
                                />
                            </Box>

                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2.5, fontFamily: "Playfair Display" }}>
                                    Details
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: '30px', mb: 2, fontFamily: "Playfair Display" }}>
                                    {getDescription()}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2.5, fontFamily: "Playfair Display" }}>
                                    Location
                                </Typography>
                                <Box sx={{ borderRadius: '25px', overflow: 'hidden' }}>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.021329480135!2d-86.9489768!3d20.4940319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e576332d72f29:0x800fbe6a29aea571!2sScuba%20Reef%20Cozumel!5e0!3m2!1ses-419!2smx!4v1690412072934!5m2!1ses-419!2smx"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Number of group: 1-6' },
                                        { icon: Schedule, text: 'Duration: 6-8 hours' },
                                        { icon: Paid, text: 'Entry Fees: $120 per person' },
                                        { icon: DirectionsBus, text: 'Transportation: Boat provided' }
                                    ].map((item, index) => (
                                        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <item.icon sx={{ color: '#80b9ad', fontSize: 24 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.text}
                                                primaryTypographyProps={{
                                                    fontWeight: 700,
                                                    fontFamily: "Playfair Display"
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontFamily: "Playfair Display" }}>
                                    Scuba Diving Tour
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.8, fontFamily: "Playfair Display" }}>
                                    from
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#80b9ad', fontFamily: "Inter" }}>
                                    $120
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

                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="/Guides"
                                sx={{
                                    alignSelf: 'flex-start',
                                    backgroundColor: '#80b9ad',
                                    color: '#ffffff',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    fontFamily: "'Inter'",
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#6da89c' }
                                }}
                            >
                                Select place
                            </Button>

                            <Box sx={{ position: 'relative' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3.75, fontFamily: "Playfair Display" }}>
                                    Experience (Itinerary)
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pl: 5 }}>
                                    {texts.map((text, i) => {
                                        const parts = text.split(':');
                                        return (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                                <FiberManualRecordIcon sx={{ color: '#80b9ad', fontSize: 16, mt: '6px' }} />
                                                <Typography variant="body1" sx={{ fontFamily: "'Playfair Display'" }}>
                                                    {parts[0] && <strong>{parts[0]}{parts.length > 1 ? ':' : ''} </strong>}
                                                    {parts[1] ? parts[1] : parts[0]}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                        </Box>
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
        </Box>
    );
};

export default ScubaDivingTour; 