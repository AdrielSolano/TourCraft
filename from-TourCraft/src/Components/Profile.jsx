import React from "react";
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    Avatar, Box, Button, Container, Paper, Stack, Typography,
    Grid, Divider, Chip, Card, CardContent
} from "@mui/material";
import {
    AccountCircle, Phone, Email, Person, CalendarToday, 
    LocationOn, Star, AttachMoney, Work, Description
} from '@mui/icons-material';

const Profile = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/Log-in');
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Cargando...</Typography>
            </Box>
        );
    }

    if (!user) {
        return (
            <Container maxWidth="sm" sx={{ mt: 8 }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        No se encontraron datos del usuario
                    </Typography>
                    <Button onClick={() => navigate('/')} variant="contained">
                        Volver al Inicio
                    </Button>
                </Paper>
            </Container>
        );
    }

    const fullName = `${user.nombre} ${user.apellido_paterno} ${user.apellido_materno}`.trim();
    const displayName = `${user.nombre} ${user.apellido_paterno}`.trim();
    const isGuia = user.isGuia === true || user.tipo_persona === 'guia' || user.tipo_persona === 'guía';

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header */}
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                    {isGuia ? "My Guide Profile" : "My Profile"}
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    sx={{ borderColor: '#dc3545', color: '#dc3545' }}
                >
                                            Sign Out
                </Button>
            </Box>

            <Grid container spacing={4}>
                {/* Columna Izquierda - Información Personal */}
                <Grid item xs={12} md={8}>
                    <Card elevation={2} sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                                {isGuia ? "Guide Information" : "Personal Information"}
                            </Typography>
                            
                            <Grid container spacing={3}>
                                {/* Nombre */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Person sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Nombre
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.nombre || 'No especificado'}
                                    </Typography>
                                </Grid>

                                {/* Apellido Paterno */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Person sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Apellido Paterno
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.apellido_paterno || 'No especificado'}
                                    </Typography>
                                </Grid>

                                {/* Apellido Materno */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Person sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Apellido Materno
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.apellido_materno || 'No especificado'}
                                    </Typography>
                                </Grid>

                                {/* Teléfono */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Phone sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Teléfono
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.telefono || 'No especificado'}
                                    </Typography>
                                </Grid>

                                {/* Edad */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <CalendarToday sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Edad
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.edad ? `${user.edad} años` : 'No especificada'}
                                    </Typography>
                                </Grid>

                                {/* Email */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Email sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Email
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.email || 'No especificado'}
                                    </Typography>
                                </Grid>

                                {/* Ubicación */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <LocationOn sx={{ mr: 1, color: '#7bbcb0' }} />
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Ubicación
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.ubicacion || 'No especificada'}
                                    </Typography>
                                </Grid>

                                {/* Campos específicos de guía */}
                                {isGuia && (
                                    <>
                                        {/* Tarifa por Hora */}
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <AttachMoney sx={{ mr: 1, color: '#7bbcb0' }} />
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    Tarifa por Hora
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {user.tarifa_hora ? `$${user.tarifa_hora}/hora` : 'No especificada'}
                                            </Typography>
                                        </Grid>

                                        {/* Calificación */}
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Star sx={{ mr: 1, color: '#7bbcb0' }} />
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    Calificación
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {user.calificación ? `${user.calificación}/5 ⭐` : 'Sin calificaciones'}
                                            </Typography>
                                        </Grid>

                                        {/* Disponibilidad */}
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Work sx={{ mr: 1, color: '#7bbcb0' }} />
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    Disponibilidad
                                                </Typography>
                                            </Box>
                                            <Chip 
                                                label={user.disponibilidad ? "Disponible" : "No disponible"} 
                                                color={user.disponibilidad ? "success" : "error"}
                                                variant="outlined"
                                            />
                                        </Grid>

                                        {/* Descripción */}
                                        <Grid item xs={12}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Description sx={{ mr: 1, color: '#7bbcb0' }} />
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    Descripción
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {user.descripción || 'No especificada'}
                                            </Typography>
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Columna Derecha - Información de Cuenta */}
                <Grid item xs={12} md={4}>
                    <Stack spacing={3}>
                        {/* Avatar y Info Básica */}
                        <Card elevation={2} sx={{ borderRadius: 2 }}>
                            <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                <Avatar
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        mx: 'auto',
                                        mb: 2,
                                        bgcolor: '#7bbcb0',
                                        fontSize: '3rem'
                                    }}
                                >
                                    <AccountCircle sx={{ fontSize: 'inherit' }} />
                                </Avatar>
                                
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    {displayName}
                                </Typography>
                                
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {user.email}
                                </Typography>
                                
                                <Chip 
                                    label={isGuia ? "Tour Guide" : "Regular User"} 
                                    color="primary" 
                                    variant="outlined"
                                    sx={{ borderRadius: 2 }}
                                />
                            </CardContent>
                        </Card>

                        {/* Información de Cuenta */}
                        <Card elevation={2} sx={{ borderRadius: 2 }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
                                    Account Information
                                </Typography>
                                
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            User ID
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {user.id?.substring(0, 8)}...
                                        </Typography>
                                    </Box>
                                    
                                    <Divider />
                                    
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Member since
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                    
                                    <Divider />
                                    
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Last updated
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {new Date(user.updatedAt).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;

