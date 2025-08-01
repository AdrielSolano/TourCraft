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
    "Xcaret Park - Photo stop, Visit, Guided tour, Free time, Shopping (2.5 hours)",
    "Van (15 minutes)",
    "Underground Rivers - Lunch, Swimming (2.5 hours)",
    "Van (1 hour)",
    "Cultural Exhibitions - Photo stop, Visit, Guided tour, Free time (1.5 hours)",
    "Van (1 hour)",
    "3 drop-off locations: Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana, Parque de Santa Ana"
];

const XcaretPark = () => {
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
        const idZona = "688bd6f9f77e1f6903e19c78";
        axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
            .then(res => setZona(res.data.data))
            .catch(err => console.error("Error al obtener zona turística", err));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/PlayadelCarmen" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image="https://imgs.search.brave.com/Eqbsmp1puSb7zC4wzKtvyMvvroZX7pr5RsmxfzybkRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/Mi8yOS8wNi80Ni94/Y2FyZXQtMTIyODE4/Ml82NDAuanBn"
                                    alt="Xcaret Park main view"
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.91648497456!2d-87.1222729!3d20.5809184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sParque%20Xcaret!5e0!3m2!1ses!2smx!4v1712345678901"
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
                                        { icon: Schedule, text: 'Duration: Full day' },
                                        { icon: Paid, text: 'Entry Fees: $120 per person' },
                                        { icon: DirectionsBus, text: 'Transportation: Includes' }
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
                                    Xcaret Park
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.8, fontFamily: "Playfair Display" }}>
                                    from
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#80b9ad', fontFamily: "Inter" }}>
                                    120 $
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
                        Nearby places in Xcaret Park
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: lolaValentina,
                                title: 'Xcaret Restaurant',
                                description: 'Fine dining restaurant within the park with traditional Mexican cuisine and spectacular views of the Caribbean Sea.',
                                url: "https://www.xcaret.com/restaurants"
                            },
                            {
                                image: laCasaDeLasMayoras,
                                title: 'La Hacienda',
                                description: 'Authentic Mexican hacienda-style restaurant with regional specialties and live mariachi music.',
                                url: "https://www.xcaret.com/la-hacienda"
                            },
                            {
                                image: laRosaNegra,
                                title: 'Cenote Grill',
                                description: 'Open-air grill restaurant near natural cenotes with fresh seafood and traditional Mayan dishes.',
                                url: "https://www.xcaret.com/cenote-grill"
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

            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden', marginBottom: '100px' }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            justifyContent: 'center',
                            fontWeight: 400,
                            mb: 4,
                            fontFamily: 'Playfair Display',
                            textAlign: 'center',
                        }}
                    >
                        See What Travelers Are Saying About Xcaret Park
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                        {[
                            {
                                image: "https://randomuser.me/api/portraits/women/45.jpg",
                                name: 'Sofia Martinez',
                                location: 'Barcelona, Spain',
                                comment: "Xcaret Park is a magical place where nature and culture come together. The underground rivers were breathtaking and the night show is absolutely spectacular!"
                            },
                            {
                                image: "https://randomuser.me/api/portraits/men/33.jpg",
                                name: 'Michael Johnson',
                                location: 'Toronto, Canada',
                                comment: "One of the best eco-parks I've ever visited. The combination of natural beauty, wildlife, and cultural experiences makes it perfect for families and solo travelers alike."
                            }
                        ].map((testimonial, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    p: 3,
                                    border: '1px solid #2f2b36',
                                    borderRadius: '10px',
                                    minWidth: '45%',
                                    flexGrow: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 2.5,
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{ lineHeight: '22.5px', fontFamily: 'Playfair Display' }}
                                >
                                    "{testimonial.comment}"
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Avatar
                                        src={testimonial.image}
                                        sx={{ width: 60, height: 60, borderRadius: '50%' }}
                                    />
                                    <Box>
                                        <Typography variant="body2" sx={{ fontFamily: 'Playfair Display' }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontSize: '14px', fontFamily: 'Playfair Display' }}
                                        >
                                            {testimonial.location}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default XcaretPark;