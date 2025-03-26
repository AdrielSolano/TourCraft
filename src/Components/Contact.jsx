import React, { useState } from "react";
import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    Container, 
    Stack, 
    Grid, 
    Paper
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
        <Box sx={{ bgcolor: "background.default", minHeight: '100vh' }}>
            {/* Main Content */}
            <Container maxWidth="xl" sx={{ py: 8 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: { xs: '48px', md: '82.3px' },
                            color: '#0e3d4d',
                            lineHeight: '1.2'
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            mt: 3,
                            color: '#6c6c6c',
                            fontWeight: '500',
                            maxWidth: 564,
                            mx: 'auto',
                            lineHeight: '1.6'
                        }}
                    >
                        Are you a traveler in need of help? Have a question about your review?
                        Problems booking your hotel, flight or attraction/activity? Trouble with a
                        restaurant reservation?
                    </Typography>
                </Box>

                {/* Contact Form and Map */}
                <Grid container spacing={4}>
                    {/* Form Column */}
                    <Grid item xs={12} md={5}>
                        <Paper 
                            elevation={0} 
                            sx={{ 
                                p: 4, 
                                border: '1px solid', 
                                borderColor: 'divider',
                                borderRadius: 2,
                                height: '100%'
                            }}
                        >
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="body1" sx={{ mb: 1, fontWeight: '500' }}>
                                            Name:
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            variant="outlined"
                                            placeholder="Enter your name"
                                            required
                                            sx={{ 
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                }
                                            }}
                                        />
                                    </Box>
                                    
                                    <Box>
                                        <Typography variant="body1" sx={{ mb: 1, fontWeight: '500' }}>
                                            Email:
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            variant="outlined"
                                            placeholder="Enter your email"
                                            required
                                            sx={{ 
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                }
                                            }}
                                        />
                                    </Box>
                                    
                                    <Box>
                                        <Typography variant="body1" sx={{ mb: 1, fontWeight: '500' }}>
                                            Phone Number:
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                            placeholder="Enter your phone number"
                                            sx={{ 
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                }
                                            }}
                                        />
                                    </Box>
                                    
                                    <Box>
                                        <Typography variant="body1" sx={{ mb: 1, fontWeight: '500' }}>
                                            Message
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            multiline
                                            minRows={4}
                                            variant="outlined"
                                            placeholder="Type your message here"
                                            required
                                            sx={{ 
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                }
                                            }}
                                        />
                                    </Box>
                                    
                                    <Box sx={{ pt: 2 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                bgcolor: '#80b9ad',
                                                color: '#2d2d2d',
                                                borderRadius: 2,
                                                px: 4,
                                                py: 1.5,
                                                width: { xs: '100%', sm: '272px' },
                                                textTransform: 'none',
                                                fontWeight: 'bold',
                                                '&:hover': {
                                                    bgcolor: '#6da89c',
                                                }
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Stack>
                            </form>
                        </Paper>
                    </Grid>
                    
                    {/* Map Column */}
                    <Grid item xs={12} md={7}>
                        <Box 
                            component="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.3615184742567!2d-99.17213212455147!3d19.42688924361452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff4fa0dda133%3A0x33d8aa840ede9421!2sReforma%20Social%2C%20Miguel%20Hidalgo%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1701123456789!5m2!1sen!2smx"
                            sx={{ 
                                width: '100%', 
                                height: '533px', 
                                border: 0,
                                borderRadius: 2,
                                boxShadow: 3
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Contact information
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
                                    📍 C. 4 14, Reforma Soc, Miguel Hidalgo, 11650 Ciudad de México, CDMX
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
                                    📞 +52 (55) 2110 5157
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
                                    ✉️ Tourcraft@gmail.com
                                </Typography>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                    🕒 Monday to Friday 8:00 AM - 5:00 PM
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;