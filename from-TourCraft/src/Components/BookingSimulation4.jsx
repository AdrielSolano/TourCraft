import { Link as RouterLink } from "react-router-dom";
import AccessTime from "@mui/icons-material/AccessTime";
import ArrowForward from "@mui/icons-material/ArrowForward";
import CalendarToday from "@mui/icons-material/CalendarToday";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Email from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import Twitter from "@mui/icons-material/Twitter";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import img from '../assets/img.png';
import img41 from '../assets/img41.png';
import Rectangle16 from '../assets/Rectangle16.png';
import Rectangle161 from '../assets/Rectangle161.png';
import Rectangle162 from '../assets/Rectangle162.png';
import Rectangle39 from '../assets/Rectangle39.png';
import chi1 from '../assets/chi1.svg';
import chi2 from '../assets/chi2.svg';

// Data for tickets
const ticketData = [
    {
        id: 1,
        image: img,
        name: "Chichen-Itza",
        date: "FRI, 23 DEC 2022",
        time: "15:00",
        paymentMethod: "Paypal",
        paymentIcon: "https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png",
        price: "$86.00",
        status: "Upcoming",
        statusIcon: chi1,
    },
    {
        id: 2,
        image: Rectangle39,
        name: "Samantha Donovan",
        date: "FRI, 23 DEC 2022",
        time: "15:00",
        paymentMethod: "Credit Card",
        paymentIcon: "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
        price: "$86.00",
        status: "Ended",
        statusIcon: chi2,
    },
];

// Data for restaurants - ahora con tipo de enlace (internal/external)
const restaurantData = [
    {
        id: 1,
        image: Rectangle16,
        name: "Taco Maya By Oxtun",
        description: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
        linkType: "external",
        url: "https://tacomaya.com/"
    },
    {
        id: 2,
        image: Rectangle161,
        name: "Las Mestizas Comida",
        description: "Visiting the 5 Terre is a must, and you can never go there enough ...",
        linkType: "external",
        url: "https://carta.menu/restaurants/piste/las-mestizas-comida-yucateca.com" // Cambiado de path a url
    },
    {
        id: 3,
        image: Rectangle162,
        name: "Doctorcito",
        description: "Visit the beautiful Siena and the cities that surround it to experience ...",
        linkType: "external",
        url: "https://www.mariscoseldoctorcito.com/" // Cambiado de path a url
    },
];


