import DateRangeIcon from "@mui/icons-material/DateRange";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { Autocomplete } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img34 from "../assets/img34.png";
import Solano11 from "../assets/Solano11.png";
import { Link as RouterLink } from 'react-router-dom';


export default function SignUpTourGuides() {
    const navigate = useNavigate();
    const [idiomas, setIdiomas] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        email: "",
        password: "",
        telefono: "",
        edad: "",
        descripcion: "",
        tarifa_hora: "",
        languages: [],
    });
    const dateInputRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/idiomas")
            .then(res => setIdiomas(res.data))
            .catch(() => setIdiomas([]));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLanguagesChange = (event, newValue) => {
        setFormData(prev => ({
            ...prev,
            languages: newValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/smart-auth/register", {
                nombre: formData.nombre,
                apellido_paterno: formData.apellido_paterno,
                apellido_materno: formData.apellido_materno,
                email: formData.email,
                password: formData.password,
                telefono: formData.telefono,
                edad: parseInt(formData.edad) || 0,
                tipo_persona: "guia",
                descripción: formData.descripcion,
                tarifa_hora: parseFloat(formData.tarifa_hora) || 0,
                id_ubicación: null,
                certificado_id: null,
                zona_turistica_id: null
            });
            alert("Guía registrado correctamente");
            navigate("/Log-in");
        } catch (err) {
            alert("Error al registrar guía: " + (err.response?.data?.message || "Error desconocido"));
            console.error(err);
        }
    };

    return (
        <Box
            sx={{
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                width: "1440px",
                height: "988px",
            }}
        >
            <Box
                sx={{
                    width: "1440px",
                    height: "1024px",
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: "white",
                    marginLeft: "-18px",
                    marginTop: "-8px",
                }}
            >
                {/* Left side with background image */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "755px",
                        height: "1024px",
                        top: 0,
                        left: 0,
                        background: "rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            width: "755px",
                            height: "1024px",
                            top: 0,
                            left: 0,
                        }}
                        alt="Background"
                        src={img34}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            width: "604px",
                            height: "540px",
                            top: "117px",
                            left: "80px",
                        }}
                    >
                        <Typography
                            sx={{
                                position: "absolute",
                                width: "600px",
                                top: "478px",
                                left: 0,
                                fontFamily: "Playfair Display",
                                fontWeight: 500,
                                color: "#ffffff",
                                fontSize: "17px",
                                textAlign: "center",
                                letterSpacing: "0.90px",
                                lineHeight: "23.8px",
                            }}
                        >
                            Riviera Maya at your own pace: discover, book and live your adventure.
                        </Typography>
                        <Typography
                            sx={{
                                position: "absolute",
                                width: "400px",
                                top: 0,
                                left: "100px",
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                color: "#ffffff",
                                fontSize: "40px",
                                textAlign: "center",
                                lineHeight: "29.2px",
                            }}
                        >
                            Explore The Riviera Maya
                        </Typography>
                    </Box>
                </Box>
                {/* Right side with login form */}
                <Box
                    sx={{
                        height: "1024px",
                        display: "flex",
                        left: '70px',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        marginTop: "30px",
                    }}
                >
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            position: "absolute",
                            width: "195px",
                            height: "92px",
                            top: "41px",
                            left: "1170px",
                            display: "block", // para que el box tenga tamaño
                        }}
                    >
                        <img
                            src={Solano11}
                            alt="Logo TC"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>

                    {/* Form Container */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "581px",
                            height: "549px",
                            top: "230px",
                            left: "788px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                width: "100%",
                                height: "100%",
                                p: 0,
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: "transparent",
                                fontFamily: "Playfair Display",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 600,
                                    color: "#000000",
                                    fontSize: "24px",
                                    letterSpacing: "-0.48px",
                                    lineHeight: "33.6px",
                                    mb: 2,
                                    textAlign: "center"
                                }}
                            >
                                Do you want to be a guide? <br />
                                complete the registration application form
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 400,
                                    color: "#2d3748",
                                    fontSize: "16px",
                                    letterSpacing: "-0.32px",
                                    lineHeight: "22.4px",
                                    mb: 2,
                                    textAlign: "center"
                                }}
                            >
                                Join With Us!
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Apellido Paterno"
                                        name="apellido_paterno"
                                        value={formData.apellido_paterno}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Apellido Materno"
                                        name="apellido_materno"
                                        value={formData.apellido_materno}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Contraseña"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Teléfono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Edad"
                                        name="edad"
                                        value={formData.edad}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        multiple
                                        options={idiomas}
                                        getOptionLabel={(option) => option.nombre}
                                        value={formData.languages}
                                        onChange={handleLanguagesChange}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Idiomas" size="small" />
                                        )}
                                        sx={{ width: "100%", fontFamily: "Playfair Display" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Descripción"
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        multiline
                                        rows={2}
                                        sx={{
                                            mb: 2,
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Tarifa por hora"
                                        name="tarifa_hora"
                                        value={formData.tarifa_hora}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
                                                fontFamily: "Playfair Display"
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    width: "284px",
                                    height: "38px",
                                    borderRadius: "5px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    backgroundColor: "#6ca99d",
                                    fontFamily: "Inter",
                                }}
                            >
                                Send registration request
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}