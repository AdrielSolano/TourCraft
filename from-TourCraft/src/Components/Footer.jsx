import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import map from '../assets/map.svg';
import Insta from '../assets/Insta.svg';
import Social from '../assets/Social.svg';
import Twitter from '../assets/Twitter.svg';
import { styled } from '@mui/material/styles';
import Solano12 from '../assets/Solano12.png';

// Social Icon
const SocialIcon = ({ icon, alt }) => (
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

// Contact Item
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
                component="span"
                sx={{
                    color: '#000',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    opacity: 0.8,
                    '&:hover': {
                        opacity: href ? 1 : 0.8,
                        textDecoration: href ? 'underline' : 'none',
                    },
                }}
            >
                {text.split(/(\d+%?)/).map((part, i) => (
                    <Box
                        key={i}
                        component="span"
                        sx={{
                            fontFamily: /\d/.test(part) ? "Inter" : "Playfair Display",
                        }}
                    >
                        {part}
                    </Box>
                ))}
            </Typography>
        </Box>
    );

    return href ? (
        <Link href={href} sx={{ textDecoration: 'none' }}>
            {content}
        </Link>
    ) : content;
};

// Footer Link estilo
const FooterLink = styled(Link)({
    color: '#000',
    textDecoration: 'none',
    opacity: 0.8,
    fontFamily: "Playfair Display",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    '&:hover': {
        opacity: 1,
        textDecoration: 'underline',
    },
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
                textAlign: 'center',
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
                    textAlign: 'center',
                    gap: '60px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <Grid container spacing={{ xs: 4, md: 1 }} justifyContent="space-between">
                    {/* Logo y descripción */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: { xs: 'center', md: 'flex-start' }, width: '100%' }}>
                                <Box
                                    component="img"
                                    src={Solano12}
                                    alt="TourCraft Logo"
                                    sx={{ width: '37px', height: '58px', objectFit: 'contain' }}
                                />
                                <Typography
                                    sx={{
                                        color: '#000',
                                        fontFamily: "Playfair Display",
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
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '21px',
                                    opacity: 0.6,
                                    textAlign: 'justify',
                                }}
                            >
                                Welcome to TourCraft — your guide to authentic and personalized experiences in the Riviera Maya. Discover stunning nature, rich culture, and local flavors while supporting small businesses and sustainable tourism.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: '12px', opacity: 0.5 }}>
                                <SocialIcon icon={Social} alt="Facebook" />
                                <SocialIcon icon={Twitter} alt="Twitter" />
                                <SocialIcon icon={Insta} alt="Instagram" />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Enlaces útiles */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: "Playfair Display",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Useful Links
                            </Typography>

                            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
                                {[{ name: 'Home', path: '/' },
                                { name: 'Tours', path: '/tours' },
                                { name: 'Guides', path: '/guides' },
                                { name: 'About Us', path: '/about' }]
                                    .map((item) => (
                                        <li key={item.name} style={{ marginBottom: '8px' }}>
                                            <FooterLink component={RouterLink} to={item.path}>
                                                {item.name}
                                            </FooterLink>
                                        </li>
                                    ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contacto */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '20px',
                                textAlign: 'left',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: "Playfair Display",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    textAlign: 'center',
                                }}
                            >
                                Contact
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'left',
                                    marginRight: '-100px',
                                    gap: '12px',
                                }}
                            >
                                {/* Teléfono */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Box component="img" src={phone} alt="Phone" sx={{ width: '20px', height: '20px' }} />
                                    <Typography component="span" sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                        <Box component="span" sx={{ fontFamily: "Inter", color: '#000', opacity: 0.6, fontSize: '16px' }}>
                                            (+52)
                                        </Box>
                                        <Box
                                            component="a"
                                            href="tel:+525521105157"
                                            sx={{
                                                textDecoration: 'none',
                                                color: '#000',
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '16px',
                                                '&:hover': { textDecoration: 'underline' },
                                            }}
                                        >
                                            55 2110 5157
                                        </Box>
                                    </Typography>
                                </Box>

                                {/* Correo electrónico */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Box component="img" src={mail} alt="Email" sx={{ width: '20px', height: '20px' }} />
                                    <Box
                                        component="a"
                                        href="mailto:tourcraftbusiness@gmail.com"
                                        sx={{
                                            fontFamily: 'Playfair Display',
                                            fontSize: '16px',
                                            color: '#000',
                                            opacity: 0.8,
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        tourcraftbusiness@gmail.com
                                    </Box>
                                </Box>

                                {/* Dirección */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Box component="img" src={map} alt="Map" sx={{ width: '20px', height: '20px' }} />
                                    <Typography
                                        sx={{
                                            fontFamily: 'Playfair Display',
                                            fontSize: '16px',
                                            color: '#000',
                                            opacity: 0.8,
                                        }}
                                    >
                                        Playa del Carmen, Quintana Roo, Mexico
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Copyright */}
            <Typography
                component="span"
                sx={{
                    color: '#000',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '16.94px',
                    opacity: 0.5,
                }}
            >
                {"©Copyright 2025 Tourcraft. All Rights Reserved".split(/(\d+)/).map((part, i) => (
                    <Box
                        key={i}
                        component="span"
                        sx={{
                            fontFamily: /\d/.test(part) ? "Inter" : "Playfair Display",
                        }}
                    >
                        {part}
                    </Box>
                ))}
            </Typography>
        </Box>
    );
};

export default Footer;
