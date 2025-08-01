// Imports
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Link,
    Rating,
    Stack,
    Typography,
    Menu,
    MenuItem,
    TextField,
    Popover,
    IconButton
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addDays } from 'date-fns';

import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// Images
import image38 from "../assets/image38.png";
import img from "../assets/img.png";
import img11 from "../assets/img11.png";
import img22 from "../assets/img22.png";
import img33 from "../assets/img33.png";
import img34 from "../assets/img34.png";
import img44 from "../assets/img44.png";
import movistar from "../assets/movistar.png";
import card10 from "../assets/Card10.png";
import card11 from "../assets/Card11.png";
import card13 from "../assets/Card13.png";
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";
import i3 from "../assets/i3.jpg";
import i1 from "../assets/i1.jpg";
import alux from "../assets/alux.jpg";
import harris from "../assets/harris.jpg";
import rolandi from "../assets/rolandi.jpg";
import hard from "../assets/hard.jpg";
// Images for places
import cancun from "../assets/cancun.jpeg";
import tulum from "../assets/tulum.webp";
import holbox from "../assets/holbox.webp";
import cozumel from "../assets/cozumel.jpg";
import merida from "../assets/UX1.jpg";
import playadelcarmen from "../assets/UX2.jpeg";
// Images for tours
import xcaret from "../assets/xcaret.jpg";
import coba from "../assets/coba.jpg";
import whaleSharkTour from "../assets/whale-shark-tour.jpg";
import muyil from "../assets/muyil.jpeg";
import ux1 from "../assets/UX1.jpg";
import xplor from "../assets/xplor.png";

// Data
const tourData = [
    {
        title: "Chichen-Itza, Merida",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 34,
        originalPrice: null,
        discount: null,
        image: img,
        route: "/PlaceSelectionated",
    },
    {
        title: "Whale Shark Adventure",
        rating: 5,
        reviews: 1,
        duration: "Full day",
        price: 150,
        originalPrice: null,
        discount: null,
        image: whaleSharkTour,
        route: "/WhaleSharkTour",
    },
    {
        title: "Sian Ka'an Biosphere Reserve",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 120,
        originalPrice: null,
        discount: null,
        image: muyil,
        route: "/SianKaan",
    },
    {
        title: "Xcaret Park Adventure",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 120,
        originalPrice: null,
        discount: null,
        image: xcaret,
        route: "/XcaretPark",
    },
    {
        title: "Tulum Ruins Tour",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 65,
        originalPrice: null,
        discount: null,
        image: coba,
        route: "/TulumRuinsTour",
    },
    {
        title: "Uxmal Archaeological Site",
        rating: 5,
        reviews: 1,
        duration: "1 day",
        price: 34,
        originalPrice: null,
        discount: null,
        image: ux1,
        route: "/PlaceSelectionated2",
    },
];

const placesData = [
    { image: cancun, name: "Cancun", route: "/Cancun" },
    { image: tulum, name: "Tulum", route: "/Tulum" },
    { image: playadelcarmen, name: "Playa del Carmen", route: "/PlayadelCarmen" },
    { image: holbox, name: "Holbox", route: "/Holbox" },
    { image: cozumel, name: "Cozumel", route: "/Cozumel" },
    { image: merida, name: "Merida", route: "/Merida" },
];

const restaurantData = [
    {
        title: "La Chaya Maya - Mérida",
        image: i1,
        url: "https://lachayamaya.com/",
        description: "Auténtica cocina yucateca en ambiente tradicional"
    },
    {
        title: "Porfirio's - Mérida",
        image: i3,
        url: "https://porfirios.com.mx/",
        description: "Gastronomía mexicana contemporánea"
    },
    {
        title: "Alux - Playa del Carmen",
        image: alux,
        url: "https://aluxrestaurant.com/",
        description: "Restaurante en una cueva natural"
    },
    {
        title: "Harry's - Cancún",
        image: harris,
        url: "https://harrys.com.mx/",
        description: "Carnes premium y mariscos frescos"
    },
    {
        title: "Hartwood - Tulum",
        image: hard,
        url: "https://www.hartwoodtulum.com/",
        description: "Cocina de autor con ingredientes locales y técnicas al fuego"
    },
    {
        title: "Casa Rolandi - Isla Mujeres",
        image: rolandi,
        url: "https://casarolandi.com/",
        description: "Cocina italiana con toques mexicanos"
    }
];

