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
import img from '../assets/img.png';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import lg3 from '../assets/lg3.png';
import lg4 from '../assets/lg4.png';
import Rectangle16 from '../assets/Rectangle16.png';
import Rectangle161 from '../assets/Rectangle161.png';
import Rectangle162 from '../assets/Rectangle162.png';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
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
    "3 pickup location options: Parque de Santa Ana, Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana. See more",
    "Van (2 hours)",
    "Chichén Itzá - Photo stop, Visit, Guided tour, Free time, Shopping (2.5 hours)",
    "Van (15 minutes)",
    "Cenote Ik Kil - Lunch, Swimming (2.5 hours)",
    "Van (1 hour)",
    "Izamal - Photo stop, Visit, Guided tour, Free time, Shopping (1.5 hours)",
    "Van (1 hour)",
    "3 drop-off locations: Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana, Parque de Santa Ana"
];

const WhaleSharkTour = () => {
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
        return 'Loading description...';
    };

    useEffect(() => {
        axios.get("http://localhost:3000/api/categoria")
            .then(res => setCategorias(res.data.data))
            .catch(err => console.error("Error al obtener categorías", err));
    }, []);

    useEffect(() => {
        const idZona = "688bd6fef77e1f6903e19c79";
        axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
            .then(res => setZona(res.data.data))
            .catch(err => console.error("Error al obtener zona turística", err));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/Holbox" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image="https://imgs.search.brave.com/HgM7T0QNfcUhT_rajRFq65cg4VngwSzrEFMbhNIyW_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbGFuZ2thaHRy/YXZlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDkv/T3Blbi1UcmlwLUhp/dS1QYXVzLVN1bWJh/d2EuanBn"
                                    alt="Whale Shark Tour main view"
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
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.91648497456!2d-87.3794558!3d21.5206227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4d92753cae1733%3A0x671ed9d9f94b57f9!2sHolbox%20Whale%20Shark%20Tours!5e0!3m2!1sen!2smx!4v1712345678901"                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Number of group: 1-6' },
                                        { icon: Schedule, text: 'Duration: Full day' },
                                        { icon: Paid, text: 'Entry Fees: $150 per person' },
                                        { icon: DirectionsBus, text: 'Transportation: Includes' }
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
                                    Whale Shark Tour
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#7bbcb0', mb: 3, fontFamily: "Playfair Display" }}>
                                    From $150
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

                            <Box>
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
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" sx={{ fontWeight: 700, mb: 7.5, fontFamily: "Playfair Display" }}>
                        Nearby places in Whale Shark Tour
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: lolaValentina,
                                title: 'Holbox Seafood Grill',
                                description: 'Beachfront restaurant specializing in fresh local seafood and traditional Mexican dishes. Famous for their ceviche and grilled fish.',
                                url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155162-Reviews-Holbox_Seafood_Grill-Holbox_Yucatan_Peninsula.html"
                            },
                            {
                                image: laCasaDeLasMayoras,
                                title: 'La Tortuga Restaurant',
                                description: 'Charming beach restaurant with organic ingredients and farm-to-table concept. Perfect for post-tour dining with ocean views.',
                                url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155163-Reviews-La_Tortuga-Holbox_Yucatan_Peninsula.html"
                            },
                            {
                                image: laRosaNegra,
                                title: 'Casa Nostra',
                                description: 'Italian restaurant with Mediterranean flavors and fresh pasta. Known for their wood-fired pizzas and homemade gelato.',
                                url: "https://www.tripadvisor.com/Restaurant_Review-g150809-d155164-Reviews-Casa_Nostra-Holbox_Yucatan_Peninsula.html"
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

export default WhaleSharkTour; 