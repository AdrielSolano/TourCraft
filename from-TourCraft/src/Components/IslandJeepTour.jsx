import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Chip, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ArrowBack, ChevronRight, CardTravel, Explore, LocalTaxi, DirectionsWalk, Groups, Paid, DirectionsBus, Schedule } from '@mui/icons-material';
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';
import image54 from '../assets/image54.png';
import img11 from '../assets/img11.jpg';

const iconMap = {
  "Business Tours": CardTravel,
  "Nature & Adventure": Explore,
  "Transportation": LocalTaxi,
  "Local Visit": DirectionsWalk,
  "Pet Friendly": DirectionsBus,
};

const texts = [
    "Professional ATV training and safety briefing",
    "ATV (2 hours)",
    "Jungle Trail Adventure - Off-road exploration, Wildlife spotting, Photo stops (2 hours)",
    "ATV (30 minutes)",
    "Hidden Cenote Discovery - Swimming, Exploration, Natural beauty (1.5 hours)",
    "ATV (30 minutes)",
    "Remote Beach Visit - Beach time, Snorkeling, Relaxation (1 hour)",
    "ATV (30 minutes)",
    "Return to starting point with memories and photos"
];

const CozumelATVAdventure = () => {
    const testimonialsRef = useRef(null);
    const [categorias, setCategorias] = useState([]);
    const [zona, setZona] = useState(null);

    const getDescription = () => {
        return 'Experience the thrill of exploring Cozumel Island on powerful ATVs! This exciting adventure takes you through the island\'s rugged terrain, pristine beaches, and hidden cenotes. Navigate through jungle trails, visit remote beaches, and discover the natural beauty of Cozumel from a unique perspective. Perfect for adventure seekers who want to combine excitement with exploration of the island\'s most beautiful and secluded spots.';
    };

    useEffect(() => {
        axios.get("http://localhost:3000/api/categoria")
            .then(res => setCategorias(res.data.data))
            .catch(err => console.error("Error al obtener categorías", err));
    }, []);

    useEffect(() => {
        const idZona = "688bd703f77e1f6903e19c7a";
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
                                    image="https://imgs.search.brave.com/exo6RwSasHWTgIXhmQ7BFFRUfVFJv-U6kRkTRuTmsvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXR2Y296dW1lbC5j/b20vYXNzZXRzL2lt/Zy9ob21lL2NvenVt/ZWwtYXR2LWp1bmds/ZS1hZHZlbnR1cmUu/anBn"
                                    alt="Cozumel ATV Adventure main view"
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.021329480135!2d-87.0455718!3d20.4613608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e574f7f27d663:0x3e0da2a13728e6ea!2sCozumel%20ATV%20Adventure!5e0!3m2!1ses-419!2smx!4v1690412072934!5m2!1ses-419!2smx"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Number of group: 1-8' },
                                        { icon: Schedule, text: 'Duration: 4-6 hours' },
                                        { icon: Paid, text: 'Entry Fees: $85 per person' },
                                        { icon: DirectionsBus, text: 'Transportation: ATV provided' }
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
                                    Cozumel ATV Adventure
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.8, fontFamily: "Playfair Display" }}>
                                    from
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#80b9ad', fontFamily: "Inter" }}>
                                    $85
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
                        Nearby places in Cozumel ATV Adventure
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: "https://imgs.search.brave.com/XyFFndWGAdA4YC1NON4_g4ItfzjkDi_4_TcczNrfrtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWMvOGQvNTMvYWYv/bG9sYS12YWxlbnRp/bmEtOS15ZWFycy5q/cGc",
                                title: 'ATV Adventure Zone',
                                description: 'Professional ATV tours with experienced guides through the island\'s most exciting trails.',
                                url: "https://www.cozumel-atv-adventures.com/"
                            },
                            {
                                image: image54,
                                title: 'Jungle Trail Center',
                                description: 'Explore the island\'s natural beauty with guided tours through pristine jungle trails.',
                                url: "https://www.cozumel-jungle-tours.com/"
                            },
                            {
                                image: "https://imgs.search.brave.com/qlRw9ZTpj5tRJVhlYxtWFzgNHdwXBv3vCPdFTwwAoPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUy/YzU5NzRiZTRiMDQz/NDE3MGY5ZDIzZi8x/NTQxMjkxNjA4MjM2/LUZCQUsyVFExNjhT/QlQ1WFRZTUw5L0Rp/c25leXMtQmVhY2gt/Q2x1Yi1LaWRzLVBv/b2wtYW5kLVNsaWRl/LWNvbXByZXNzb3Iu/anBn",
                                title: 'Beach Adventure Club',
                                description: 'Combine ATV adventure with beach relaxation and water activities.',
                                url: "https://www.cozumel-beach-adventures.com/"
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

export default CozumelATVAdventure; 