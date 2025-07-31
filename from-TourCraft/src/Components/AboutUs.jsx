import React from 'react';
import { 
  Box,
  Typography,
  Container
} from '@mui/material';

const AboutUs = () => {
  console.log('AboutUs component is rendering'); // Debug log

  return (
    <Box sx={{ 
      flexGrow: 1, 
      fontFamily: "Playfair Display", 
      minHeight: '100vh',
      backgroundColor: 'white',
      pt: 8
    }}>
      <Container>
        <Typography variant="h1" sx={{ 
          fontFamily: "Playfair Display",
          fontWeight: 700,
          textAlign: 'center',
          mb: 4
        }}>
          About Us
        </Typography>
        
        <Typography variant="h4" sx={{ 
          fontFamily: "Playfair Display",
          fontWeight: 600,
          textAlign: 'center',
          mb: 6
        }}>
          WE OFFER PERSONAL GUIDES FOR YOU
        </Typography>
        
        <Typography variant="body1" sx={{ 
          fontSize: '1.125rem',
          lineHeight: 1.6,
          fontFamily: "Playfair Display",
          textAlign: 'justify',
          mb: 4
        }}>
          Welcome to TourCraft, a space designed to offer authentic and personalized experiences in the Riviera Maya. 
          We are passionate about connecting travelers with the best our region has to offer, from the stunning beaches 
          and cenotes to its vibrant culture and delicious cuisine.
        </Typography>
        
        <Typography variant="body1" sx={{ 
          fontSize: '1.125rem',
          lineHeight: 1.6,
          fontFamily: "Playfair Display",
          textAlign: 'justify'
        }}>
          Our mission is to make unique destinations accessible while supporting local guides and small businesses, 
          promoting sustainable, high-quality tourism. Here, you can explore, plan, and customize your journey with us.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;