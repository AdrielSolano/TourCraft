import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import {
    Box,
    Button,
    Stack,
    Typography,
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
    Container
} from "@mui/material";
import Solano11 from "../assets/Solano11.png";
import { Link as RouterLink } from 'react-router-dom';

// Theme configuration
const appTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        background: {
            default: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: ["Inter", "Helvetica", "Arial", "sans-serif"].join(","),
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "normal",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                        borderColor: "#000000",
                        borderWidth: 2,
                    },
                },
                outlined: {
                    borderWidth: 2,
                    "&:hover": {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#000000",
                },
            },
        },
    },
});

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

// HeaderNav component
const HeaderNav = () => {
    // Navigation items with routes
    const navItems = [
        { label: "Home", path: "/", active: false },
        { label: "Discover", path: "/discover", active: false },
        { label: "Guides", path: "/Guides", active: false },
        { label: "About Us", path: "/AboutUs", active: false },
        { label: "Contact Us", path: "/Contact", active: false },
    ];

    return (
        <Container >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: "110%",
                    py: 2
                }}
            >
                {/* Logo container */}
                <Box sx={{ width: "180px", display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                        alt="Solano11"
                        src={Solano11}
                    />
                </Box>

                {/* Navigation items */}
                <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    sx={{ flexGrow: 1, justifyContent: "center" }}
                >
                    {navItems.map((item) => (
                        <Typography
                            key={item.label}
                            component={RouterLink}
                            to={item.path}
                            variant="body1"
                            sx={{
                                fontFamily: item.active ? "Inter-Bold" : "Inter-Medium",
                                fontWeight: item.active ? 700 : 500,
                                fontSize: "16px",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "inherit",
                                '&:hover': {
                                    textDecoration: "underline",
                                }
                            }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Stack>

                {/* Right side container */}
                <Stack direction="row" spacing={2} alignItems="center">
                    {/* Language and currency */}
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <LanguageIcon sx={{ width: 24, height: 24 }} />
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: "Inter-Medium",
                                fontWeight: 500,
                                fontSize: "16px",
                            }}
                        >
                            | USD
                        </Typography>
                    </Stack>

                    {/* Authentication buttons */}
                    <Button
                        component={RouterLink}
                        to="/SignIn"
                        variant="outlined"
                        sx={{
                            borderRadius: "38px",
                            borderWidth: 2,
                            padding: "8px 24px",
                            textTransform: "none",
                            fontFamily: "Inter-Medium",
                            fontWeight: 500,
                            fontSize: "16px",
                        }}
                    >
                        Sign In
                    </Button>

                    <Button
                        component={RouterLink}
                        to="/SignUp"
                        variant="outlined"
                        sx={{
                            borderRadius: "38px",
                            borderWidth: 2,
                            padding: "8px 24px",
                            textTransform: "none",
                            fontFamily: "Inter-Medium",
                            fontWeight: 500,
                            fontSize: "16px",
                            backgroundColor: "white",
                        }}
                    >
                        Log In
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default HeaderNav;