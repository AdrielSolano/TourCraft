import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
} from "@mui/material";
import React, { useState } from "react";
import img52 from "../assets/img52.png";    
import Solano11 from "../assets/Solano11.png";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                bgcolor: "#ffffff",
            }}
        >
            {/* Left side - Background image with text overlay */}
            <Box
                sx={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    overflow: "hidden",
                    backgroundImage: `url(${img52})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
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
                        lineHeight: "29.2px",
                    }}
                >
                    Explore The Riviera Maya
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
                        letterSpacing: "-0.34px",
                        lineHeight: "23.8px",
                    }}
                >
                    Riviera Maya at your own pace: discover, book and live your adventure.
                </Typography>
            </Box>

            {/* Right side - Sign up form */}
            <Box
                sx={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <Box
                    component="img"
                    src={Solano11}
                    alt="TourCraft Logo"
                    sx={{
                        width: "259px",
                        height: "122px",
                        position: "absolute",
                        top: "157px",
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
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
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
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
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
                                Date of birth (MM/DD/YY)
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <CalendarTodayIcon
                                                sx={{ width: "16px", height: "15px" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
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
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
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
                                Confirm password
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "3.53px",
                                        height: "33.87px",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
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
                            backgroundColor: "#80B9AD",
                            borderRadius: "3.53px",
                            alignSelf: "center",
                            textTransform: "none",
                            fontFamily: "Playfair Display",
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
                        }}
                    >
                        Already have an account?{" "}
                        <Link href="/Log-in" sx={{ color: "#1D836E", textDecoration: "none" }}>
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
                    }}
                >
                    <Divider sx={{ flex: 1 }} />
                    <Link
                        href="/SignUpTourGuides"
                        underline="always"
                        sx={{
                            mx: 2,
                            color: "rgba(0, 0, 0, 0.7)",
                            fontFamily: "Playfair Display",
                            fontSize: "14px",
                        }}
                    >
                        I want to become a guide
                    </Link>
                    <Divider sx={{ flex: 1 }} />
                </Box>
            </Box>
        </Box>
    );
};

export default SignUp;