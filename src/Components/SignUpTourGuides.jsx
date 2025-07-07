import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    InputAdornment,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { Autocomplete } from "@mui/material";
import React from "react";
import img34 from "../assets/img34.png"; // Background image
import Solano11 from "../assets/Solano11.png"; // Logo image

// In a real implementation, these would be fetched from an API
const tourLocations = [];
const languages = [];

export default function SignUpTourGuides() {
    return (
        <Box
            sx={{
                bgcolor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: "1440px",
                    height: "1024px",
                    position: "relative",
                    bgcolor: "#ffffff",
                }}
            >
                {/* Left side with background image */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "679px",
                        height: "1024px",
                        top: 0,
                        left: 0,
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            width: "679px",
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
                            left: "46px",
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
                                letterSpacing: "-0.34px",
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

                {/* Logo */}
                <Box
                    component="img"
                    sx={{
                        position: "absolute",
                        width: "195px",
                        height: "92px",
                        top: "41px",
                        left: "1193px",
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
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        placeholder="Date of birth (MM/DD/YY)"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <CalendarTodayIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "3.53px",
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
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
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
                                    <Autocomplete
                                        options={languages}
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
                            backgroundColor: "#1976d2",
                        }}
                    >
                        Send registration request
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
