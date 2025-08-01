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
    DirectionsWalk,
    Groups,
    Paid,
    DirectionsBus,
    Schedule,
    Water
} from '@mui/icons-material';
// Importar imágenes para Cenote Yalahau
import img from '../assets/cenoteya.jpeg';
import th1 from '../assets/cenoteya.jpeg';
import th2 from '../assets/cenoteya.jpeg';
import th3 from '../assets/cenoteya.jpeg';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import Rectangle16 from '../assets/negocio.jpg';
import Rectangle161 from '../assets/negocio.jpg';
import Rectangle162 from '../assets/negocio.jpg';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";

const iconMap = {
    "Nature & Adventure": Explore,
    "Cenote Tours": Water,
    "Eco Tours": DirectionsWalk,
    "Swimming Spots": DirectionsBus,
};

const texts = [
    "Pickup at your hotel or main pier in Holbox (15 minutes)",
    "Scenic boat ride through mangroves (30 minutes)",
    "Arrival at Cenote Yalahau - Safety briefing (15 minutes)",
    "Swimming in the crystal-clear freshwater (1.5 hours)",
    "Exploration of the cenote's unique rock formations (45 minutes)",
    "Picnic lunch with local flavors (1 hour)",
    "Optional cliff jumping (30 minutes)",
    "Relaxation time on the wooden deck (45 minutes)",
    "Return boat ride to Holbox (30 minutes)"
];

const CenoteYalahau = () => {
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
        const idZona = "687c7886b73df4ffa42a9a4b"; // ID para Holbox
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
                                    image={img}
                                    alt="Cenote Yalahau in Holbox"
                                    sx={{
                                        borderRadius: '12px',
                                        mb: 2.25,
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <Grid container spacing={2.25}>
                                    {[th1, th2, th3].map((img, index) => (
                                        <Grid item xs={4} key={index}>
                                            <CardMedia
                                                component="img"
                                                image={img}
                                                alt={`Cenote Yalahau thumbnail ${index + 1}`}
                                                sx={{
                                                    borderRadius: '12px',
                                                    width: '100%',
                                                    height: 'auto'
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2.5, fontFamily: "Playfair Display" }}>
                                    Details
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: '30px', mb: 2, fontFamily: "Playfair Display" }}>
                                    {zona ? zona.descripción : 'Cenote Yalahau is a breathtaking freshwater sinkhole known as the "Blue Eye" for its deep azure center. This natural wonder features crystal-clear waters perfect for swimming, surrounded by lush mangroves and a small island with a viewpoint. According to local legend, pirates once stopped here to replenish their freshwater supplies. The cenote\'s unique geological formations and refreshing waters (significantly cooler than the ocean) make it a perfect escape from the Caribbean heat. The site maintains its natural beauty with minimal infrastructure, offering an authentic ecological experience.'}
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.305536558807!2d-87.40841932461191!3d21.456524980302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4d8d335f625589%3A0x7b84ac96421ee6ec!2sHoyo%20negro%20Yalahau!5e0!3m2!1ses-419!2smx!4v1754045345788!5m2!1ses-419!2smx">
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    </iframe>
                                </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Group size: 6-12 people' },
                                        { icon: Schedule, text: 'Duration: 5-6 hours' },
                                        { icon: Paid, text: 'Price: $65-$85 per person' },
                                        { icon: DirectionsBus, text: 'Includes: Boat, guide, equipment, lunch' }
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
                                    Cenote Yalahau Tour
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.8, fontFamily: "Playfair Display" }}>
                                    from
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#80b9ad', fontFamily: "Inter" }}>
                                    $65
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
                                Book Tour
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
                        Nearby places in Holbox
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: Rectangle16,
                                title: 'Punta Mosquito',
                                description: 'A stunning natural sandbar with shallow turquoise waters, home to flamingos and other wildlife...',
                                url: "https://www.holboxisland.com/punta-mosquito/"
                            },
                            {
                                image: Rectangle161,
                                title: 'Yalahau Lagoon',
                                description: 'A beautiful freshwater lagoon with a cenote-like spring, perfect for swimming and relaxing...',
                                url: "https://www.holboxisland.com/yalahau-lagoon/"
                            },
                            {
                                image: Rectangle162,
                                title: 'Punta Cocos Beach',
                                description: 'A pristine beach on the western tip of Holbox, known for its crystal-clear waters and stunning sunsets...',
                                url: "https://www.tripadvisor.com/Attraction_Review-g150812-d8827886-Reviews-Punta_Cocos-Holbox_Island_Yucatan_Peninsula.html"
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
                        See What Travelers Are Saying About Cenote Yalahau
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                        {[
                            {
                                image: lg1,
                                name: 'Carlos Mendoza',
                                location: 'Merida, Mexico',
                                comment:
                                    "The cenote was absolutely magical! The water was so clear and refreshing compared to the ocean. We loved jumping from the small cliffs and exploring the rock formations. Our guide knew so much about the geology and history of the area.",
                            },
                            {
                                image: lg2,
                                name: 'Sophie Laurent',
                                location: 'Paris, France',
                                comment:
                                    "A perfect escape from the beach! Cenote Yalahau offered such a unique swimming experience. The freshwater was incredibly pure and the surrounding nature was breathtaking. The included lunch was delicious with fresh local ingredients.",
                            },
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

export default CenoteYalahau;