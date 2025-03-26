import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import image52 from "../assets/image52.png";
import Solano11 from "../assets/Solano11.png";

const appTheme = createTheme({
    palette: {
        primary: {
            main: "#333333",
        },
        secondary: {
            main: "#007aff",
        },
        background: {
            default: "#ffffff",
        },
        text: {
            primary: "#000000",
            secondary: "rgba(0, 0, 0, 0.7)",
            disabled: "rgba(0, 0, 0, 0.5)",
        },
        divider: "#d8dadc",
        grey: {
            900: "#1a202c",
        },
    },
    typography: {
        fontFamily: [
            "Inter-Regular",
            "Poppins-Regular",
            "Open_Sans-SemiBold",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(","),
        h3: {
            fontFamily: "'Poppins-Bold', Helvetica",
            fontWeight: 700,
            fontSize: "40px",
        },
        h5: {
            fontFamily: "'Poppins-SemiBold', Helvetica",
            fontWeight: 600,
            fontSize: "25px",
        },
        h6: {
            fontFamily: "'Poppins-Bold', Helvetica",
            fontWeight: 700,
            fontSize: "19.8px",
            letterSpacing: "-0.2px",
            lineHeight: "25.7px",
        },
        body1: {
            fontFamily: "'Poppins-Medium', Helvetica",
            fontWeight: 500,
            fontSize: "17px",
            lineHeight: "23.8px",
        },
        body2: {
            fontFamily: "'Inter-Regular', Helvetica",
            fontWeight: 400,
            fontSize: "14px",
        },
        button: {
            textTransform: "none",
            fontFamily: "'Inter-SemiBold', Helvetica",
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "5px",
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        "& fieldset": {
                            borderColor: "#d8dadc",
                        },
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: "#000000",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "#d8dadc",
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                },
            },
        },
    },
});

