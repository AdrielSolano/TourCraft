import React from "react";
import { Box, Button, Stack, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'; // Añade useLocation
import Solano11 from "../assets/Solano11.png";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from './AuthContext';

const Header = ({ navItems = [] }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation(); // Obtiene la ruta actual
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const { user, logout, isAuthenticated } = useAuth();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Función para determinar si un ítem está activo
    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleLogout = () => {
        logout();
        setAnchorEl(null);
        navigate('/');
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
                                fontFamily: isActive(item.path) ? "Playfair Display-Bold" : "Playfair Display-Medium",
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
                            fontFamily: isActive("/SignUp") ? "Playfair Display-Bold" : "Playfair Display-Medium",
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
                            fontFamily: isActive("/Log-in") ? "Playfair Display-Bold" : "Playfair Display-Medium",
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
                <Box
                    sx={{ width: { xs: "120px", sm: "150px", md: "180px" }, display: "flex", alignItems: "center" }}
                    component={RouterLink}
                    to="/"
                    style={{ textDecoration: "none" }}
                >
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
                                    fontFamily: isActive(item.path) ? "Playfair Display-Bold" : "Playfair Display-Medium",
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
                        {!isAuthenticated && (
                            <>
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
                                        fontFamily: isActive("/SignUp") ? "Playfair Display-Bold" : "Playfair Display-Medium",
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
                                        fontFamily: isActive("/Log-in") ? "Playfair Display-Bold" : "Playfair Display-Medium",
                                        fontWeight: isActive("/Log-in") ? 700 : 500,
                                        fontSize: "16px",
                                    }}
                                >
                                    Log In
                                </Button>
                            </>
                        )}
                        {isAuthenticated && (
                            <>
                                <IconButton onClick={e => setAnchorEl(e.currentTarget)} sx={{ p: 0, ml: 5, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AccountCircle sx={{ width: 56, height: 56, color: '#80B9AD' }} />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={() => setAnchorEl(null)}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    PaperProps={{
                                        sx: {
                                            minWidth: 180,
                                            boxShadow: 3,
                                            borderRadius: 2,
                                            mt: 1,
                                        }
                                    }}
                                >
                                    <MenuItem component={RouterLink}
                                    to="/Profile" sx={{ py: 1.5, px: 2, fontWeight: 500, fontFamily: "Playfair Display", '&:hover': { background: '#f0f4f8' } }}>Mi perfil</MenuItem>
                                    <MenuItem component={RouterLink}
                                    to="/MyTickets"sx={{ py: 1.5, px: 2, fontWeight: 500, fontFamily: "Playfair Display", '&:hover': { background: '#f0f4f8' } }}>Mis reservas</MenuItem>
                                    <MenuItem onClick={handleLogout} sx={{ py: 1.5, px: 2, fontWeight: 500, color: 'error.main', '&:hover': { background: '#ffeaea' } }}>
                                        Cerrar sesión
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
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