import React from "react";
import {
    Box,
    Stack,
    Typography,
    Button,
    TextField,
    Card,
    CardContent,
    Stepper,
    Step,
    StepLabel,
    Avatar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import ArrowBack from "@mui/icons-material/ArrowBack";
import CalendarToday from "@mui/icons-material/CalendarToday";
import AccessTime from "@mui/icons-material/AccessTime";
import img41 from "../assets/img41.png";
import img from "../assets/img.png";

// Data for pricing breakdown
const pricingItems = [
    { label: "Tarifa de Servicio de Plataforma", price: "$xx.xx" },
    { label: "Tarifa de Experiencia", price: "$xx.xx" },
    { label: "Impuestos y Otros Cargos", price: "$xx.xx" },
    { label: "Tarifa del Transporte (Opcional)", price: "$xx.xx" },
    { label: "Tarifa del Guía", price: "$xxx.x" },
];

const steps = ["Booking Details", "Your Details", "Payment"];

export const BookingSimulation2 = () => {
    return (
        <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", p: 4 }}>
            {/* Back Button */}
            <Button
                component={RouterLink}
                to="/BookingSimulation"
                startIcon={<ArrowBack />}
                sx={{
                    color: "#000000",
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    fontSize: 18,
                    textTransform: "none",
                    mb: 4,
                }}
            >
                Back
            </Button>

            {/* Progress Stepper */}
            <Box sx={{ width: "100%", mb: 8 }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel
                                StepIconComponent={({ active, completed }) => (
                                    <Avatar
                                        sx={{
                                            width: 37,
                                            height: 37,
                                            bgcolor: active || completed ? "#80b9ad" : "#cccccc",
                                            color: active || completed ? "#ffffff" : "#333333cc",
                                            fontFamily: "Playfair Display",
                                            fontWeight: 600,
                                            fontSize: 20,
                                        }}
                                    >
                                        {index + 1}
                                    </Avatar>
                                )}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: index <= 1 ? "Playfair Display-SemiBold" : "Playfair Display-Regular",
                                        fontWeight: index <= 1 ? 600 : 400,
                                        fontSize: 20,
                                        color: index <= 1 ? "#80b9ad" : "#000000",
                                        opacity: index <= 1 ? 1 : 0.4,
                                        mt: 1,
                                    }}
                                >
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
                {/* Form Section */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, fontFamily: "Playfair Display" }}>
                        Who shall we send these tickets to?
                    </Typography>
                    
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
                        <Stack spacing={1} sx={{ flex: 1 }}>
                            <Typography variant="h6" fontFamily="Playfair Display" >Name</Typography>
                            <TextField
                                placeholder="Enter your name"
                                variant="outlined"
                                fullWidth
                                fontFamily="Playfair Display"
                            />
                        </Stack>
                        <Stack spacing={1} sx={{ flex: 1 }}>
                            <Typography variant="h6" ontFamily="Playfair Display">Surname</Typography>
                            <TextField
                                placeholder="Enter your surname"
                                variant="outlined"
                                fullWidth
                                fontFamily="Playfair Display"
                            />
                        </Stack>
                    </Stack>
                    
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} sx={{ flex: 1 }}>
                            <Typography variant="h6" fontFamily="Playfair Display">Telephone Number</Typography>
                            <TextField
                                placeholder="Enter your telephone number"
                                type="tel"
                                variant="outlined"
                                fullWidth
                                fontFamily="Playfair Display"
                            />
                        </Stack>
                        <Stack spacing={1} sx={{ flex: 1 }}>
                            <Typography variant="h6" fontFamily="Playfair Display">Email Address</Typography>
                            <TextField
                                placeholder="Enter your email address"
                                type="email"
                                variant="outlined"
                                fullWidth
                                fontFamily="Playfair Display"
                            />
                        </Stack>
                    </Stack>
                </Box>

                {/* Tickets Overview Card */}
                <Box sx={{ flex: 1 }}>
                    <Card sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 4, fontFamily: "Playfair Display" }}>
                                Your Tickets Overview
                            </Typography>
                            
                            {/* Tour Details */}
                            <Stack direction="row" spacing={2.5} sx={{ pb: 2.5, borderBottom: "1px solid #cccccc" }}>
                                <Box
                                    component="img"
                                    src={img}
                                    alt="Chichen Itza tour"
                                    sx={{ width: 160, height: 110, objectFit: "cover" }}
                                />
                                <Stack spacing={1.75}>
                                    <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: "Playfair Display" }}>
                                        Chichen-Itza
                                    </Typography>
                                    <Stack direction="row" spacing={1.25} alignItems="center">
                                        <CalendarToday sx={{color:"#80b9ad"}} />
                                        <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: "Inter" }}>
                                            FRI, 23 DEC 2024
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1.25} alignItems="center">
                                        <AccessTime sx={{color:"#80b9ad"}}/>
                                        <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: "Inter" }}>
                                            15:00
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            
                            {/* Pricing Breakdown */}
                            <Stack sx={{ py: 2.5, borderBottom: "1px solid #cccccc" }}>
                                {pricingItems.map((item, index) => (
                                    <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
                                        <Stack direction="row" spacing={1.25} alignItems="center">
                                            <Avatar sx={{ bgcolor: "#cccccc", color: "#333333cc", fontWeight: 600 }}>
                                                {index + 1}
                                            </Avatar>
                                            <Typography variant="body1" sx={{ opacity: 0.8, fontFamily: "Playfair Display" }}>
                                                {item.label}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body1" sx={{ fontWeight: 600, fontFamily: "Inter" }}>
                                            {item.price}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                            
                            {/* Total Price */}
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2.5 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, opacity: 0.8, fontFamily: "Playfair Display" }}>
                                    Total Price
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 700, color: "#80b9ad", fontFamily: "Inter" }}>
                                    $XXX.00
                                </Typography>
                            </Stack>
                            
                            {/* Next Step Button */}
                            <Button
                                fullWidth
                                onClick={() => window.location.href = "/BookingSimulation3"}
                                variant="contained"
                                sx={{
                                    bgcolor: "#80b9ad",
                                    py: 2.5,
                                    fontFamily: "Inter",
                                    borderRadius: "50px",
                                    "&:hover": { bgcolor: "#6fa89c" },
                                }}
                            >
                                Go to the Next Step
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
            
            {/* Advertisement Banner */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
                <Box
                    component="img"
                    src={img41}
                    alt="Car rental service advertisement"
                    sx={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
        </Box>
    );
};

export default BookingSimulation2;