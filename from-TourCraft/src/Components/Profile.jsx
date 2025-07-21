import React from 'react';
import { 
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { ArrowBack, Edit, CalendarToday, LocationOn, Cake } from '@mui/icons-material';

const Profile = () => {
  return (
    <Box sx={{ 
      maxWidth: 1512,
      mx: 'auto',
      px: { xs: 2, md: 13 },
      py: { xs: 3, md: 6 }
    }}>
      {/* Back Button */}
      <Button 
        startIcon={<ArrowBack />}
        sx={{
          mb: { xs: 3, md: 7 },
          color: '#333',
          fontWeight: 600,
          fontSize: 18
        }}
      >
        Back
      </Button>

      {/* Title */}
      <Typography 
        variant="h1" 
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontSize: 32,
          color: '#333',
          mb: { xs: 4, md: 8.375 }
        }}
      >
        My Profile
      </Typography>

      {/* Profile Content */}
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Sidebar */}
        <Box sx={{
          width: { md: 362 },
          p: { xs: 3, md: 5 },
          borderRight: { md: '1px solid #f4f4f5' }
        }}>
          {/* Avatar */}
          <Box sx={{ 
            position: 'relative', 
            width: 145, 
            height: 145, 
            mx: 'auto',
            mb: 3.75
          }}>
            <Avatar 
              src="/path-to-avatar.jpg" 
              sx={{ 
                width: '100%', 
                height: '100%',
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)'
              }} 
            />
            <IconButton
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                bgcolor: 'white',
                width: 43,
                height: 43,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Edit sx={{ color: 'primary.main' }} />
            </IconButton>
          </Box>

          {/* Name */}
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              fontSize: 24, 
              color: '#1c2b38',
              mb: 1.875,
              textAlign: 'center'
            }}
          >
            David Fraga
          </Typography>

          {/* Meta Info */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: 2.5,
            mb: 6.25
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" sx={{ color: '#495560' }} />
              <Typography sx={{ fontWeight: 600, fontSize: 14, color: '#495560' }}>
                Playa del Carmen
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#c7cdd0', height: 14 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Cake fontSize="small" sx={{ color: '#495560' }} />
              <Typography sx={{ fontWeight: 600, fontSize: 14, color: '#495560' }}>
                15th February
              </Typography>
            </Box>
          </Box>

          {/* Navigation */}
          <List sx={{ textAlign: 'left' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  py: 3.125,
                  pl: 4.5,
                  borderBottom: '1px solid #f4f4f5',
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 700
                }}
              >
                <ListItemText primary="Profile Informations" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  py: 3.125,
                  pl: 4.5,
                  borderBottom: '1px solid #f4f4f5',
                  color: '#1c2b38',
                  fontWeight: 600
                }}
              >
                <ListItemText primary="Booking History" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  py: 3.125,
                  pl: 4.5,
                  borderBottom: '1px solid #f4f4f5',
                  color: '#1c2b38',
                  fontWeight: 600
                }}
              >
                <ListItemText primary="Manage Notifications" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: { xs: 3, md: 6 } }}>
          {/* Personal Information Form */}
          <Box component="form" sx={{ mb: 5 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                fontSize: 20, 
                color: '#1c2b38',
                mb: 3
              }}
            >
              Personal Information
            </Typography>

            <Grid container spacing={3} sx={{ mb: 5 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  value="David Dominguez Fraga"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Date of Birth"
                  value="15/03/1886"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarToday sx={{ color: '#495560' }} />
                      </InputAdornment>
                    ),
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone"
                  value="+52-984 3945 658"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  value="Playa del Carmen"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 700,
                fontSize: 15,
                py: '23px',
                width: { xs: '100%', md: 337 },
                borderRadius: '4px'
              }}
            >
              Save
            </Button>
          </Box>

          <Divider sx={{ my: 5, bgcolor: '#f4f4f5' }} />

          {/* Security Form */}
          <Box component="form">
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                fontSize: 20, 
                color: '#1c2b38',
                mb: 3
              }}
            >
              Security
            </Typography>

            <Grid container spacing={3} sx={{ mb: 5 }}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  value="masumrana15@gmail.com"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Password"
                  type="password"
                  value="**********"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  value="**********"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      bgcolor: '#f4f4f5',
                      borderRadius: '4px',
                      p: '23px 20px',
                      '& .MuiInputBase-input': {
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#495560'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1c2b38',
                      transform: 'translate(20px, 23px) scale(1)',
                      '&.Mui-focused': {
                        transform: 'translate(20px, 9px) scale(0.75)'
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 700,
                fontSize: 15,
                py: '23px',
                width: { xs: '100%', md: 337 },
                borderRadius: '4px'
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;