import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container, 
  Card, 
  CardContent, 
  CardMedia,
  IconButton,
  Avatar,
  Divider,
  Link
} from '@mui/material';
import { ArrowForward, ArrowBack, Star } from '@mui/icons-material';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';  
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img41 from '../assets/img41.png';
import icon2 from '../assets/icon2.svg'; 
import icon3 from '../assets/icon3.svg'; 
import icon4 from '../assets/icon4.svg'; 
import star from '../assets/star.svg'; 



const HomePage = () => {
  return (
      <Box>
        {/* Hero Section */}
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <Container >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.75rem' },
                  lineHeight: 1.2,
                  maxWidth: 696,
                  mx: 'auto'
                }}
              >
                Explore the Riviera Maya with a tour just for you
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  lineHeight: 1.2,
                  maxWidth: 1080,
                  mx: 'auto'
                }}
              >
                We help you explore the Riviera Maya at your own pace: Rent a guide exclusively for you and enjoy a personalized experience!
              </Typography>
              <Button
                href="/Tours"
                variant="contained"
                sx={{
                  bgcolor: '#7bbcb0',
                  color: '#141841',
                  borderRadius: '38px',
                  px: 5,
                  py: 2,
                  '&:hover': { bgcolor: '#6aa89c' }
                }}
                endIcon={<ArrowForward />}
              >
                Take a Trip
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Steps Section */}
        <Box sx={{ py: 8 }}>
          <Container >
            <Divider sx={{ my: -8 }}  />
            <Grid container spacing={6} sx={{ mt: 4 }}>
              {[
                {
                  number: '01',
                  title: 'Choose a place, activity and time',
                  description: 'We help you find your travel location and structure your travel plan.'
                },
                {
                  number: '02',
                  title: 'Choose the perfect guide for you',
                  description: 'We help you to find a guide from all our certified guides and that adapts to your needs.'
                },
                {
                  number: '03',
                  title: 'Enjoy a customized trip to the riviera maya',
                  description: 'After helping you choose the place, time, guide, and transportation, all that\'s left is to enjoy.'
                }
              ].map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: '1.5625rem',
                        lineHeight: 1.2
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        lineHeight: 1.2
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '1.125rem',
                        lineHeight: 1.2
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Advertisement - Movistar */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Container>
            <Box
              component="img"
              src={img1}
              alt="Movistar Advertisement"
              sx={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </Container>
        </Box>

        {/* Destinations Section */}
        <Box sx={{ py: 8 }}>
          <Container >
            <Typography 
              variant="h2" 
              sx={{ 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '2.5rem' },
                lineHeight: 1.33,
                textAlign: 'center',
                mb: 8
              }}
            >
              Our Destinations
            </Typography>
            
            
              <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
                {[
                  {
                    image: img4,
                    name: 'Hol-Box',
                    badge: 'Top Ranked'
                  },
                  {
                    image: img3,
                    name: 'Merida'
                  },
                  {
                    image: img2,
                    name: 'Cancun',
                    badge: '20%OFF'
                  }
                ].map((destination, index) => (
<Card key={index} sx={{ minWidth: { xs: 260, sm: 300, md: 384 }, height: 500, position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="500"
                      image={destination.image}
                      alt={destination.name}
                    />
                    <CardContent sx={{ 
                      position: 'absolute', 
                      bottom: 24, 
                      left: 24, 
                      right: 24,
                      color: 'white',
                      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: '1.75rem',
                          lineHeight: 1.33
                        }}
                      >
                        {destination.name}
                      </Typography>
                      {destination.badge && (
                        <Box 
                          sx={{ 
                            position: 'absolute', 
                            top: -380, 
                            right: 5,
                            bgcolor: 'black',
                            borderRadius: 1,
                            px: 1.5,
                            py: 0.5
                          }}
                        >
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              fontFamily: destination.badge === 'Top Ranked' ? "'Playfair Display', serif" : "'Poppins', sans-serif",
                              fontWeight: 600,
                              fontSize: '1rem',
                              lineHeight: 1.5,
                              color: 'white'
                            }}
                          >
                            {destination.badge}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </Box>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{ py: 8 }}>
          <Container >
            <Grid container spacing={8}>
              {[
                {
                  icon: icon2,
                  title: 'Customized Tours/Trips',
                  subtitle: 'Book With Confidence',
                  description: 'Explore the Riviera Maya your way. Choose the destinations you\'re most interested in and tailor your experience to match your preferences. Turn every trip into a unique adventure!'
                },
                {
                  icon: icon3,
                  title: 'Guides for everyone',
                  subtitle: 'guides who speak your language',
                  description: 'Find tour guides that suit you: from history experts to nature enthusiasts. No matter your language or travel style, we have the perfect guide to accompany you.'
                },
                {
                  icon: icon4,
                  title: 'Don\'t worry about transport',
                  subtitle: 'Flexible tour options',
                  description: 'Travel hassle-free. Our platform offers safe and comfortable transportation options to ensure you reach your favorite destinations with ease.'
                }
              ].map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <Box sx={{ width: 64, height: 64, opacity: index === 1 ? 0.6 : 1 }}>
                      <img src={service.icon} alt={service.title} style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: '1.5rem',
                          lineHeight: 1.2
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: 1.2,
                          opacity: 0.8
                        }}
                      >
                        {service.subtitle}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: 1.2,
                          opacity: 0.6
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Advertisement - Car Rental */}
        <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
          <Container >
            <Box 
              component="img"
              src={img41}
              alt="Car Rental Advertisement"
              sx={{ maxWidth: '100%', height: 'auto', mx: 'auto', display: 'block' }}
            />
          </Container>
        </Box>

        {/* Guides Section */}
        <Box sx={{ py: 8 }}>
          <Container >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mb: 8 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '2.5rem' },
                  lineHeight: 1.33,
                  textAlign: 'center'
                }}
              >
                Meet Our Guides
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: 1.33,
                  textAlign: 'center',
                  opacity: 0.6,
                  maxWidth: 559
                }}
              >
                Get to know the experts who will make your trip unforgettable.
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {[
                {
                  image: img5,
                  location: 'In Merida',
                  question: 'What would be your ideal personal guide for you?'
                },
                {
                  image: img6,
                  location: 'In Playa del Carmen',
                  question: 'What would be your ideal personal guide for you?'
                },
                {
                  image: img7,
                  location: 'In Cozumel',
                  question: 'What would be your ideal personal guide for you?'
                }
              ].map((guide, index) => (
                <Card key={index} sx={{ minWidth: 384 }}>
                  <CardMedia
                    component="img"
                    height="248"
                    image={guide.image}
                    alt={guide.location}
                    sx={{ borderRadius: '20px' }}
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: 1.2,
                        opacity: 0.6
                      }}
                    >
                      {guide.location}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontFamily: "'Golos Text', sans-serif",
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          lineHeight: 1.2
                        }}
                      >
                        {guide.question}
                      </Typography>
                      <Link 
                        href="#" 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                      >
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontFamily: "'Golos Text', sans-serif",
                            fontWeight: 400,
                            fontSize: '1rem',
                            lineHeight: 1.2
                          }}
                        >
                          visit
                        </Typography>
                        <ArrowForward sx={{ fontSize: '1rem', opacity: 0.6 }} />
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Testimonials Section */}
<Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2, px: 2 }}>
          <Container> 
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 6, 
              maxWidth: 754,
              mx: 'auto',
              mb: 8
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    lineHeight: 1.2,
                    color: '#0e3d4d'
                  }}
                >
                  Testimonials
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.33,
                    textAlign: 'center',
                    color: '#0e3d4d'
                  }}
                >
                  Don't take our word for it
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  lineHeight: 1.385,
                  textAlign: 'center',
                  color: 'rgba(14, 61, 77, 0.7)'
                }}
              >
                My experience in the Riviera Maya was amazing! I chose the places on the site and hired a personalized guide who spoke my language. Since I was traveling with my pet, I needed help, and the guide was super attentive at all times. The tour included transportation and, thanks to his recommendations, I found great places to eat. I enjoyed exploring at my own pace and without large groups. I would definitely repeat.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} sx={{ color: '#0e3d4d', fontSize: '2rem' }} />
                ))}
              </Box>
            </Box>
            
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Box sx={{ 
                position: 'absolute',   
                left: 0, 
                top: 0, 
                bottom: 0, 
                width: 150, 
                background: 'linear-gradient(to right, #ffffff 38.22%, rgba(255, 255, 255, 0) 180.88%)',
                zIndex: 1
              }} />
              
              <Box sx={{ 
                display: 'flex', 
                gap: 8,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                py: 3,
                px: 10
              }}>
                {[
                  { image: img8, name: 'Fede' },
                  { image: img9, name: 'Cesar' },
                  { image: img10, name: 'Sofi' },
                  { image: img11, name: 'Solano', title: 'Tripster' },
                  { image: img12, name: 'Jesus' },
                  { image: img13, name: 'Nacho' },
                  { image: img14, name: 'Karla' }
                ].map((person, index) => (
                  <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, minWidth: 80 }}>
                    <Avatar 
                      src={person.image} 
                      alt={person.name}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          lineHeight: 1.33,
                          color: '#0e3d4d'
                        }}
                      >
                        {person.name}
                      </Typography>
                      {person.title && (
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '1.125rem',
                            lineHeight: 1.2,
                            color: 'rgba(14, 61, 77, 0.8)'
                          }}
                        >
                          {person.title}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ 
                position: 'absolute', 
                right: 0, 
                top: 0, 
                bottom: 0, 
                width: 150, 
                background: 'linear-gradient(to left, #ffffff 38.22%, rgba(255, 255, 255, 0) 180.88%)',
                zIndex: 1
              }} />
            </Box>
          </Container>
        </Box>
      </Box>
  );
};

export default HomePage;