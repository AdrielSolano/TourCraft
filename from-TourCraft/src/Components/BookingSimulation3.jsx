import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Divider,
    Avatar,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import {
    ArrowBack,
    CalendarToday,
    AccessTime,
    Facebook,
    Twitter,
    Instagram,
    Phone,
    Email,
    LocationOn
} from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";

import { Link } from 'react-router-dom';
import img from '../assets/img.png';
import img41 from '../assets/img41.png';
import Maestro from '../assets/Maestro.svg';
import PayPal from '../assets/PayPal.svg';
import visa from '../assets/visa.svg';
import Discover from '../assets/Discover.svg';
import Mastercard from '../assets/Mastercard.svg';

// Data for pricing breakdown
const pricingItems = [
    { label: 'Platform Service Fee', price: '$xx.xx' },
    { label: 'Experience Fee', price: '$xx.xx' },
    { label: 'Taxes and Other Charges', price: '$xx.xx' },
    { label: 'Transportation Fee (Optional)', price: '$xx.xx' },
    { label: 'Guide Fee', price: '$xxx.x' }
];

// Data for steps
const steps = ['Booking Details', 'Your Details', 'Payment'];

export const BookingSimulation3 = () => {
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [cardNumber, setCardNumber] = useState('1234 5678 9101 3456');
    const [expirationDate, setExpirationDate] = useState('MM/YY');
    const [securityCode, setSecurityCode] = useState('***');
    const [openSecurityCodeDialog, setOpenSecurityCodeDialog] = useState(false);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleOpenSecurityCodeDialog = () => {
        setOpenSecurityCodeDialog(true);
    };

    const handleCloseSecurityCodeDialog = () => {
        setOpenSecurityCodeDialog(false);
    };

    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            {/* Back Button */}
            <Box sx={{ px: { xs: 2, md: 15 }, py: 2 }}>
                <Button
                    component={RouterLink}
                    to="/BookingSimulation2"
                    startIcon={<ArrowBack />}
                    sx={{
                        color: '#000000',
                        fontSize: '18px',
                        fontFamily: 'Playfair Display',
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                >
                    Back
                </Button>
            </Box>

            {/* Progress Stepper */}
            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                <Stepper activeStep={2} sx={{ width: 750 }}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel
                                StepIconComponent={({ active, completed }) => (
                                    <Avatar sx={{ bgcolor: '#80b9ad', color: 'white', width: 37, height: 37, fontSize: '20px', fontWeight: 600 }}>
                                        {index + 1}
                                    </Avatar>
                                )}
                            >
                                <Typography sx={{ color: '#80b9ad', fontWeight: 600, fontSize: '20px', fontFamily: 'Playfair Display' }}>
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* Main Content */}
            <Grid container spacing={4} sx={{ px: { xs: 2, md: 15 }, py: 4 }}>
                {/* Payment Method Selection */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, fontFamily: 'Playfair Display' }}>
                        Select a payment method
                    </Typography>

                    <FormControl component="fieldset" sx={{ width: '100%' }}>
                        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                            {/* PayPal Option */}
                            <Card sx={{ mb: 2, border: paymentMethod === 'paypal' ? '2px solid #80b9ad' : '1px solid #33333333' }}>
                                <CardContent>
                                    <FormControlLabel
                                        value="paypal"
                                        control={<Radio sx={{ color: '#80b9ad', '&.Mui-checked': { color: '#80b9ad' } }} />}
                                        label={
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Playfair Display' }}>
                                                    PayPal
                                                </Typography>
                                                <img
                                                    src={PayPal}
                                                    alt="PayPal"
                                                    style={{ width: 42, height: 30 }}
                                                />
                                            </Stack>
                                        }
                                        sx={{ width: '100%', m: 0 }}
                                    />
                                    <Typography variant="body2" sx={{ mt: 1, color: '#666', fontFamily: 'Playfair Display' }}>
                                        You will be redirected to the PayPal website after submitting your order
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Credit Card Option */}
                            <Card sx={{
                                border: paymentMethod === 'creditcard' ? '2px solid #80b9ad' : '1px solid #33333333',
                                bgcolor: paymentMethod === 'creditcard' ? 'rgba(128, 185, 173, 0.1)' : 'white'
                            }}>
                                <CardContent>
                                    <FormControlLabel
                                        value="creditcard"
                                        control={<Radio sx={{ color: '#80b9ad', '&.Mui-checked': { color: '#80b9ad' } }} />}
                                        label={
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Playfair Display' }}>
                                                    Pay with Credit Card
                                                </Typography>
                                                <Stack direction="row" spacing={1}>
                                                    <img src={visa} alt="Visa" style={{ width: 40, height: 30 }} />
                                                    <img src={Mastercard} alt="Mastercard" style={{ width: 40, height: 30 }} />
                                                    <img src={Discover} alt="Discover" style={{ width: 40, height: 30 }} />
                                                    <img src={Maestro} alt="Amex" style={{ width: 40, height: 30 }} />
                                                </Stack>
                                            </Stack>
                                        }
                                        sx={{ width: '100%', m: 0 }}
                                    />

                                    {paymentMethod === 'creditcard' && (
                                        <Stack spacing={2} sx={{ mt: 2 }}>
                                            <Stack direction="row" spacing={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Card number"
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value)}
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: 'rgba(14, 61, 77, 0.08)',
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#80b9ad'
                                                            }
                                                        }
                                                    }}
                                                />
                                                <TextField
                                                    label="Expiration Date"
                                                    value={expirationDate}
                                                    onChange={(e) => setExpirationDate(e.target.value)}
                                                    sx={{ minWidth: 200, fontFamily: 'Inter' }}
                                                />
                                            </Stack>

                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <TextField
                                                    label="Card Security Code"
                                                    value={securityCode}
                                                    onChange={(e) => setSecurityCode(e.target.value)}
                                                    sx={{ maxWidth: 255, fontFamily: 'Inter' }}
                                                />
                                                <Button 
                                                    onClick={handleOpenSecurityCodeDialog}
                                                    sx={{ 
                                                        color: '#80b9ad', 
                                                        textTransform: 'none',
                                                        fontFamily: 'Inter',
                                                        fontSize: '0.875rem',
                                                        p: 0,
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            textDecoration: 'underline'
                                                        }
                                                    }}
                                                >
                                                    What is this?
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    )}
                                </CardContent>
                            </Card>
                        </RadioGroup>
                    </FormControl>
                </Grid>

                {/* Tickets Overview */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(51, 51, 51, 0.2)' }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, textAlign: 'center', mb: 3, fontFamily: 'Playfair Display' }}>
                            Your Tickets Overview
                        </Typography>

                        {/* Tour Details */}
                        <Stack direction="row" spacing={2} sx={{ pb: 2, borderBottom: '1px solid #ccc' }}>
                            <img
                                src={img}
                                alt="Chichen-Itza"
                                style={{ width: 160, height: 110, objectFit: 'cover', borderRadius: 8 }}
                            />
                            <Stack spacing={1}>
                                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Playfair Display' }}>
                                    Chichen-Itza
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <CalendarToday sx={{ fontSize: 20, color: "#80b9ad" }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Inter' }}>
                                        FRI, 23 DEC 2024
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <AccessTime sx={{ fontSize: 20, color: "#80b9ad"}} />
                                    <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Inter' }}>
                                        15:00
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* Pricing Breakdown */}
                        <Stack spacing={2} sx={{ py: 2, borderBottom: '1px solid #ccc' }}>
                            {pricingItems.map((item, index) => (
                                <Stack key={index} direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Avatar sx={{ width: 37, height: 37, bgcolor: '#ccc', color: 'rgba(51, 51, 51, 0.8)' }}>
                                            {index + 1}
                                        </Avatar>
                                        <Typography variant="h6" sx={{ opacity: 0.8, fontFamily: 'Playfair Display' }}>
                                            {item.label}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Inter' }}>
                                        {item.price}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>

                        {/* Total Price */}
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, opacity: 0.8, fontFamily: 'Playfair Display' }}>
                                Total Price
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: '#80b9ad',
                                    fontFamily: 'Inter',
                                    textShadow: '1px 1px 0px #bfdbd5'
                                }}
                            >
                                $XXX.00
                            </Typography>
                        </Stack>

                        {/* Next Step Button */}
                        <Button
                            fullWidth
                            onClick={() => window.location.href = "/BookingSimulation4"}
                            variant="contained"
                            sx={{
                                bgcolor: '#80b9ad',
                                fontFamily: 'Inter',
                                borderRadius: '50px',
                                py: 2,
                                fontSize: '20px',
                                fontWeight: 700,
                                textTransform: 'none',
                                boxShadow: '0px 6px 10px rgba(0,0,0,0.1)',
                                '&:hover': {
                                    bgcolor: '#6da396'
                                }
                            }}
                        >
                            Go to the Next Step
                        </Button>
                    </Card>
                </Grid>
            </Grid>

            {/* Car Rental Advertisement */}
            <Box sx={{ px: { xs: 2, md: 15 }, py: 4 }}>
                <img
                    src={img41}
                    alt="Car Rental Advertisement"
                    style={{ width: '100%', height: 184, objectFit: 'cover',  marginTop: '150px',
                        marginBottom: '150px',
                        borderRadius: 4,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}
                />
            </Box>

            {/* Security Code Dialog */}
            <Dialog open={openSecurityCodeDialog} onClose={handleCloseSecurityCodeDialog}>
                <DialogTitle sx={{ fontWeight: 700, color: '#80b9ad', fontFamily: 'Playfair Display' }}>
                    What is a Card Security Code (CSC)?
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" fontFamily= 'Playfair Display' paragraph>
                        The <strong>Card Security Code (CSC)</strong> is a 3 or 4-digit number on your credit/debit card that adds an extra layer of security.
                    </Typography>
                    
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 600, fontFamily: 'Playfair Display' }}>
                        Where to find it:
                    </Typography>
                    
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <img src={visa} alt="Visa" style={{ width: 50 }} />
                        <Typography fontFamily= 'Playfair Display'><strong>Visa, Mastercard, Discover:</strong> 3 digits on the back</Typography>
                    </Box>
                    
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <img src={Mastercard} alt="Mastercard" style={{ width: 50 }} />
                        <Typography fontFamily= 'Playfair Display'><strong>American Express:</strong> 4 digits on the front</Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleCloseSecurityCodeDialog}
                        sx={{ color: '#80b9ad', fontWeight: 600, fontFamily: 'Inter', textTransform: 'none' }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BookingSimulation3;