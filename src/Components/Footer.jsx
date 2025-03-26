import { 
    Box, 
    Typography, 
    Container, 
    Grid, 
    Stack, 
    Select, 
    MenuItem,
    InputAdornment,
    Divider,
    IconButton,
    Link as MuiLink
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Importing images from assets
import ukFlag from '../assets/image 26.png';
import visaIcon from '../assets/image 27.png';
import mastercardIcon from '../assets/image 28.png';
import amexIcon from '../assets/image 29.png';
import discoverIcon from '../assets/image 30.png';
import paypalIcon from '../assets/image 31.png';
import applepayIcon from '../assets/image 33.png';
import googlepayIcon from '../assets/image 34.png';
import alipayIcon from '../assets/image 35.png';
import unionpayIcon from '../assets/image 36.png';
import maestroIcon from '../assets/image 37.png';

const Footer = () => {
    // Payment icons mapping
    const paymentIcons = {
        visa: visaIcon,
        mastercard: mastercardIcon,
        amex: amexIcon,
        discover: discoverIcon,
        paypal: paypalIcon,
        applepay: applepayIcon,
        googlepay: googlepayIcon,
        alipay: alipayIcon,
        unionpay: unionpayIcon,
        maestro: maestroIcon
    };

    const paymentMethods = [
        { row: 1, items: ["visa", "mastercard", "amex", "discover", "paypal"] },
        { row: 2, items: ["applepay", "googlepay", "alipay", "unionpay", "maestro"] }
    ];

    const footerLinks = {
        company: ["About Us", "Contact Us", "Home", "Discover", "Guides"],
        help: ["FAQs", "Terms and conditions", "Privacy policy"]
    };

    return (
        <Box sx={{ bgcolor: '#13243e', color: 'white', py: 4 }}>
            <Container >
                {/* Sección centrada antes del divider */}
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    width: '110%'
                }}>
                    <Grid container spacing={30} sx={{ maxWidth: '1500px' }}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                                Language
                            </Typography>
                            <Select
                                value="English (UK)"
                                sx={{ 
                                    width: 223,
                                    height: 48,
                                    bgcolor: '#13253f',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)'
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Box 
                                            component="img" 
                                            src={ukFlag} 
                                            alt="UK Flag" 
                                            sx={{ width: 21, height: 14 }} 
                                        />
                                    </InputAdornment>
                                }
                            >
                                <MenuItem value="English (UK)">English (UK)</MenuItem>
                            </Select>
                            
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 4, mb: 2 }}>
                                Currency
                            </Typography>
                            <Select
                                value="U.S. Dollar ($)"
                                sx={{ 
                                    width: 223,
                                    height: 48,
                                    bgcolor: '#13253f',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)'
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }}
                            >
                                <MenuItem value="U.S. Dollar ($)">U.S. Dollar ($)</MenuItem>
                            </Select>
                        </Grid>
                        
                        <Grid item xs={12} md={2}>
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                                Company
                            </Typography>
                            <Stack spacing={1}>
                                {footerLinks.company.map((link) => (
                                    <Typography 
                                        key={link} 
                                        component={RouterLink} 
                                        to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={12} md={2}>
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                                Help
                            </Typography>
                            <Stack spacing={1}>
                                {footerLinks.help.map((link) => (
                                    <Typography 
                                        key={link} 
                                        component={MuiLink} 
                                        href="#"
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={12} md={5}>
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                                Payment methods possible
                            </Typography>
                            
                            <Stack spacing={2}>
                                {paymentMethods.map((row, index) => (
                                    <Stack key={index} direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                        {row.items.map((method) => (
                                            <Box 
                                                key={method}
                                                component="img" 
                                                src={paymentIcons[method]} 
                                                alt={`${method} payment method`}
                                                sx={{ 
                                                    width: 42, 
                                                    height: 27,
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                ))}
                            </Stack>
                            
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 4, mb: 2 }}>
                                Join Our Team
                            </Typography>
                            <Typography 
                                component={RouterLink}
                                to="/become-a-guide"
                                sx={{ 
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                Become a Tour guide for Us
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                
                <Divider sx={{ mt: 4, mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    py: 1,
                    gap: 2
                }}>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: { xs: 'center', sm: 'left' } }}>
                        Copyright © {new Date().getFullYear()} Tourcraft. All Rights Reserved
                    </Typography>
                    
                    <Stack direction="row" spacing={4}>
                        <IconButton 
                            color="inherit"
                            component="a"
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton 
                            color="inherit"
                            component="a"
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton 
                            color="inherit"
                            component="a"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;