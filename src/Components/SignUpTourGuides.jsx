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
import React, { useRef } from "react";
import img34 from "../assets/img34.png";
import Solano11 from "../assets/Solano11.png";

const tourLocations = [
    "Playa del Carmen", "Cancún", "Tulum", "Cozumel", "Isla Mujeres",
    "Puerto Morelos", "Akumal", "Bacalar", "Mahahual", "Xcaret",
    "Xel-Há", "Sian Ka'an", "Coba", "Chichen Itza", "Valladolid"
];

const languages = [
    "Spanish", "English", "French", "German", "Italian",
    "Portuguese", "Russian", "Japanese", "Chinese", "Korean",
    "Arabic", "Dutch", "Swedish", "Norwegian", "Danish",
    "Hebrew", "Hindi"
];

export default function SignUpTourGuides() {
    const [formData, setFormData] = React.useState({
        dateOfBirth: "",
        languages: [], // Cambio 1: Añadir array para idiomas
    });
    const dateInputRef = useRef(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Cambio 2: Función para manejar múltiples idiomas
    const handleLanguagesChange = (event, newValue) => {
        setFormData(prev => ({
            ...prev,
            languages: newValue
        }));
    };

    const handleDateIconClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
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
                        background: "rgba(0, 0, 0, 0.3)",
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
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 500,
                                color: "#ffffff",
                                fontSize: "17px",
                                textAlign: "center",
                                letterSpacing: "0.90px",
                                lineHeight: "23.8px",
                            }}
                        >
                            Riviera Maya at your own pace: discover, book and live your
                            adventure.
                        </Typography>

                        <Typography
                            sx={{
                                position: "absolute",
                                width: "400px",
                                top: 0,
                                left: "100px",
                                fontFamily: "'Playfair Display', serif",
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
                    {/* Logo */}
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            width: "195px",
                            height: "92px",
                            top: "41px",
                            left: "1170px",
                            objectFit: "cover",
                        }}
                        alt="Logo TC"
                        src={Solano11}
                    />

                    {/* Form Container */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "581px",
                            height: "549px",
                            top: "148px",
                            left: "788px",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: "581px",
                                height: "537px",
                                top: 0,
                                left: 0,
                            }}
                        >
                            {/* Form Header */}
                            <Typography
                                sx={{
                                    position: "absolute",
                                    top: "22px",
                                    left: "15px",
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 600,
                                    color: "#000000",
                                    fontSize: "24px",
                                    letterSpacing: "-0.48px",
                                    lineHeight: "33.6px",
                                }}
                            >
                                Do you want to be a guide? <br />
                                complete the registration application form
                            </Typography>

                            <Typography
                                sx={{
                                    position: "absolute",
                                    top: "97px",
                                    left: "15px",
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 400,
                                    color: "#2d3748",
                                    fontSize: "16px",
                                    letterSpacing: "-0.32px",
                                    lineHeight: "22.4px",
                                }}
                            >
                                Join With Us!
                            </Typography>

                            {/* Personal Information Section */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "583px",
                                    height: "174px",
                                    top: "167px",
                                    left: 0,
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#000000",
                                        fontSize: "16px",
                                        letterSpacing: "-0.32px",
                                        lineHeight: "22.4px",
                                    }}
                                >
                                    Personal information
                                </Typography>

                                <Grid
                                    container
                                    spacing={2}
                                    sx={{ position: "absolute", top: "45px", width: "581px" }}
                                >
                                    <Grid  xs={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Full name"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "3.53px",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid  xs={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Number phone"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "3.53px",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid  xs={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Email"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "3.53px",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid  xs={6}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            name="dateOfBirth"
                                            type="date"
                                            value={formData.dateOfBirth}
                                            onChange={handleChange}
                                            inputRef={dateInputRef}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={handleDateIconClick}
                                                            edge="end"
                                                            sx={{ padding: '4px' }}
                                                        >
                                                            <DateRangeIcon
                                                                sx={{ width: "16px", height: "15px" }}
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "3.53px",
                                                },
                                                "& input[type='date']": {
                                                    position: 'relative',
                                                    '&::-webkit-calendar-picker-indicator': {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'transparent',
                                                        color: 'transparent',
                                                        cursor: 'pointer',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* Service Area Section */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "583px",
                                    height: "158px",
                                    top: "379px",
                                    left: 0,
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#000000",
                                        fontSize: "16px",
                                        letterSpacing: "-0.32px",
                                        lineHeight: "22.4px",
                                    }}
                                >
                                    Service Area
                                </Typography>

                                <Grid
                                    container
                                    spacing={2}
                                    sx={{ position: "absolute", top: "45px", width: "581px" }}
                                >
                                    <Grid xs={6}>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 400,
                                                color: "#2d3748",
                                                fontSize: "14px",
                                                letterSpacing: "-0.28px",
                                                lineHeight: "19.6px",
                                                marginBottom: "8px",
                                            }}
                                        >
                                            City or region where you give tours:
                                        </Typography>
                                        <Autocomplete
                                            options={tourLocations}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    placeholder="Search"
                                                    size="small"
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <SearchIcon fontSize="small" />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: "3.53px",
                                                        },
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid xs={6}>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 400,
                                                color: "#2d3748",
                                                fontSize: "14px",
                                                letterSpacing: "-0.28px",
                                                lineHeight: "19.6px",
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Languages spoken:
                                        </Typography>
                                        {/* Cambio 3: Autocomplete modificado para múltiples idiomas */}
                                        <Autocomplete
                                            multiple
                                            options={languages}
                                            value={formData.languages}
                                            onChange={handleLanguagesChange}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    placeholder={formData.languages.length === 0 ? "Search" : ""}
                                                    size="small"
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <SearchIcon fontSize="small" />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: "3.53px",
                                                        },
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        {/* Description Field */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: "529px",
                                left: "170px",
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 400,
                                color: "#000000",
                                fontSize: "14px",
                                letterSpacing: "-0.28px",
                                lineHeight: "19.6px",
                            }}
                        >
                            Description about you as a guide:
                        </Typography>
                    </Box>

                    {/* Description Text Area */}
                    <TextField
                        multiline
                        rows={3}
                        variant="outlined"
                        fullWidth
                        sx={{
                            position: "absolute",
                            width: "380px",
                            height: "83px",
                            top: "705px",
                            left: "875px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "3.53px",
                            },
                        }}
                    />

                    {/* Divider */}
                    <Divider
                        sx={{
                            position: "absolute",
                            width: "481px",
                            height: "1px",
                            top: "833px",
                            left: "817px",
                        }}
                    />

                    {/* Terms and Conditions */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "875px",
                            left: "939px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label={
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: "12px",
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                >
                                    I agree to all the{" "}
                                    <Link href="#" color="primary" sx={{ color: "#1d836e" }}>
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="#" color="primary" sx={{ color: "#1d836e" }}>
                                        Privacy policy
                                    </Link>
                                </Typography>
                            }
                        />
                    </Box>

                    {/* Submit Button */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "284px",
                            height: "38px",
                            top: "903px",
                            left: "915px",
                        }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                height: "38px",
                                borderRadius: "5px",
                                textTransform: "none",
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 600,
                                fontSize: "12px",
                                backgroundColor: "#6ca99d",
                            }}
                        >
                            Send registration request
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}