import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'; // Importa RouterLink
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import map from '../assets/map.svg';
import Insta from '../assets/Insta.svg';
import Social from '../assets/Social.svg';
import Twitter from '../assets/Twitter.svg';
import { styled } from '@mui/material/styles';
import Solano12 from '../assets/Solano12.png';

// Componente SocialIcon - Icono de red social
const SocialIcon = ({ icon, alt }) => {
    return (
        <Box 
             sx={{
                 backgroundColor: '#000',
                 borderRadius: '100px',
                 width: '24px',
                 height: '24px',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
             }}
        >
            <Box 
                component="img" 
                src={icon} 
                alt={alt}
                sx={{ filter: 'invert(-80)', width: '60%', height: '60%' }}
            />
        </Box>
    );
};

// Componente ContactItem - Item de contacto
const ContactItem = ({ icon, text, href }) => {
    const content = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box 
                component="img" 
                src={icon} 
                alt="" 
                sx={{ width: '20px', height: '20px' }} 
            />
            <Typography
                sx={{
                    color: '#000',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    opacity: 0.8,
                    '&:hover': {
                        opacity: href ? 1 : 0.8,
                        textDecoration: href ? 'underline' : 'none',
                    }
                }}
            >
                {text}
            </Typography>
        </Box>
    );

    return href ? (
        <Link href={href} sx={{ textDecoration: 'none' }}>
            {content}
        </Link>
    ) : content;
};

// Estilo para FooterLink
const FooterLink = styled(Link)({
    color: '#000',
    textDecoration: 'none',
    opacity: 0.8,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    '&:hover': {
        opacity: 1,
        textDecoration: 'underline',
    }
});

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#fff',
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '60px',
                padding: { xs: '40px 20px 20px', md: '60px 20px 20px' },
                width: '97.90%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '60px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="space-between">
                    {/* Logo and description */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Box
                                    component="img"
                                    src={Solano12}
                                    alt="TourCraft Logo"
                                    sx={{ width: '37px', height: '58px', objectFit: 'contain' }}
                                />
                                <Typography
                                    sx={{
                                        color: '#000',
                                        fontFamily: "'Golos Text', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '28.8px',
                                    }}
                                >
                                    TourCraft
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '21px',
                                    opacity: 0.6,
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur. Enim nulla suscipit leo integer bibendum ultrices. Nulla sed arcu amet montes tellus sit sem quis.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: '12px', opacity: 0.5 }}>
                                <SocialIcon icon={Social} alt="Facebook" />
                                <SocialIcon icon={Twitter} alt="Twitter" />
                                <SocialIcon icon={Insta} alt="Instagram" />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: "'Golos Text', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Useful Links
                            </Typography>

                            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Tours', path: '/tours' },
                                    { name: 'Guides', path: '/guides' },
                                    { name: 'About Us', path: '/about' }
                                ].map((item) => (
                                    <li key={item.name} style={{ marginBottom: '8px' }}>
                                        <FooterLink component={RouterLink} to={item.path}>
                                            {item.name}
                                        </FooterLink>
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: "'Golos Text', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Contact
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <ContactItem 
                                    icon={phone}
                                    text="(+52) 55 2110 5157"
                                    href="tel:+525521105157"
                                />

                                <ContactItem 
                                    icon={mail}
                                    text="tourcraftbusiness@gmail.com"
                                    href="mailto:tourcraftbusiness@gmail.com"
                                />

                                <ContactItem 
                                    icon={map}
                                    text="Playa del Carmen, Quintana Roo, Mexico"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Typography
                sx={{
                    color: '#000',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '16.94px',
                    opacity: 0.5,
                }}
            >
                &copy;Copyright 2025 Tourcraft. All Rights Reserved
            </Typography>
        </Box>
    );
};

export default Footer;