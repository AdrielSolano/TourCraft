import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import img41 from "../assets/img41.png"; // Placeholder for logo image
import img from "../assets/img.png"; // Placeholder for car rental banner image
import { Link as RouterLink } from "react-router-dom";



// Data for pricing breakdown
const pricingItems = [
    { id: 1, label: "Tarifa de Servicio de Plataforma", price: "$xx.xx" },
    { id: 2, label: "Tarifa de Experiencia", price: "$xx.xx" },
    { id: 3, label: "Impuestos y Otros Cargos", price: "$xx.xx" },
    { id: 4, label: "Tarifa del Transporte (Opcional)", price: "$xx.xx" },
    { id: 5, label: "Tarifa del Guía", price: "$xxx.x" },
];



// Data for booking steps
const bookingSteps = [
    { step: 1, label: "Booking Details", active: true },
    { step: 2, label: "Your Details", active: false },
    { step: 3, label: "Payment", active: false },
];

export const BookingSimulation = () => {
    const [adultCount, setAdultCount] = useState(2);
    const [childCount, setChildCount] = useState(0);
    const [guideCount, setGuideCount] = useState(1);

    const handleCountChange = (type, operation) => {
        if (type === "adult") {
            setAdultCount((prev) =>
                operation === "add" ? prev + 1 : Math.max(0, prev - 1),
            );
        } else if (type === "child") {
            setChildCount((prev) =>
                operation === "add" ? prev + 1 : Math.max(0, prev - 1),
            );
        } else if (type === "guide") {
            setGuideCount((prev) =>
                operation === "add" ? prev + 1 : Math.max(0, prev - 1),
            );
        }
    };

    return (
        <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
           
            {/* Back Button and Title */}
            <Box sx={{ px: { xs: 2, md: 15 }, py: 2 }}>
                <Button
                    component={RouterLink}
                    to="/PlaceSelectionated"
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        color: "#000000",
                        fontWeight: 600,
                        fontFamily: "Inter",
                        fontSize: "18px",
                        mb: 2,
                    }}
                >
                    Back
                </Button>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: "48px",
                        color: "#000000",
                        fontFamily: "Playfair Display",
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    Let's make your reservation
                </Typography>
            </Box>

            {/* Progress Steps */}
            <Box sx={{ px: { xs: 2, md: 15 }, mb: 6 }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}
                >
                    {bookingSteps.map((step, index) => (
                        <Stack
                            key={step.step}
                            direction="row"
                            alignItems="center"
                            spacing={index < bookingSteps.length - 1 ? 4 : 0}
                        >
                            <Stack alignItems="center" spacing={1}>
                                <Avatar
                                    sx={{
                                        width: 37,
                                        height: 37,
                                        bgcolor: step.active ? "#80b9ad" : "#e0e0e0",
                                        color: step.active ? "#ffffff" : "#33333366",
                                        fontSize: "20px",
                                        fontWeight: 600,
                                    }}
                                >
                                    {step.step}
                                </Avatar>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: step.active ? 600 : 400,
                                        fontFamily: "Playfair Display",
                                        color: step.active ? "#80b9ad" : "rgba(0,0,0,0.4)",
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Stack>
                            {index < bookingSteps.length - 1 && (
                                <Box sx={{ width: 326, height: 4, bgcolor: "#e0e0e0" }} />
                            )}
                        </Stack>
                    ))}
                </Stack>
            </Box>

            {/* Main Content */}
            <Grid container spacing={4} sx={{ px: { xs: 2, md: 10 }, mb: 8 }}>
                {/* Left Side - Tickets Overview */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 3, border: "1px solid #33333333", p: 3 }}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: "24px",
                                    fontFamily: "Playfair Display",
                                    textAlign: "center",
                                    mb: 4,
                                }}
                            >
                                Your Tickets Overview
                            </Typography>

                            {/* Tour Details */}
                            <Stack spacing={2} sx={{ mb: 3 }}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{ pb: 2, borderBottom: "1px solid #e0e0e0" }}
                                >
                                    <Box
                                        component="img"
                                        src={img}
                                        alt="Chichen-Itza"
                                        sx={{ width: 160, height: 110, borderRadius: 1 }}
                                    />
                                    <Stack spacing={1.5}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, fontSize: "24px", fontFamily: "Playfair Display" }}
                                        >
                                            Chichen-Itza
                                        </Typography>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <CalendarTodayIcon sx={{ fontSize: 24, color: "#80b9ad" }} />
                                            <Typography
                                                variant="body1"
                                                sx={{ fontWeight: 600, fontSize: "18px", fontFamily: "Inter" }}
                                            >
                                                FRI, 23 DEC 2024
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <AccessTimeIcon sx={{ fontSize: 24, color: "#80b9ad" }} />
                                            <Typography
                                                variant="body1"
                                                sx={{ fontWeight: 600, fontSize: "18px", fontFamily: "Inter" }}
                                            >
                                                15:00
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {/* Pricing Breakdown */}
                            <Stack
                                spacing={2}
                                sx={{ mb: 3, pb: 3, borderBottom: "1px solid #e0e0e0" }}
                            >
                                {pricingItems.map((item) => (
                                    <Stack
                                        key={item.id}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Avatar
                                                sx={{
                                                    width: 37,
                                                    height: 37,
                                                    bgcolor: "#e0e0e0",
                                                    color: "#33333366",
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                1
                                            </Avatar>
                                            <Typography
                                                variant="body1"
                                                sx={{ fontSize: "20px", opacity: 0.8, fontFamily: "Playfair Display" }}
                                            >
                                                {item.label}
                                            </Typography>
                                        </Stack>
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: 600, fontSize: "20px", fontFamily: "Inter"}}
                                        >
                                            {item.price}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            {/* Total Price */}
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ mb: 4 }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontSize: "24px", opacity: 0.8, fontFamily: "Playfair Display" }}
                                >
                                    Total Price
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontSize: "24px", color: "#80b9ad", fontFamily: "Inter" }}
                                >
                                    $XXX.00
                                </Typography>
                            </Stack>

                            {/* Next Step Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                component={RouterLink}
                                to="/BookingSimulation2"
                                sx={{
                                    bgcolor: "#80b9ad",
                                    borderRadius: "50px",
                                    py: 2,
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    fontFamily: "Inter",
                                    boxShadow: "0px 6px 10px rgba(0,0,0,0.1)",
                                    "&:hover": {
                                        bgcolor: "#6ba89c",
                                    },
                                }}
                            >
                                Go to the Next Step
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Side - Booking Details */}
                <Grid item xs={12} md={6}>
                    <Stack spacing={3}>
                        {/* Date Selection */}
                        <Stack spacing={2}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, fontSize: "24px", fontFamily: "Playfair Display" }}
                            >
                                When you will visit?
                            </Typography>
                            <TextField
                                fullWidth
                                value="FRI, 23 DEC 2022"
                                InputProps={{
                                    startAdornment: (
                                        <CalendarTodayIcon sx={{ mr: 1, opacity: 0.5,  }} />
                                    ),
                                    endAdornment: <ExpandMoreIcon />,
                                    readOnly: true,
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 2,
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        fontFamily: "Inter"
                                    },
                                }}
                            />
                        </Stack>

                        {/* Details Section */}
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "24px", fontFamily: "Playfair Display" }}>
                            Details
                        </Typography>

                        {/* Adult Selection */}
                        <Card sx={{ border: "1px solid #33333333", borderRadius: 3, p: 3 }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Stack>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", fontFamily: "Playfair Display" }}
                                    >
                                        Adult (<Box component="span" sx={{ fontFamily: "Inter", display: "inline", fontWeight: 700 }}>18+</Box>)
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", color: "#80b9ad", fontFamily: "Inter" }}
                                    >
                                        $32.00
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}
                                >
                                    <IconButton
                                        onClick={() => handleCountChange("adult", "subtract")}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            bgcolor: "#e0e0e0",
                                            minWidth: 40,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 600, fontSize: "24px", fontFamily: "Inter" }}
                                        >
                                            {adultCount}
                                        </Typography>
                                    </Box>
                                    <IconButton onClick={() => handleCountChange("adult", "add")}>
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card>

                        {/* Child Selection */}
                        <Card sx={{ border: "1px solid #33333333", borderRadius: 3, p: 3 }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Stack spacing={0.5}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", fontFamily: "Playfair Display" }}
                                    >
                                        Child (<Box component="span" sx={{ fontFamily: "Inter", display: "inline", fontWeight: 700 }}>6-17</Box>) 
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "18px", opacity: 0.6, fontFamily: "Playfair Display" }}
                                    >
                                        Your friend's entrance to Chichen-itza
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", color: "#80b9ad", fontFamily: "Inter" }}
                                    >
                                        $20.00
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}
                                >
                                    <IconButton
                                        onClick={() => handleCountChange("child", "subtract")}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            bgcolor: "#e0e0e0",
                                            minWidth: 40,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 600, fontSize: "24px", fontFamily: "Inter" }}
                                        >
                                            {childCount}
                                        </Typography>
                                    </Box>
                                    <IconButton onClick={() => handleCountChange("child", "add")}>
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card>

                        {/* Guide Selection */}
                        <Card sx={{ border: "1px solid #33333333", borderRadius: 3, p: 3 }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Stack>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", fontFamily: "Playfair Display" }}
                                    >
                                        Samantha Donovan
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "18px", opacity: 0.6, fontFamily: "Inter" }}
                                    >
                                        $34 / day
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, fontSize: "20px", color: "#80b9ad", fontFamily: "Inter" }}
                                    >
                                        $34
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}
                                >
                                    <IconButton
                                        onClick={() => handleCountChange("guide", "subtract")}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            bgcolor: "#e0e0e0",
                                            minWidth: 40,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 600, fontSize: "24px", fontFamily: "Inter" }}
                                        >
                                            {guideCount}
                                        </Typography>
                                    </Box>
                                    <IconButton onClick={() => handleCountChange("guide", "add")}>
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>

            {/* Car Rental Banner */}
            <Box sx={{ px: { xs: 2, md: 15 }, mb: 6 }}>
                <Box
                    component="img"
                    src={img41}
                    alt="Car Rental Banner"
                    sx={{
                        width: "100%",
                        maxWidth: 910,
                        height: 184,
                        mx: "auto",
                        display: "block",
                    }}
                />
            </Box>
        </Box>
    );
};

export default BookingSimulation;