export const BookingSimulation4 = () => {
    return (
        <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
            {/* Success Message */}
            <Stack alignItems="center" spacing={4} sx={{ py: 8 }}>
                <CheckCircle sx={{ fontSize: 100, color: "#80b9ad" }} />

                <Stack alignItems="center" spacing={2}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" fontFamily= 'Playfair Display'>
                        Your reservation is complete!
                    </Typography>

                    <Typography variant="h6" textAlign="center" color="text.secondary" fontFamily= 'Playfair Display'>
                        You will be receiving a confirmation email with order details.
                    </Typography>
                </Stack>
            </Stack>

            {/* My Tickets Section */}
            <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }} fontFamily= 'Playfair Display'>
                    My Tickets
                </Typography>

                <TableContainer sx={{ border: 1, borderColor: "divider", borderRadius: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TableCell sx={{ fontWeight: "bold", fontSize: "1.25rem", opacity: 0.6, fontFamily: 'Playfair Display' }}>
                                    Tour Name
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.25rem", opacity: 0.6, fontFamily: 'Playfair Display' }}>
                                    Payment Method
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.25rem", opacity: 0.6, fontFamily: 'Playfair Display' }}>
                                    Price
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.25rem", opacity: 0.6, fontFamily: 'Playfair Display' }}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ticketData.map((ticket) => (
                                <TableRow
                                    key={ticket.id}
                                    sx={{
                                        borderBottom: ticket.id === ticketData.length ? 0 : 1,
                                        borderColor: "divider",
                                    }}
                                >
                                    <TableCell>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Box
                                                component="img"
                                                src={ticket.image}
                                                alt={ticket.name}
                                                sx={{
                                                    width: 160,
                                                    height: 110,
                                                    borderRadius: 1,
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <Stack spacing={1.5}>
                                                <Typography variant="h6" fontFamily= 'Playfair Display' fontWeight="bold">
                                                    {ticket.name}
                                                </Typography>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <CalendarToday sx={{ fontSize: 20, color: "#80b9ad" }} />
                                                    <Typography variant="body1" fontFamily= 'Inter' fontWeight="medium">
                                                        {ticket.date}
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <AccessTime sx={{ fontSize: 20, color: "#80b9ad" }} />
                                                    <Typography variant="body1" fontFamily= 'Inter' fontWeight="medium">
                                                        {ticket.time}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                            <Box
                                                sx={{
                                                    width: 42,
                                                    height: 30,
                                                    bgcolor: "white",
                                                    border: 1,
                                                    borderColor: "divider",
                                                    borderRadius: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={ticket.paymentIcon}
                                                    alt={ticket.paymentMethod}
                                                    sx={{ maxWidth: "100%", maxHeight: "100%" }}
                                                />
                                            </Box>
                                            <Typography variant="body1" fontFamily= 'Playfair Display' fontWeight="medium">
                                                {ticket.paymentMethod}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body1" fontFamily= 'Inter'fontWeight="medium">
                                            {ticket.price}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                            <Box
                                                component="img"
                                                src={ticket.statusIcon}
                                                alt={ticket.status}
                                                sx={{ width: 24, height: 24 }}
                                            />
                                            <Typography variant="body1" fontFamily= 'Playfair Display' fontWeight="medium">
                                                {ticket.status}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ mt: 2,fontFamily: 'Playfair Display' }}>
                    Samantha will contact you via gmail and help you with your questions.
                </Typography>
            </Box>

            <Divider sx={{ mx: { xs: 2, md: 10 } }} />

            {/* Popular Local Restaurants */}
            <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 6, fontFamily: 'Playfair Display', marginTop: '50px',
                        marginBottom: '130px', }}>
                    Popular Local Restaurants
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {restaurantData.map((restaurant) => (
                        <Grid item xs={12} md={4} key={restaurant.id}>
                            <Card sx={{ maxWidth: 400, mx: "auto" }}>
                                <CardMedia
                                    component="img"
                                    height="404"
                                    image={restaurant.image}
                                    alt={restaurant.name}
                                />
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack spacing={1}>
                                            <Typography variant="h5" fontFamily= 'Playfair Display' fontWeight="bold" textAlign="center">
                                                {restaurant.name}
                                            </Typography>
                                            <Typography variant="body1"  fontFamily= 'Playfair Display' color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                {restaurant.description}
                                            </Typography>
                                        </Stack>

                                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                            {restaurant.linkType === "external" ? (
                                                // Botón para enlace externo
                                                <Button
                                                    href={restaurant.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="text"
                                                    sx={{
                                                        color: "#80b9ad",
                                                        fontFamily: 'Inter',
                                                        fontWeight: "medium",
                                                        fontSize: "1.125rem",
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    See More
                                                </Button>
                                            ) : (
                                                // Botón para enlace interno
                                                <Button
                                                    component={RouterLink}
                                                    to={restaurant.url}
                                                    variant="text"
                                                    sx={{
                                                        color: "#80b9ad",
                                                        fontWeight: "medium",
                                                        fontFamily: 'Inter',
                                                        fontSize: "1.125rem",
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    See More
                                                </Button>
                                            )}
                                            <ArrowForward sx={{ color: "#80b9ad", fontSize: 20, }} />
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Advertisement Banner */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
                <Box
                    component="img"
                    src={img41}
                    alt="Car rental service advertisement"
                    sx={{ maxWidth: "100%", height: "auto", marginTop: '80px',
                        marginBottom: '180px',
                        borderRadius: 2, }}
                />
            </Box>
        </Box>
    );
};

export default BookingSimulation4;