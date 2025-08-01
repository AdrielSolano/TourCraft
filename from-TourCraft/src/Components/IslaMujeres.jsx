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
import img41 from '../assets/img41.png';
import img44 from '../assets/img44.png';
import img48 from '../assets/img48.png';
import img52 from '../assets/img52.png';
import isla from '../assets/isla.jpg';
import islaMujeres from '../assets/isla-mujeres.jpg';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import lg3 from '../assets/lg3.png';
import lg4 from '../assets/lg4.png';
import Rectangle16 from '../assets/Rectangle16.png';
import Rectangle161 from '../assets/Rectangle161.png';
import Rectangle162 from '../assets/Rectangle162.png';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";

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

const IslaMujeres = () => {
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
        const idZona = "688bd630f77e1f6903e19c73";
        axios.get(`http://localhost:3000/api/zonas-turisticas/${idZona}`)
            .then(res => setZona(res.data.data))
            .catch(err => console.error("Error al obtener zona turística", err));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/Cancun" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image="https://imgs.search.brave.com/6IPdNZaJ5VtBCXJ2cGU6bubqMcZqNkl0tIdnUxhQ6xI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kbGVp/c3VyZS5jb20vdGht/Yi9RbXliREFpdm5h/T0w1b1ZzcEF5QkQt/ekVUZEE9LzE1MDB4/MC9maWx0ZXJzOm5v/X3Vwc2NhbGUoKTpt/YXhfYnl0ZXMoMTUw/MDAwKTpzdHJpcF9p/Y2MoKS9UQUwtaXNs/YS1tdWplcmVzLXN1/bnNldC1JU0xBTVVK/RVJFUzA3MjMtZGNm/MmEwZjkwNWM2NGZm/Yzk5MjdiMzE5MDkx/MDE1YmMuanBn"
                                    alt="Isla Mujeres main view"
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.021329480135!2d-86.77303488462958!3d21.25991058629522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5a8b8b8b8b8%3A0x8f4e5a8b8b8b8b8!2sIsla%20Mujeres%2C%20Quintana%20Roo!5e0!3m2!1ses-419!2smx!4v1690412072934!5m2!1ses-419!2smx"
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
                                        { icon: Paid, text: 'Entry Fees: $45 per person' },
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
                                    Isla Mujeres
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#7bbcb0', mb: 3, fontFamily: "Playfair Display" }}>
                                    From $750
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
                                    fullWidth
                                    sx={{
                                        bgcolor: '#7bbcb0',
                                        color: 'white',
                                        py: 2,
                                        fontFamily: "Playfair Display",
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#6aa99d'
                                        }
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default IslaMujeres; 