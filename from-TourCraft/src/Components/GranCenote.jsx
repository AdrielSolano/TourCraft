import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Chip,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Avatar
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
    ArrowBack,
    ChevronRight,
    CardTravel,
    Explore,
    LocalTaxi,
    DirectionsWalk,
    Groups,
    Paid,
    DirectionsBus,
    Schedule,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import hartwood from "../assets/hartwood.jpg";
import laCoqueta from "../assets/la-coqueta.jpg";
import rawLoveCafe from "../assets/raw-love-cafe.jpg";

// Update with Gran Cenote images
import granCenoteMain from "../assets/gran.jpeg";


const iconMap = {
    "Nature & Adventure": Explore,
    "Swimming": DirectionsWalk,
    "Snorkeling": DirectionsBus,
    "Photography": CardTravel,
};

const texts = [
    "Pickup available from Tulum center (additional fee)",
    "Entrance fee: $500 MXN per person",
    "Open daily from 8:00 AM to 5:00 PM",
    "Average visit duration: 2-3 hours",
    "Lockers available for rent",
    "Snorkel gear rental available",
    "Freshwater cenote with stunning rock formations",
    "Perfect for swimming and snorkeling",
    "Natural shaded areas for relaxation"
];

const GranCenote = () => {
    const testimonialsRef = useRef(null);
    const [categorias, setCategorias] = useState([]);
    const [zona, setZona] = useState(null);

    const getDescription = () => {
        if (zona && zona.descripción) {
            return zona.descripción;
        }
        if (zona && !zona.descripción) {
            return 'No data available for this place.';
        }
        return 'Gran Cenote is one of the most beautiful and accessible cenotes near Tulum. Known for its crystal-clear waters, impressive stalactites and stalagmites, and abundant marine life, it offers a magical underground swimming experience. The cenote is part of an extensive cave system and features both open-air and cavern areas.';
    };

    useEffect(() => {
        axios.get("http://localhost:3000/api/categoria")
            .then(res => setCategorias(res.data.data))
            .catch(err => console.error("Error al obtener categorías", err));
    }, []);

    useEffect(() => {
        const idZona = "688bd630f77e1f6903e19c74"; // Update with Gran Cenote ID if available
        axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
            .then(res => setZona(res.data.data))
            .catch(err => console.error("Error al obtener zona turística", err));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/Tulum" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image={granCenoteMain}
                                    alt="Gran Cenote main view"
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.295238090716!2d-87.46677592417326!3d20.246586814182134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd47422e418ff%3A0xcef0a92adbeddf8a!2sGran%20Cenote!5e0!3m2!1ses!2smx!4v1754038536484!5m2!1ses!2smx"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Group size: 1-10' },
                                        { icon: Schedule, text: 'Duration: 2-3 hours' },
                                        { icon: Paid, text: 'Entry Fees: $500 MXN per person' },
                                        { icon: DirectionsBus, text: 'Distance from Tulum: 4 km' }
                                    ].map((item, index) => (
                                        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <item.icon sx={{ color: '#7bbcb0', fontSize: 20 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.text}
                                                sx={{
                                                    '& .MuiListItemText-primary': {
                                                        fontFamily: "Playfair Display",
                                                        fontSize: '14px',
                                                        color: '#666'
                                                    }
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontFamily: "Playfair Display" }}>
                                    Gran Cenote
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#7bbcb0', mb: 3, fontFamily: "Playfair Display" }}>
                                    From $500 MXN
                                </Typography>
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
                            </Box>

                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: "Playfair Display" }}>
                                    What's included
                                </Typography>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {texts.map((text, index) => (
                                        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <FiberManualRecordIcon sx={{ color: '#7bbcb0', fontSize: 8 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={text}
                                                sx={{
                                                    '& .MuiListItemText-primary': {
                                                        fontFamily: "Playfair Display",
                                                        fontSize: '14px',
                                                        color: '#666'
                                                    }
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
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
                                Book Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                            <Container maxWidth="lg">
                                <Typography variant="h2" align="center" sx={{ fontWeight: 700, mb: 7.5, fontFamily: "Playfair Display" }}>
                                    Nearby places in Gran Cenote
                                </Typography>
            
                                <Grid container spacing={5}>
                                    {[
                                        {
                                            image: hartwood,
                                            title: 'Hartwood',
                                            description: 'Upscale farm-to-table restaurant with wood-fired cooking and fresh local ingredients. Famous for their innovative Mexican cuisine.',
                                            url: "https://www.hartwoodtulum.com/"
                                        },
                                        {
                                            image: laCoqueta,
                                            title: 'La Coqueta',
                                            description: 'Charming boutique restaurant with Mediterranean-inspired cuisine and romantic atmosphere. Perfect for intimate dining experiences.',
                                            url: "https://lacoqueta.shop"
                                        },
                                        {
                                            image: rawLoveCafe,
                                            title: 'Raw Love Cafe',
                                            description: 'Healthy vegan and raw food cafe with organic ingredients and fresh juices. Known for their smoothie bowls and plant-based dishes.',
                                            url: "https://rawlovetulum.com"
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

export default GranCenote;