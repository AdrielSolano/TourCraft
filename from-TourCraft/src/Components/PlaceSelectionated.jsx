import React, { useEffect, useRef } from 'react';
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
import {
    ArrowBack,
    ChevronRight,
    CardTravel,
    Explore,
    LocalTaxi,
    DirectionsWalk,
    Pets,
    AccessTime,
    Groups,
    Paid,
    DirectionsBus,
    Room,
    Schedule,
    PhotoCamera,
    ShoppingCart,
    Restaurant,
    DirectionsCar,
    BeachAccess
} from '@mui/icons-material';
import img from '../assets/img.png';
import th1 from '../assets/th1.png';
import th2 from '../assets/th2.png';
import th3 from '../assets/th3.png';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import lg3 from '../assets/lg3.png';
import lg4 from '../assets/lg4.png';
import Rectangle16 from '../assets/Rectangle16.png';
import Rectangle161 from '../assets/Rectangle161.png';
import Rectangle162 from '../assets/Rectangle162.png';
import { Link as RouterLink } from 'react-router-dom';

const tourCategories = [
    { label: "Business Tours", color: "#fb3131", icon: CardTravel },
    { label: "Nature & Adventure", color: "#7bbcb0", icon: Explore },
    { label: "Transportation", color: "#e4b613", icon: LocalTaxi },
    { label: "Local Visit", color: "#5b9bde", icon: DirectionsWalk },
    { label: "Pet Friendly", color: "#d175e0", icon: DirectionsBus },
];

