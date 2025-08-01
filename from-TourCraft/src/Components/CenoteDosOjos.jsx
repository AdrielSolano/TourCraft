import React, { useEffect, useState } from 'react';
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
    Rating
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
    ArrowBack,
    ChevronRight,
    CardTravel,
    Explore,
    DirectionsWalk,
    Groups,
    Paid,
    Schedule,
    AccessTime,
    LocationOn
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import imga3 from "../assets/ojo.jpeg";
import hartwood from "../assets/hartwood.jpg";
import laCoqueta from "../assets/la-coqueta.jpg";
import rawLoveCafe from "../assets/raw-love-cafe.jpg";

const iconMap = {
    "Nature & Adventure": Explore,
    "Swimming": DirectionsWalk,
    "Cave Exploration": Groups,
    "Snorkeling": CardTravel,
};

const texts = [
    "Swim in crystal-clear underground waters",
    "Snorkel through stunning rock formations",
    "Explore the interconnected cave system",
    "See impressive stalactites and stalagmites",
    "Professional guide and safety equipment included",
    "Duration: 3-4 hours",
    "Location: Tulum, Quintana Roo",
    "Entrance fee: $30 USD per person",
    "Open daily from 8:00 AM to 5:00 PM"
];

const CenoteDosOjos = () => {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [zona, setZona] = useState(null);

    const getDescription = () => {
        if (zona && zona.descripción) {
            return zona.descripción;
        }
        if (zona && !zona.descripción) {
            return 'No data available for this place.';
        }
        return 'Cenote Dos Ojos is one of the most beautiful and popular cenotes in the Yucatán Peninsula. Named for its two circular sinkholes that look like eyes, this cenote offers crystal-clear waters perfect for swimming and snorkeling in an otherworldly underground setting. The extensive cave system features stunning rock formations and is part of the world\'s longest underground river.';
    };

    useEffect(() => {
        axios.get("http://localhost:3000/api/categoria")
            .then(res => setCategorias(res.data.data))
            .catch(err => console.error("Error al obtener categorías", err));
    }, []);

    useEffect(() => {
        const idZona = "688bd630f77e1f6903e19c78"; // Update with Cenote Dos Ojos ID
        axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
            .then(res => setZona(res.data.data))
            .catch(err => console.error("Error al obtener zona turística", err));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link 
                    component="button" 
                    onClick={() => navigate('/Tulum')} 
                    underline="none" 
                    color='black' 
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}
                >
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>
                        Back to Tulum
                    </Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image={imga3}
                                    alt="Cenote Dos Ojos"
                                    sx={{
                                        borderRadius: '12px',
                                        mb: 2.25,
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'
                                    }}
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
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119663.81933720381!2d-87.39394092960747!3d20.403728046981524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e2d454ddab1dd%3A0x310793f6865559e8!2sCenote%20Dos%20Ojos!5e0!3m2!1ses!2smx!4v1754043908664!5m2!1ses!2smx"
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
                                        { icon: Schedule, text: 'Duration: 3-4 hours' },
                                        { icon: Paid, text: 'Entry Fees: $30 USD per person' },
                                        { icon: LocationOn, text: 'Distance from Tulum: 20 km' }
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
                                    Cenote Dos Ojos
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Rating value={5} readOnly precision={0.5} />
                                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                                        5.0 (1 review)
                                    </Typography>
                                </Box>
                                <Typography variant="h6" sx={{ color: '#7bbcb0', mb: 3, fontFamily: "Playfair Display" }}>
                                    From $30 USD
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                    {categorias.map((cat) => {
                                        const Icon = iconMap[cat.nombre] || CardTravel;
                                        return (
                                            <Chip
                                                key={cat._id}
                                                icon={<Icon sx={{ color: '#80b9ad' }} />}
                                                label={cat.nombre}
                                                sx={{ 
                                                    backgroundColor: "#fff", 
                                                    color: '#80b9ad', 
                                                    fontWeight: 700, 
                                                    border: "none", 
                                                    boxShadow: 1, 
                                                    fontFamily: "Playfair Display" 
                                                }}
                                            />
                                        );
                                    })}
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: "Playfair Display" }}>
                                    Experience Highlights
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
                                Book This Tour
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" sx={{ fontWeight: 700, mb: 7.5, fontFamily: "Playfair Display" }}>
                        Nearby places in Cenote Dos Ojos
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
                                        sx={{ height: 404, borderRadius: '24px', mb: 2, width: '100%', objectFit: 'cover' }}
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

export default CenoteDosOjos;