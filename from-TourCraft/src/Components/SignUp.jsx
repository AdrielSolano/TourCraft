import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    InputAdornment,
    Link,
    TextField,
    Typography,
    IconButton,
    Alert,
    Snackbar
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import img52 from "../assets/img52.png";
import Solano11 from "../assets/Solano11.png";

const SignUp = () => {
    const navigate = useNavigate();
    const dateInputRef = useRef(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        edad: '',
        fechaNacimiento: '',
        agreeToTerms: false
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations
        if (!formData.agreeToTerms) {
            setSnackbar({ open: true, message: 'You must accept the terms and conditions', severity: 'error' });
            return;
        }

        if (!formData.nombre || !formData.apellido_paterno || !formData.email || !formData.password) {
            setSnackbar({ open: true, message: 'Please complete all required fields', severity: 'error' });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setSnackbar({ open: true, message: 'Passwords do not match', severity: 'error' });
            return;
        }

        if (formData.password.length < 6) {
            setSnackbar({ open: true, message: 'Password must be at least 6 characters long', severity: 'error' });
            return;
        }

        // Calcular edad si se proporcionó fecha de nacimiento
        let edad = 0;
        if (formData.fechaNacimiento) {
            edad = calculateAge(formData.fechaNacimiento);
        }

        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", {
                nombre: formData.nombre,
                apellido_paterno: formData.apellido_paterno,
                apellido_materno: formData.apellido_materno || "",
                email: formData.email,
                password: formData.password,
                telefono: formData.telefono || "",
                edad: edad,
                id_ubicación: null, // Por ahora null, se puede agregar selector de ubicación después
                tipo_persona: "usuario"
            });

            if (response.data.success) {
                setSnackbar({ open: true, message: 'User registered successfully', severity: 'success' });
                setTimeout(() => {
                    navigate("/Log-in");
                }, 2000);
            }
        } catch (err) {
            console.error('Registration error:', err);
            const errorMessage = err.response?.data?.message || 'Error registering user';
            setSnackbar({ open: true, message: errorMessage, severity: 'error' });
        }
    };

    const handleDateIconClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.focus();
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    return (
        <Box
            sx={{
                width: "1440px",
                height: "988px",
                display: "flex",
                bgcolor: "#ffffff",
            }}
        >
            {/* Left side - Background image with text overlay */}
            <Box
                sx={{
                    position: "relative",
                    width: "795px",
                    height: "1064px",
                    marginLeft: "-8px",
                    marginTop: "-8px",
                    overflow: "hidden",
                    backgroundImage: `url(${img52})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        width: "400px",
                        top: "117px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: "40px",
                        textAlign: "center",
                        lineHeight: "49.2px",
                        zIndex: 2,
                    }}
                >
                    Explore The Riviera Maya With Us!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        position: "absolute",
                        width: "600px",
                        top: "595px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: "Playfair Display",
                        fontWeight: 500,
                        color: "#ffffff",
                        fontSize: "17px",
                        textAlign: "center",
                        letterSpacing: "0.70px",
                        lineHeight: "23.8px",
                        zIndex: 2,
                    }}
                >
                    Riviera Maya at your own pace: discover, book and live your adventure.
                </Typography>
            </Box>

            {/* Right side - Sign up form */}
            <Box
                sx={{
                    width: "695px",
                    height: "1024px",
                    marginTop: "-8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBack />}
                    component={RouterLink}
                    to="/"
                    sx={{
                        position: "absolute",
                        top: { xs: "20px", md: "55px" },
                        left: { xs: "20px", md: "20px" },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "18px",
                        zIndex: 1,
                        color: 'black',
                        fontFamily: "Playfair Display",
                    }}
                >
                    Back
                </Button>
                <Box
                    component="img"
                    src={Solano11}
                    alt="TourCraft Logo"
                    sx={{
                        width: "259px",
                        left: "260px",
                        height: "122px",
                        position: "absolute",
                        top: "110px",
                        objectFit: "cover",
                    }}
                />

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: "583px",
                        mt: 8,
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "70px",
                        marginTop: "100px",
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 600,
                                fontSize: "24px",
                                letterSpacing: "-0.48px",
                                lineHeight: "33.6px",
                            }}
                        >
                            Create account
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 400,
                                color: "#2D3748",
                                fontSize: "16px",
                                letterSpacing: "-0.32px",
                                lineHeight: "22.4px",
                            }}
                        >
                            Join With Us!
                        </Typography>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                First name
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="First name"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Last name
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Last name"
                                name="apellido_paterno"
                                value={formData.apellido_paterno}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Middle name
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Middle name (optional)"
                                name="apellido_materno"
                                value={formData.apellido_materno}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Phone
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Phone (optional)"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Date of birth
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                name="fechaNacimiento"
                                type="date"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                inputRef={dateInputRef}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleDateIconClick}
                                                edge="end"
                                                sx={{ padding: '4px' }}
                                            >
                                                <DateRangeIcon
                                                    sx={{ width: "16px", height: "15px" }}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                    "& input[type='date']": {
                                        position: 'relative',
                                        '&::-webkit-calendar-picker-indicator': {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'transparent',
                                            color: 'transparent',
                                            cursor: 'pointer',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Password
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2D3748",
                                    fontSize: "14px",
                                    mb: 0.5,
                                }}
                            >
                                Confirm Password
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Confirm password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                        fontFamily: "Playfair Display",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{
                        mt: 2, display: "flex", justifyContent: "center", padding: "8px", marginLeft: "20px",
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    size="small"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    sx={{
                                        width: "14.11px",
                                        height: "14.11px",
                                        borderRadius: "1.41px",
                                        marginTop: "45px"
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: "Playfair Display",
                                        fontSize: "12px",
                                        letterSpacing: "-0.24px",
                                        marginTop: "45px",
                                    }}
                                >
                                    I agree to all the{" "}
                                    <Link
                                        href="#"
                                        sx={{ color: "#1D836E", textDecoration: "none" }}
                                    >
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="#"
                                        sx={{ color: "#1D836E", textDecoration: "none" }}
                                    >
                                        Privacy policy
                                    </Link>
                                </Typography>
                            }
                        />
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 2,
                            width: "292px",
                            height: "36px",
                            marginLeft: "0px",

                            backgroundColor: "#80B9AD",
                            borderRadius: "3.53px",
                            alignSelf: "center",
                            textTransform: "none",
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "12px",
                            letterSpacing: "-0.24px",
                            "&:hover": {
                                backgroundColor: "#6ca99c",
                            },
                        }}
                    >
                        Create account
                    </Button>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            mt: 2,
                            fontFamily: "Playfair Display",
                            fontSize: "11px",
                            letterSpacing: "-0.22px",
                            marginLeft: "0px",

                        }}
                    >
                        Already have an account?{" "}
                        <Link component={RouterLink} to="/Log-in" sx={{ color: "#1D836E", textDecoration: "none" }}>
                            Log In
                        </Link>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: "160px",
                        display: "flex",
                        alignItems: "center",
                        width: "560px",
                        marginLeft: "70px",

                    }}
                >
                    <Divider sx={{ flex: 1 }} />
                    <Link
                        component={RouterLink}
                        to="/SignUpTourGuides"
                        underline="always"
                        sx={{
                            mx: 2,
                            color: "rgba(0, 0, 0, 0.7)",
                            fontFamily: "Playfair Display",
                            fontSize: "14px",
                            marginBottom: "10px"
                        }}
                    >
                        I want to become a guide
                    </Link>
                    <Divider sx={{ flex: 1 }} />
                </Box>
            </Box>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SignUp;