const PlacesSelectionated = () => {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        const scrollContainer = testimonialsRef.current;
        let scrollAmount = 0;
        const scrollSpeed = 1;

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += scrollSpeed;
                scrollContainer.scrollLeft = scrollAmount;

                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0;
                }
            }
        };

        const scrollInterval = setInterval(scroll, 50);
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <Box sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
            {/* Tour Details Section */}
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Link href="/Merida" underline="none" color='black' sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                    <ArrowBack />
                    <Typography variant="body1" color='black' sx={{ fontWeight: 600 }}>Back</Typography>
                </Link>

                <Grid container spacing={6}>
                    {/* Left Column - Gallery and Details */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            {/* Image Gallery */}
                            <Box>
                                <CardMedia
                                    component="img"
                                    image={img}
                                    alt="Chichen-Itza main view"
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
                                                alt={`Thumbnail ${index + 1}`}
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

                            {/* Details Content */}
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2.5, fontFamily: "'Playfair Display', serif" }}>
                                    Details
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: '30px', mb: 2, fontFamily: "'Inter', sans-serif" }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                                    <Link href="#" underline="always" sx={{ ml: 0.5, color: 'inherit', fontWeight: 500 }}>
                                        Go web
                                    </Link>
                                </Typography>
                            </Box>

                            {/* Map */}
                            <Box>
                                <CardMedia
                                    component="img"
                                    image="/page/7ca26edb-a1c2-4db6-bd42-de0ffb59f5df/images/10814df8dfdb848291d7af1e2c2c5f7d2a0e505e.png"
                                    alt="Map of Chichen-Itza area"
                                    sx={{
                                        borderRadius: '25px',
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </Box>

                            {/* Tour Specifics */}
                            <Box>
                                <List>
                                    {[
                                        { icon: Groups, text: 'Number of group: 1-6' },
                                        { icon: Schedule, text: 'Duration: Depends' },
                                        { icon: Paid, text: 'Entry Fees: 25$ per person' },
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
                                                    fontFamily: "'Inter', sans-serif"
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Tour Info */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontFamily: "'Playfair Display', serif" }}>
                                    Chichen-Itza
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.6, lineHeight: '26px', fontFamily: "'Inter', sans-serif" }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </Typography>
                            </Box>

                            {/* Price */}
                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.8, fontFamily: "'Open Sans', sans-serif" }}>
                                    from
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#80b9ad', fontFamily: "'Playfair Display', serif" }}>
                                    34 $
                                </Typography>
                            </Box>

                            {/* Tags */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                {tourCategories.map(({ label, icon: Icon, color }) => (
                                    <Chip
                                        key={label}
                                        icon={<Icon sx={{ color }} />}
                                        label={label}
                                        sx={{ backgroundColor: "#fff", color, fontWeight: 700, border: "none", boxShadow: 1 }}
                                    />
                                ))}
                            </Box>

                            {/* Select Place Button */}
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

                            {/* Itinerary */}
                            <Box sx={{ position: 'relative' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3.75, fontFamily: "'Playfair Display', serif" }}>
                                    Experience (Itinerary)
                                </Typography>

                                {/* Timeline */}
                                <Box sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '70px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1.25
                                }}>
                                    {[
                                        Room, // Pickup location
                                        DirectionsCar, // Van
                                        PhotoCamera, // Photo stop
                                        DirectionsCar, // Van
                                        BeachAccess, // Cenote
                                        DirectionsCar, // Van
                                        ShoppingCart, // Shopping
                                        DirectionsCar, // Van
                                        Room // Drop-off
                                    ].map((Icon, index) => (
                                        <Icon key={index} sx={{ color: '#80b9ad', fontSize: 24 }} />
                                    ))}
                                </Box>

                                {/* Itinerary Text */}
                                <Box sx={{ pl: 5, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    {[
                                        "3 pickup location options: Parque de Santa Ana, Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana. See more",
                                        "Van (2 hours)",
                                        "Chichén Itzá - Photo stop, Visit, Guided tour, Free time, Shopping (2.5 hours)",
                                        "Van (15 minutes)",
                                        "Cenote Ik Kil - Lunch, Swimming (2.5 hours)",
                                        "Van (1 hour)",
                                        "Izamal - Photo stop, Visit, Guided tour, Free time, Shopping (1.5 hours)",
                                        "Van (1 hour)",
                                        "3 drop-off locations: Viajes Colibrí Yucatán TOURS, Entrada Avenida Cupules del Hotel Fiesta Americana, Parque de Santa Ana"
                                    ].map((text, index) => (
                                        <Typography key={index} variant="body1" sx={{ fontFamily: "'Inter', sans-serif" }}>
                                            {text.split(':')[0] && <strong>{text.split(':')[0]}:</strong>}
                                            {text.split(':')[1] && <span>{text.split(':')[1]}</span>}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Nearby Places Section */}
            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" sx={{ fontWeight: 700, mb: 7.5, fontFamily: "'Playfair Display', serif" }}>
                        Nearby places in Chichen-itza
                    </Typography>

                    <Grid container spacing={5}>
                        {[
                            {
                                image: Rectangle16,
                                title: 'Taco Maya By Oxtun',
                                description: 'The real magic is here where you can enjoy the best Tuscan wine and eat...',
                                url: "https://tacomaya.com/"
                            },
                            {
                                image: Rectangle161,
                                title: 'Las Mestizas Comida',
                                description: 'Visiting the 5 Terre is a must, and you can never go there enough...',
                                url: "https://carta.menu/restaurants/piste/las-mestizas-comida-yucateca.com"
                            },
                            {
                                image: Rectangle162,
                                title: 'Doctorcito',
                                description: 'Visit the beautiful Siena and the cities that surround it to experience...',
                                url: "https://www.mariscoseldoctorcito.com/"
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
                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, fontFamily: "'Open Sans', sans-serif" }}>
                                            {place.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3.125, fontFamily: "'Inter', sans-serif" }}>
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
                                                fontFamily: "'Inter', sans-serif"
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

            {/* Testimonials Section */}
            <Box sx={{ py: 7.5, borderTop: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ fontWeight: 400, mb: 4, fontFamily: "'Playfair Display', serif" }}>
                        See what travelers are saying about Chichen-Itza
                    </Typography>

                    <Box
                        ref={testimonialsRef}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            pb: 3
                        }}
                    >
                        {[
                            { image: lg1, name: 'Lorena Calderon', location: 'Mexico City, Mexico' },
                            { image: lg2, name: 'Isabel Garcia', location: 'Ibiza, Spain' },
                            { image: lg3, name: 'David Fraga', location: 'Nevada, USA' },
                            { image: lg4, name: 'Jesus Gallegos', location: 'Lima, Peru' },
                            { image: lg2, name: 'Lorena Calderon', location: 'Mexico City, Mexico' },
                            { image: lg4, name: 'Isabel Garcia', location: 'Ibiza, Spain' }
                        ].map((testimonial, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    p: 3,
                                    border: '1px solid #2f2b36',
                                    borderRadius: '10px',
                                    minWidth: 300,
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 2.5
                                }}
                            >
                                <Typography variant="body2" sx={{ lineHeight: '22.5px', fontFamily: "'Inter', sans-serif" }}>
                                    "Use this space to share a testimonial quote about the business, its products or its services..."
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Avatar src={testimonial.image} sx={{ width: 60, height: 60, borderRadius: '50%' }} />
                                    <Box>
                                        <Typography variant="body2" sx={{ fontFamily: "'Inter', sans-serif" }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>
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

export default PlacesSelectionated;