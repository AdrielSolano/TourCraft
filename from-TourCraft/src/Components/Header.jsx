import React from "react";
import { Box, Button, Stack, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Añade useLocation
import Solano11 from "../assets/Solano11.png";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = ({ navItems }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation(); // Obtiene la ruta actual

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Función para determinar si un ítem está activo
    const isActive = (path) => {
        return location.pathname === path;
    };

    const drawer = (
        <Box
            sx={{ width: { xs: 250, sm: 300 } }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem
                        button
                        component={RouterLink}
                        to={item.path}
                        key={item.label}
                        sx={{
                            px: { xs: 2, sm: 3 },
                            py: { xs: 1, sm: 2 },
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontFamily: isActive(item.path) ? "Inter-Bold" : "Inter-Medium",
                                fontWeight: isActive(item.path) ? 700 : 500,
                                fontSize: { xs: "16px", sm: "18px" },
                            }}
                        />
                    </ListItem>
                ))}
                <ListItem
                    button
                    component={RouterLink}
                    to="/SignUp"
                    sx={{
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 2 },
                    }}
                >
                    <ListItemText
                        primary="Sign Up"
                        primaryTypographyProps={{
                            fontFamily: isActive("/SignUp") ? "Inter-Bold" : "Inter-Medium",
                            fontWeight: isActive("/SignUp") ? 700 : 500,
                            fontSize: { xs: "16px", sm: "18px" },
                        }}
                    />
                </ListItem>
                <ListItem
                    button
                    component={RouterLink}
                    to="/Log-in"
                    sx={{
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 2 },
                    }}
                >
                    <ListItemText
                        primary="Log In"
                        primaryTypographyProps={{
                            fontFamily: isActive("/Log-in") ? "Inter-Bold" : "Inter-Medium",
                            fontWeight: isActive("/Log-in") ? 700 : 500,
                            fontSize: { xs: "16px", sm: "18px" },
                        }}
                    />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box component="header">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    maxWidth: "1512px",
                    py: 2,
                    px: 16,
                    mx: "auto",

                    position: "relative"

                }}
            >
                {/* Logo container */}
                <Box sx={{ width: { xs: "120px", sm: "150px", md: "180px" }, display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                        alt="Solano11"
                        src={Solano11} />
                </Box>

                {/* Desktop Navigation */}
                {!isMobile && (
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
                                    fontFamily: isActive(item.path) ? "Inter-Bold" : "Inter-Medium",
                                    fontWeight: isActive(item.path) ? 700 : 500,
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
                )}

                {/* Desktop Auth Buttons */}
                {!isMobile && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button
                            component={RouterLink}
                            to="/SignUp"
                            variant="outlined"
                            sx={{
                                borderRadius: "38px",
                                borderColor: "#000",
                                color: "#000",
                                borderWidth: 2,
                                padding: "8px 24px",
                                textTransform: "none",
                                fontFamily: isActive("/SignUp") ? "Inter-Bold" : "Inter-Medium",
                                fontWeight: isActive("/SignUp") ? 700 : 500,
                                fontSize: "16px",
                            }}
                        >
                            Sign Up
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/Log-in"
                            variant="outlined"
                            sx={{
                                borderRadius: "38px",
                                borderColor: "#000",
                                color: "#000",
                                borderWidth: 2,
                                padding: "8px 24px",
                                textTransform: "none",
                                fontFamily: isActive("/Log-in") ? "Inter-Bold" : "Inter-Medium",
                                fontWeight: isActive("/Log-in") ? 700 : 500,
                                fontSize: "16px",
                            }}
                        >
                            Log In
                        </Button>
                    </Stack>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Stack>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Header;