// Main component
export const Tours = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [guests, setGuests] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [dateAnchorEl, setDateAnchorEl] = useState(null);
    const [guestAnchorEl, setGuestAnchorEl] = useState(null);
    const navigate = useNavigate();

    const locations = ["Merida", "Cancun", "Tulum", "Playa del Carmen", "Holbox", "Cozumel"];

    const handleLocationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setAnchorEl(null);
    };

    const handleDateClick = (event) => {
        setDateAnchorEl(event.currentTarget);
    };

    const handleGuestClick = (event) => {
        setGuestAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setDateAnchorEl(null);
        setGuestAnchorEl(null);
    };

    const handleSearch = () => {
        if (selectedLocation === "Merida") {
            navigate("/Merida");
        } else if (selectedLocation === "Cancun") {
            navigate("/Cancun");
        } else if (selectedLocation === "Tulum") {
            navigate("/Tulum");
        }
        else if (selectedLocation === "Playa del Carmen") {
            navigate("/PlayadelCarmen");
        } else if (selectedLocation === "Holbox") {
            navigate("/Holbox");
        }
        else if (selectedLocation === "Cozumel") {
            navigate("/Cozumel");
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setDateAnchorEl(null);
    };

    const handleGuestChange = (value) => {
        setGuests(Math.max(1, value));
    };

    return (
        <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Container maxWidth="xl" sx={{ px: { xs: 2, md: 15 }, py: 8 }}>
                    <Box
                        sx={{
                            position: "relative",
                            height: 392,
                            backgroundImage: `url(${image38})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 2,
                            mb: 8,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",

                                    fontFamily: "Playfair Display",
                                    textAlign: "center",
                                    mb: 2,
                                }}
                            >
                                Select where you want to travel
                            </Typography>
                        </Box>

                        <Card
                            sx={{
                                position: "absolute",
                                bottom: -51,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "90%",
                                maxWidth: 1062,
                                p: 3,
                                borderRadius: "20px",
                                boxShadow: "0px 3px 20px rgba(0,0,0,0.08)",
                                display: "flex",
                            }}
                        >
                            <Stack direction="row" spacing={4} alignItems="center">
                                <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
                                    {/* Location */}
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        onClick={handleLocationClick}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <LocationOnIcon sx={{ color: "#80b9ad" }} />
                                        <Box>
                                            <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold", fontFamily: "Playfair Display" }}>
                                                Location
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.4, fontFamily: "Playfair Display" }}>
                                                {selectedLocation || "Where are you going?"}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        {locations.map((location) => (
                                            <MenuItem
                                                key={location}
                                                onClick={() => handleLocationSelect(location)}
                                                selected={location === selectedLocation}
                                            >
                                                {location}
                                            </MenuItem>
                                        ))}
                                    </Menu>

                                    {/* Date */}
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        onClick={handleDateClick}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <CalendarTodayIcon sx={{ color: "#80b9ad" }} />
                                        <Box>
                                            <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold", fontFamily: "Playfair Display" }}>
                                                Date
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.4, fontFamily: "Playfair Display" }}>
                                                {selectedDate ? selectedDate.toLocaleDateString() : "Set date"}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                    <Popover
                                        open={Boolean(dateAnchorEl)}
                                        anchorEl={dateAnchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Box sx={{ p: 2 }}>
                                            <DatePicker
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                minDate={new Date()}
                                                maxDate={addDays(new Date(), 365)}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Box>
                                    </Popover>

                                    {/* Guests */}
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        onClick={handleGuestClick}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <PeopleIcon sx={{ color: "#80b9ad" }} />
                                        <Box>
                                            <Typography variant="h6" sx={{ color: "#80b9ad", fontWeight: "bold", fontFamily: "Playfair Display" }}>
                                                Guests
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.4, fontFamily: "Playfair Display" }}>
                                                {guests} guest{guests !== 1 ? 's' : ''}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                    <Popover
                                        open={Boolean(guestAnchorEl)}
                                        anchorEl={guestAnchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Box sx={{ p: 3, width: 200 }}>
                                            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Playfair Display" }}>
                                                Number of guests
                                            </Typography>
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <IconButton
                                                    onClick={() => handleGuestChange(guests - 1)}
                                                    disabled={guests <= 1}
                                                >
                                                    -
                                                </IconButton>
                                                <Typography sx={{ fontFamily: "Inter" }}>{guests}</Typography>
                                                <IconButton onClick={() => handleGuestChange(guests + 1)}>
                                                    +
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                    </Popover>
                                </Stack>

                                {/* Search */}
                                <Button
                                    variant="contained"
                                    startIcon={<SearchIcon />}
                                    sx={{
                                        bgcolor: "#80b9ad",
                                        borderRadius: 3,
                                        px: 3,
                                        py: 1.5,
                                        fontFamily: "Inter",
                                        "&:hover": {
                                            bgcolor: "#6ba89c",
                                        },
                                    }}
                                    onClick={handleSearch}
                                    disabled={!selectedLocation || !selectedDate}
                                >
                                    Search
                                </Button>
                            </Stack>
                        </Card>
                    </Box>

                    {/* Tours */}
                    <Stack spacing={8} marginBottom={'150px'}>
                        <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "black", fontFamily: "Playfair Display" }}>
                            Popular Tours
                        </Typography>

                        <Grid container spacing={3}>
                            {tourData.map((tour, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        onClick={() => navigate(tour.route)}
                                        sx={{
                                            height: 494,
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            boxShadow: "0px 3px 20px rgba(0,0,0,0.08)",
                                            position: "relative",
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: 260,
                                                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${tour.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                position: "relative",
                                            }}
                                        >
                                        </Box>
                                        <CardContent sx={{ p: 4 }}>
                                            <Stack spacing={3}>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Playfair Display" }}>
                                                    {tour.title}
                                                </Typography>

                                                <Stack direction="row" spacing={2} alignItems="center">
                                                    <Rating value={tour.rating} readOnly size="small" />
                                                    <Typography variant="body2" sx={{ opacity: 0.4, fontFamily: "Playfair Display" }}>
                                                        ({tour.reviews} Review)
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" spacing={2} alignItems="center">
                                                    <ScheduleIcon sx={{ fontSize: 24 }} />
                                                    <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>{tour.duration}</Typography>
                                                </Stack>

                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <Typography variant="body1" sx={{ opacity: 0.4, fontFamily: "Playfair Display" }}>
                                                        From
                                                    </Typography>
                                                    {tour.originalPrice && (
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ textDecoration: "line-through", color: "#999999", fontFamily: "Inter" }}
                                                        >
                                                            ${tour.originalPrice}
                                                        </Typography>
                                                    )}
                                                    <Typography variant="body1" sx={{ fontWeight: "bold", fontFamily: "Inter" }}>
                                                        ${tour.price}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>

                    {/* Separator image */}
                    <Box
                        sx={{
                            width: "100%",
                            height: 126,
                            backgroundImage: `url(${movistar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            my: 4,
                        }}
                    />

                    {/* Places */}
                    <Stack spacing={8} sx={{ py: 8 }}>
                        <Stack spacing={3} alignItems="center">
                            <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", fontFamily: "Playfair Display" }}>
                                Places
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ opacity: 0.6, maxWidth: 372, fontFamily: "Playfair Display" }}>
                                Discover amazing places in the Riviera Maya
                            </Typography>
                        </Stack>

                        <Grid container spacing={3}>
                            {placesData.map((place, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        onClick={() => navigate(place.route)}
                                        sx={{
                                            height: 248,
                                            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${place.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: "20px",
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            p: 3,
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{ color: "white", fontWeight: "bold", mb: 2, fontFamily: "Playfair Display" }}
                                        >
                                            {place.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    {/* Restaurants */}
                    <Stack spacing={6} sx={{ py: 6, marginBottom: '100px' }}>
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                fontFamily: "Playfair Display",
                                mb: 4
                            }}
                        >
                            Places you have to try!
                        </Typography>

                        <Box sx={{ px: { xs: 1, md: 4 }, mx: 'auto', maxWidth: '95%' }}>
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={3}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={2000}
                                responsive={[
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 1
                                        }
                                    },
                                    {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    }
                                ]}
                                centerPadding="20px"
                                slidesMargin={20}
                            >
                                {restaurantData.map((restaurant, index) => (
                                    <Box key={index} sx={{
                                        px: 2,
                                        py: 1,
                                        mr: index !== restaurantData.length - 1 ? 3 : 0
                                    }}>
                                        <Box
                                            sx={{
                                                height: 380,
                                                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${restaurant.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: 3,
                                                p: 4,
                                                boxShadow: 3,
                                                margin: '0 10px',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                align="center"
                                                sx={{
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontFamily: "Playfair Display",
                                                    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                                                    mb: 2,
                                                    fontSize: { xs: '1.5rem', md: '1.75rem' }
                                                }}
                                            >
                                                {restaurant.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                align="center"
                                                sx={{
                                                    color: "white",
                                                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                                                    mb: 3,
                                                    fontFamily: "Playfair Display",
                                                    px: 2
                                                }}
                                            >
                                                {restaurant.description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    bgcolor: "white",
                                                    color: "black",
                                                    px: 5,
                                                    py: 1.5,
                                                    borderRadius: 3,
                                                    fontFamily: "Inter",
                                                    fontWeight: "bold",
                                                    "&:hover": {
                                                        bgcolor: "rgba(255,255,255,0.9)",
                                                    },
                                                }}
                                                component={Link}
                                                href={restaurant.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Visit Website
                                            </Button>
                                        </Box>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Stack>
                </Container>
            </LocalizationProvider>
        </Box>
    );
};

export default Tours;