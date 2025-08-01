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
    Colorize
} from '@mui/icons-material';
// Import flamingo spotting images
import img from '../assets/fla.jpg';
import th1 from '../assets/fla.jpg';
import th2 from '../assets/fla.jpg';
import th3 from '../assets/fla.jpg';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import Rectangle16 from '../assets/negocio.jpg';
import Rectangle161 from '../assets/negocio.jpg';
import Rectangle162 from '../assets/negocio.jpg';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";

const iconMap = {
    "Wildlife Tours": Colorize,
    "Nature & Adventure": Explore,
    "Photography Tours": DirectionsWalk,
    "Eco Experiences": DirectionsBus,
};

const texts = [
    "Morning pickup at your hotel (7:00 AM)",
    "Boat ride to Punta Mosquito flamingo habitats (45 minutes)",
    "Guided flamingo observation session (2 hours) - Maintain safe distance",
    "Educational talk about flamingo behavior and conservation (30 minutes)",
    "Photography time with tripod setup (1 hour)",
    "Visit to secondary bird watching spots (1 hour)",
    "Light breakfast with local snacks (30 minutes)",
    "Return boat ride with scenic views (45 minutes)"
];

const FlamingoSpotting = () => {
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
        const idZona = "687c7886b73df4ffa42a9a4b"; // ID for Holbox
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
                                    alt="Flamingo spotting in Holbox"
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
                                                alt={`Flamingo spotting thumbnail ${index + 1}`}
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
                                    {zona ? zona.descripción : 'Holbox Island hosts one of Mexico\'s most spectacular flamingo colonies, with hundreds of Caribbean flamingos (Phoenicopterus ruber) feeding in the shallow waters of Punta Mosquito from April to October. Our eco-conscious tours provide exceptional viewing opportunities while maintaining a respectful distance. Expert guides share insights about flamingo behavior, feeding patterns, and conservation efforts. The tour includes high-quality binoculars and photography tips to capture these iconic pink birds in their natural habitat within the Yum Balam Biosphere Reserve.'}
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14861.37312075315!2d-87.3833127!3d21.5537173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aef653db%3A0x6901b5ab5a8b8a86!2sPunta%20Mosquito%20Flamingo%20Area%2C%20Holbox!5e0!3m2!1sen!2smx!4v1689594885847!5m2!1sen!2smx"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Box>
                            </Box>

                            <Box>
                                <List sx={{ width: '100%', bgcolor: 'transparent', padding: 0 }}>
                                    {[
                                        { icon: Groups, text: 'Group size: 6-10 people' },
                                        { icon: Schedule, text: 'Duration: 4-5 hours (best April-Oct)' },
                                        { icon: Paid, text: 'Price: $85-$110 per person' },
                                        { icon: DirectionsBus, text: 'Includes: Boat, guide, binoculars, snacks' }
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
                                    Flamingo Spotting Tour
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
                        Nearby Wildlife Spots in Holbox
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: Rectangle16,
                                title: 'Punta Cocos',
                                description: 'Secluded beach area frequented by migratory birds and occasional flamingos...',
                                url: "https://www.holboxisland.com/punta-cocos/"
                            },
                            {
                                image: Rectangle161,
                                title: 'Yalahau Lagoon',
                                description: 'Freshwater habitat attracting diverse bird species beyond flamingos...',
                                url: "https://www.holboxisland.com/yalahau-lagoon/"
                            },
                            {
                                image: Rectangle162,
                                title: 'Isla Pájaros',
                                description: 'Small island sanctuary with concentrated bird populations...',
                                url: "https://www.yumbalam.org/bird-island"
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
                        What Visitors Say About Our Flamingo Tours
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                        {[
                            {
                                image: lg1,
                                name: 'Isabel Fernández',
                                location: 'Madrid, Spain',
                                comment:
                                    "Seeing hundreds of flamingos in the wild exceeded all expectations! Our guide knew exactly where to find them without disturbing the colony. The provided telephoto lens rental let me capture professional-quality photos of these magnificent pink birds.",
                            },
                            {
                                image: lg2,
                                name: 'Michael Johnson',
                                location: 'Toronto, Canada',
                                comment:
                                    "A wildlife photographer's dream come true! The morning light on the flamingos' pink feathers created magical scenes. The guide's knowledge about their feeding behaviors helped us anticipate perfect photo opportunities while respecting their space.",
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

export default FlamingoSpotting;