export const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isMobile = useMediaQuery('(max-width:900px)');

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (isMobile) {
        return (
            <ThemeProvider>
                <Box sx={{ bgcolor: "#ffffff", width: "100%", minHeight: '100vh', px: 2, py: 3 }}>
                    {/* Header with back button and logo */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                fontFamily: "Open Sans-SemiBold",
                                fontWeight: 600,
                                fontSize: "14px",
                                color: "black",
                                textTransform: "none",
                                p: 0,
                            }}
                        >
                            Back
                        </Button>
                        <Box
                            sx={{
                                width: "100px",
                                height: "50px",
                                backgroundImage: `url(${Solano11})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </Box>

                    {/* Main content */}
                    <Box mb={4}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "Poppins-Bold",
                                fontWeight: "bold",
                                mb: 3
                            }}
                        >
                            Hi, Welcome!
                        </Typography>

                        {/* Form fields */}
                        <Stack spacing={2} mb={3}>
                            <Stack spacing={1}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: "Inter-Regular",
                                    }}
                                >
                                    Email address
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Your email"
                                    type="email"
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            height: "48px",
                                        },
                                    }}
                                />
                            </Stack>

                            <Stack spacing={1}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: "Inter-Regular",
                                    }}
                                >
                                    Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOffIcon />
                                                    ) : (
                                                        <VisibilityIcon />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            height: "48px",
                                        },
                                    }}
                                />
                            </Stack>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Remember me"
                                    sx={{
                                        "& .MuiFormControlLabel-label": {
                                            fontFamily: "Inter-Regular",
                                        },
                                    }}
                                />
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        fontFamily: "Inter-Regular",
                                        color: "#000000",
                                    }}
                                >
                                    Forgot password?
                                </Link>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    bgcolor: "black",
                                    borderRadius: "5px",
                                    py: "5px",
                                    fontFamily: "Inter-SemiBold",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    textTransform: "none",
                                }}
                            >
                                Log in
                            </Button>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: "Poppins-Regular",
                                        color: "#2d3748",
                                    }}
                                >
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        component={RouterLink}
                                        to="/SignUp"
                                        color="#007aff"
                                        underline="none"
                                        sx={{
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            }
                                        }}
                                    >
                                        Sign Up
                                    </Link>
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Divider sx={{ flex: 1 }} />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        px: 2,
                                        fontFamily: "Inter-Regular",
                                        color: "rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    Or with
                                </Typography>
                                <Divider sx={{ flex: 1 }} />
                            </Box>

                            <Button
                                variant="outlined"
                                startIcon={<GoogleIcon />}
                                fullWidth
                                sx={{
                                    height: "45px",
                                    borderRadius: "10px",
                                    border: "1px solid #d8dadc",
                                    fontFamily: "Inter-Medium",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    color: "#000000",
                                }}
                            >
                                Google
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }

    // Desktop view (original code)
    return (
        <ThemeProvider>
            <Box sx={{ bgcolor: "#ffffff", width: "100%" }}>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{ width: "1512px", height: "806px" }}
                >
                    <Box sx={{ position: "relative", height: "676px", mt: "61px" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                width: "1512px",
                                height: "676px",
                                top: 0,
                                left: 0,
                                overflow: "hidden",
                            }}
                        >
                            {/* Left side - Image with overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "688px",
                                    height: "676px",
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "688px",
                                        height: "676px",
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image52})`,
                                        backgroundSize: "100% 100%",
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        sx={{
                                            position: "absolute",
                                            width: "450px",
                                            top: "120px",
                                            left: "120px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: "Poppins-Bold",
                                                fontWeight: "bold",
                                                color: "white",
                                                fontSize: "40px",
                                                lineHeight: "29.2px",
                                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                            }}
                                        >
                                            Explore Riviera Maya
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: "Poppins-SemiBold",
                                                fontWeight: 600,
                                                color: "white",
                                                fontSize: "25px",
                                                lineHeight: "35px",
                                                mt: 4,
                                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                            }}
                                        >
                                            Welcome to TourCraft
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "Poppins-Medium",
                                                fontWeight: 500,
                                                color: "white",
                                                fontSize: "17px",
                                                lineHeight: "23.8px",
                                                mt: 2,
                                            }}
                                        >
                                            Riviera Maya at your own pace: discover, book and live your
                                            adventure.
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>

                            {/* Right side - Login form */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "594px",
                                    height: "515px",
                                    top: "123px",
                                    left: "743px",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "581px",
                                        height: "515px",
                                        top: 0,
                                        left: "13px",
                                    }}
                                >
                                    <Button
                                        startIcon={<ArrowBackIcon />}
                                        sx={{
                                            position: "absolute",
                                            top: "-60px",
                                            left: "11px",
                                            fontFamily: "Open Sans-SemiBold",
                                            fontWeight: 600,
                                            fontSize: "18px",
                                            color: "black",
                                            textTransform: "none",
                                        }}
                                    >
                                        Back
                                    </Button>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "207px",
                                            height: "103px",
                                            top: "-118px",
                                            left: "533px",
                                            backgroundImage: `url(${Solano11})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            fontFamily: "Poppins-Bold",
                                            fontWeight: "bold",
                                            fontSize: "19.8px",
                                            lineHeight: "25.7px",
                                        }}
                                    >
                                        Hi, Welcome!
                                    </Typography>

                                    <Stack
                                        spacing={3}
                                        sx={{
                                            position: "absolute",
                                            width: "570px",
                                            top: "64px",
                                            left: 0,
                                        }}
                                    >
                                        <Stack spacing={1.5}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Inter-Regular",
                                                    fontSize: "14px",
                                                    lineHeight: "17.5px",
                                                }}
                                            >
                                                Email address
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="Your email"
                                                type="email"
                                                variant="outlined"
                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "10px",
                                                        height: "56px",
                                                    },
                                                }}
                                            />
                                        </Stack>

                                        <Stack spacing={1.5}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Inter-Regular",
                                                    fontSize: "14px",
                                                    lineHeight: "17.5px",
                                                }}
                                            >
                                                Password
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="Password"
                                                type={showPassword ? "text" : "password"}
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? (
                                                                    <VisibilityOffIcon />
                                                                ) : (
                                                                    <VisibilityIcon />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "10px",
                                                        height: "56px",
                                                    },
                                                }}
                                            />
                                        </Stack>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Remember me"
                                                sx={{
                                                    "& .MuiFormControlLabel-label": {
                                                        fontFamily: "Inter-Regular",
                                                        fontSize: "14px",
                                                        lineHeight: "17.5px",
                                                    },
                                                }}
                                            />
                                            <Link
                                                href="#"
                                                underline="none"
                                                sx={{
                                                    fontFamily: "Inter-Regular",
                                                    fontSize: "14px",
                                                    lineHeight: "17.5px",
                                                    color: "#000000",
                                                }}
                                            >
                                                Forgot password?
                                            </Link>
                                        </Box>

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                bgcolor: "black",
                                                borderRadius: "5px",
                                                py: "5px",
                                                fontFamily: "Inter-SemiBold",
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                textTransform: "none",
                                            }}
                                        >
                                            Log in
                                        </Button>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: "Poppins-Regular",
                                                    fontSize: "9.9px",
                                                    lineHeight: "13.8px",
                                                    color: "#2d3748",
                                                }}
                                            >
                                                Don&apos;t have an account?{" "}
                                                <Link
                                                    href="#"
                                                    underline="none"
                                                    sx={{
                                                        fontFamily: "Poppins-Regular",
                                                        fontSize: "9.9px",
                                                        lineHeight: "13.8px",
                                                        color: "#007aff",
                                                    }}
                                                >
                                                    Sign up
                                                </Link>
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Divider sx={{ flex: 1 }} />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    px: 2,
                                                    fontFamily: "Inter-Regular",
                                                    fontSize: "14px",
                                                    lineHeight: "17.5px",
                                                    color: "rgba(0, 0, 0, 0.7)",
                                                }}
                                            >
                                                Or with
                                            </Typography>
                                            <Divider sx={{ flex: 1 }} />
                                        </Box>

                                        <Button
                                            variant="outlined"
                                            startIcon={<GoogleIcon />}
                                            sx={{
                                                width: "275px",
                                                height: "45px",
                                                left: "150px",
                                                borderRadius: "10px",
                                                border: "1px solid #d8dadc",
                                                fontFamily: "Inter-Medium",
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                textTransform: "none",
                                                color: "#000000",
                                            }}
                                        >
                                            Google
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default SignUp;