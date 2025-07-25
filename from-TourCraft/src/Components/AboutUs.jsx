import React from 'react';
import { 
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { styled } from '@mui/system';
import Rectangle46 from '../assets/Rectangle46.png';
import David from '../assets/david.png';
import Santiago from '../assets/santiago.png';
import paco from '../assets/paco.png';
import Jesus from '../assets/jesus.png';
import Adriel from '../assets/adriel.png';
import Alexis from '../assets/alexis.png';
import car from '../assets/car.png';
import lapiz from '../assets/lapiz.png';
import lupa from '../assets/lupa.png';
import manos from '../assets/manos.png';
import palo     from '../assets/palo.png';
import persona from '../assets/persona.png';

// Styled components
const StyledHero = styled(Box)(({ theme }) => ({
  height: '443px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundImage: `url(${Rectangle46})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '300px'
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[1],
  '& .MuiCardContent-root': {
    flexGrow: 1
  }
}));

const TeamCard = styled(Card)(({ theme }) => ({
  maxWidth: 282,
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[1],
  '& .MuiCardContent-root': {
    flexGrow: 1
  }
}));

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, fontFamily: "Playfair Display" }}>
      {/* Hero Section */}
      <StyledHero>
        <Container>
          <Typography variant="h2" component="h1" sx={{ 
            color: 'common.white',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 600,
            fontFamily: "Playfair Display",
            maxWidth: 750,
            margin: '0 auto'
          }}>
            WE OFFER PERSONAL GUIDES FOR YOU
          </Typography>
        </Container>
      </StyledHero>

      {/* About Section */}
      <Box py={8}>
        <Container>
          <Divider sx={{ my: 5 }} />
          
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.125rem',
            lineHeight: 1.6,
            fontFamily: "Playfair Display",
            textAlign: 'justify'
          }}>
            Welcome to TourCraft, a space designed to offer authentic and personalized experiences in the Riviera Maya. 
            We are passionate about connecting travelers with the best our region has to offer, from the stunning beaches 
            and cenotes to its vibrant culture and delicious cuisine. Our mission is to make unique destinations accessible 
            while supporting local guides and small businesses, promoting sustainable, high-quality tourism.
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.125rem',
            lineHeight: 1.6,
            fontFamily: "Playfair Display",
            textAlign: 'justify'
          }}>
            Here, you can explore, plan, and customize your journey with us, selecting points of interest, transportation 
            options, and services tailored to your needs. Whether you're seeking a nature adventure, a deep cultural experience, 
            or recommendations for the best dining spots, we're here to help you create unforgettable memories in the heart 
            of the Riviera Maya.
          </Typography>
          
          <Divider sx={{ my: 5 }} />
        </Container>
      </Box>

      {/* Features Section */}
        <Box py={8} bgcolor="background.paper">
          <Container>
            <Typography variant="h2" component="h2" sx={{ 
          fontWeight: 700,
          mb: 8,
          fontFamily: "Playfair Display",
          textAlign: 'center'
            }}>
          Dare to Explore with<br />TourCraft
            </Typography>
            
            <Grid container spacing={6} justifyContent="center">
          {/* Feature 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={lupa} alt="Hidden Gems" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Hidden Gems
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Discover cenotes, secluded beaches, and the Riviera Maya's best-kept secrets.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          {/* Feature 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={lapiz} alt="Personalized Tours" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Personalized Tours
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Create your own adventure with customizable guides and itineraries.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          {/* Feature 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={car} alt="Seamless Transport" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Seamless Transport
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Relax and enjoy; we'll take care of getting you there.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          {/* Feature 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={manos} alt="Authentic Experiences" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Authentic Experiences
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Connect with local culture through unique, genuine activities.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          {/* Feature 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={palo} alt="Local Flavors" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Local Flavors
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Savor the best of Riviera Maya's cuisine with curated restaurant partnerships.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          
          {/* Feature 6 */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <Box component="img" src={persona} alt="Trusted Reviews" sx={{ width: 64, height: 64, opacity: 0.6 }} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
              Trusted Reviews
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
              Plan with confidence by checking reviews and ratings from fellow travelers.
            </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Team Section */}
      <Box py={8}>
        <Container>
          <Divider sx={{ my: 5 }} />
          
          <Typography variant="h2" component="h2" sx={{ 
            fontWeight: 700,
            mb: 8,
            fontFamily: "Playfair Display",
            textAlign: 'center'
          }}>
            Meet Our Team
          </Typography>
          
          <Grid container spacing={6} justifyContent="center">
            {/* Team Member 1 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={Santiago}
                  alt="Santiago Calderon"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    Santiago Calderon
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    Project leader, Software developer
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
            
            {/* Team Member 2 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={David}
                  alt="David Dominguez Fraga"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    David Dominguez Fraga
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    Software Analyst
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
            
            {/* Team Member 3 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={paco}
                  alt="Adrian Farias"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    Adrian Farias
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    UX and UI Designer
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
            
            {/* Team Member 4 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={Jesus}
                  alt="Jesus Gallegos"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    Jesus Gallegos
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    Team leader, Software developer
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
            
            {/* Team Member 5 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={Adriel}
                  alt="Adriel Solano"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    Adriel Solano
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    Scrum master, Software Development
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
            
            {/* Team Member 6 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TeamCard>
                <Avatar 
                  src={Alexis}
                  alt="Alexis Bustos"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                    Alexis Bustos
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Playfair Display" }}>
                    (DBA) DataBase Administrator
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;