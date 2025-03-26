import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GoogleIcon from "@mui/icons-material/Google";
import {
    Box,
    Button,
    Checkbox,
    CssBaseline,
    Grid,
    InputAdornment,
    Link,
    TextField,
    ThemeProvider as MuiThemeProvider,
    Typography,
    createTheme,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import image52 from "../assets/image52.png";
import Solano11 from "../assets/Solano11.png";
import { Link as RouterLink } from 'react-router';

// Theme definition
const appTheme = createTheme({
    palette: {
        primary: {
            main: "rgba(0, 122, 255, 1)",
        },
        secondary: {
            main: "rgba(45, 55, 72, 1)",
        },
        error: {
            main: "rgba(220, 27, 36, 1)",
        },
        text: {
            primary: "rgba(29, 29, 29, 1)",
            secondary: "rgba(51, 51, 51, 1)",
        },
        background: {
            default: "rgba(255, 255, 255, 1)",
        },
        divider: "rgba(209, 209, 209, 1)",
    },
    typography: {
        fontFamily: "Poppins, Helvetica",
        h1: {
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "29.2px",
        },
        h2: {
            fontSize: "19.8px",
            fontWeight: 600,
            lineHeight: "27.7px",
        },
        subtitle1: {
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: "23.8px",
        },
        body1: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16.8px",
        },
        body2: {
            fontSize: "9.9px",
            fontWeight: 400,
            lineHeight: "13.8px",
        },
        button: {
            fontSize: "9.9px",
            fontWeight: 600,
            textTransform: "none",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16.8px",
                },
                head: {
                    fontSize: "17px",
                    fontWeight: 500,
                    lineHeight: "23.8px",
                },
                body: {
                    fontSize: "9.9px",
                    fontWeight: 400,
                    lineHeight: "13.8px",
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: "17px",
                    fontWeight: 500,
                    lineHeight: "23.8px",
                },
                secondary: {
                    fontSize: "9.9px",
                    fontWeight: 400,
                    lineHeight: "13.8px",
                },
            },
        },
    },
});

// ThemeProvider component
export function ThemeProvider({ children }) {
    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
}

// SignIn component with ThemeProvider wrapper
export default function SignIn() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Render the appropriate view based on screen size
    const renderContent = () => {
        // Desktop view - close to original layout
        if (!isMobile) {
            return (
                <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
                    <Box width="100%" maxWidth="1536px" height="780px" position="relative">
                        {/* Left Side - Image Area */}
                        <Box
                            position="absolute"
                            width="691px"
                            height="671px"
                            top="55px"
                            left="0"
                        >
                            <Box
                                position="relative"
                                width="687px"
                                height="671px"
                                sx={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image52})`,
                                    backgroundSize: "100% 100%",
                                }}
                            >

                                <Box
                                    position="absolute"
                                    width="38px"
                                    height="3.5px"
                                    top="610px"
                                    left="324px"
                                >
                                    <Box
                                        display="flex"
                                        width="38px"
                                        alignItems="center"
                                        justifyContent="center"
                                        gap="11.29px"
                                        position="relative"
                                    >
                                        <Box
                                            width="7.06px"
                                            height="7.06px"
                                            ml="-4.39px"
                                            borderRadius="3.53px"
                                            border="0.71px solid white"
                                        />
                                        <Box position="relative" width="10.58px" height="14.11px">
                                            <Box position="relative" width="11px" height="15px">
                                                <Box
                                                    position="absolute"
                                                    width="7px"
                                                    height="7px"
                                                    top="1px"
                                                    left="0"
                                                    bgcolor="white"
                                                    borderRadius="3.53px"
                                                    border="0.71px solid white"
                                                />
                                            </Box>
                                        </Box>
                                        <Box
                                            width="7.06px"
                                            height="7.06px"
                                            mr="-4.39px"
                                            borderRadius="3.53px"
                                            border="0.71px solid white"
                                        />
                                    </Box>
                                </Box>
                                <Typography
                                    position="absolute"
                                    width="414px"
                                    top="258px"
                                    left="136px"
                                    fontFamily="Poppins, Helvetica"
                                    fontWeight="500"
                                    color="white"
                                    fontSize="17px"
                                    textAlign="center"
                                    lineHeight="23.8px"
                                    sx={{
                                        textShadow: "0px 1px 3px rgba(0,0,0,0.8)"
                                    }}
                                >
                                    Riviera Maya at your own pace: discover, book and live your
                                    adventure.
                                </Typography>
                                <Typography
                                    position="absolute"
                                    width="276px"
                                    top="172px"
                                    left="205px"
                                    fontFamily="Poppins, Helvetica"
                                    fontWeight="700"
                                    color="white"
                                    fontSize="40px"
                                    textAlign="center"
                                    lineHeight="29.2px"
                                    sx={{
                                        textShadow: "0px 2px 4px rgba(0,0,0,0.8)"
                                    }}
                                >
                                    Explore&nbsp;&nbsp;
                                    Riviera Maya
                                </Typography>
                            </Box>
                        </Box>

                        {/* Right Side - Form Area */}
                        <Box
                            position="absolute"
                            width="610px"
                            height="393px"
                            top="221px"
                            left="792px"
                        >
                            <Typography
                                position="absolute"
                                width="172px"
                                top="381px"
                                left="230px"
                                fontFamily="Poppins, Helvetica"
                                fontWeight="400"
                                color="transparent"
                                fontSize="9.9px"
                                lineHeight="13.8px"
                                whiteSpace="nowrap"
                            >
                                <span style={{ color: "#2d3748" }}>Already have an account? </span>
                                <Link href="#" color="#007aff">
                                    Log In
                                </Link>
                            </Typography>
                            <Box
                                position="absolute"
                                width="610px"
                                height="323px"
                                top="34px"
                                left="0"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<GoogleIcon />}
                                    sx={{
                                        position: "absolute",
                                        width: "291px",
                                        height: "37px",
                                        top: "286px",
                                        left: "317px",
                                        borderRadius: "3.53px",
                                        backgroundColor: "rgba(45, 55, 72, 1)",
                                        fontFamily: "Poppins, Helvetica",
                                        fontWeight: "600",
                                        fontSize: "9.9px",
                                        textTransform: "none",
                                    }}
                                >
                                    Sign-in with google
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        position: "absolute",
                                        width: "291px",
                                        height: "37px",
                                        top: "286px",
                                        left: "0",
                                        borderRadius: "3.53px",
                                        backgroundColor: "rgba(0, 122, 255, 1)",
                                        fontFamily: "Poppins, Helvetica",
                                        fontWeight: "600",
                                        fontSize: "9.9px",
                                        textTransform: "none",
                                    }}
                                >
                                    Create account
                                </Button>
                                <Link
                                    href="#"
                                    sx={{
                                        position: "absolute",
                                        width: "99px",
                                        top: "206px",
                                        left: "300px",
                                        fontFamily: "Poppins, Helvetica",
                                        fontWeight: "400",
                                        color: "rgba(0, 122, 255, 1)",
                                        fontSize: "9.9px",
                                        textAlign: "right",
                                        lineHeight: "13.8px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Forgot password?
                                </Link>
                                <Box
                                    display="flex"
                                    width="227px"
                                    height="15px"
                                    alignItems="center"
                                    gap="8.47px"
                                    position="absolute"
                                    top="246px"
                                    left="0"
                                >
                                    <Checkbox
                                        sx={{
                                            width: "14.11px",
                                            height: "14.11px",
                                            borderRadius: "1.41px",
                                            border: "0.71px solid rgba(209, 209, 209, 1)",
                                        }}
                                    />
                                    <Typography
                                        fontFamily="Poppins, Helvetica"
                                        fontWeight="400"
                                        color="rgba(45, 55, 72, 1)"
                                        fontSize="9.9px"
                                        lineHeight="13.8px"
                                        whiteSpace="nowrap"
                                    >
                                        I agree to all the{" "}
                                        <Link href="#" color="#007aff">
                                            Terms
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="#" color="#007aff">
                                            Privacy policy
                                        </Link>
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    width="97px"
                                    height="15px"
                                    alignItems="center"
                                    gap="8.47px"
                                    position="absolute"
                                    top="219px"
                                    left="0"
                                >
                                    <Checkbox
                                        sx={{
                                            width: "14.11px",
                                            height: "14.11px",
                                            borderRadius: "1.41px",
                                            border: "0.71px solid rgba(209, 209, 209, 1)",
                                        }}
                                    />
                                    <Typography
                                        fontFamily="Poppins, Helvetica"
                                        fontWeight="400"
                                        color="rgba(45, 55, 72, 1)"
                                        fontSize="9.9px"
                                        lineHeight="13.8px"
                                        whiteSpace="nowrap"
                                    >
                                        Remember me
                                    </Typography>
                                </Box>
                                <Box
                                    position="absolute"
                                    width="597px"
                                    height="200px"
                                    top="0"
                                    left="0"
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="First name"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Last name"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Email or phone number"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Date of birth (MM/DD/YY)"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <CalendarTodayIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Confirm password"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontFamily: "Poppins, Helvetica",
                                                        fontSize: "12px",
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Typography
                                position="absolute"
                                width="fit-content"
                                top="0"
                                left="0"
                                fontFamily="Poppins, Helvetica"
                                fontWeight="600"
                                color="black"
                                fontSize="19.8px"
                                lineHeight="27.7px"
                                whiteSpace="nowrap"
                            >
                                Create account
                            </Typography>
                        </Box>

                        {/* Back button */}
                        <Button
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                position: "absolute",
                                top: "118px",
                                left: "754px",
                                borderRadius: "12px",
                                fontFamily: "Open Sans, Helvetica",
                                fontWeight: "600",
                                fontSize: "16px",
                                color: "rgba(51, 51, 51, 1)",
                                textTransform: "none",
                            }}
                        >
                            Back
                        </Button>

                        {/* Logo */}
                        <Box
                            position="absolute"
                            width="207px"
                            height="103px"
                            top="75px"
                            left="1276px"
                            sx={{
                                backgroundImage: `url(${Solano11})`,
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        />
                    </Box>
                </Box>
            );
        }

        // Mobile view - responsive layout
        return (
            <Box display="flex" justifyContent="center" width="100%" bgcolor="white" px={2} py={3}>
                <Box width="100%" maxWidth="500px">
                    {/* Header with back button and logo */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                fontFamily: "Open Sans, Helvetica",
                                fontWeight: "600",
                                fontSize: "14px",
                                color: "rgba(51, 51, 51, 1)",
                                textTransform: "none",
                                p: 0,
                            }}
                        >
                            Back
                        </Button>
                        <Box
                            sx={{
                                width: "100px",
                                height: "50px",
                                backgroundImage: `url(${Solano11})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </Box>

                    {/* Main content */}
                    <Box mb={4}>
                        <Typography
                            fontFamily="Poppins, Helvetica"
                            fontWeight="600"
                            color="black"
                            fontSize="18px"
                            mb={3}
                        >
                            Create account
                        </Typography>

                        {/* Form fields */}
                        <Grid container spacing={2} mb={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="First name"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Last name"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email or phone number"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Date of birth (MM/DD/YY)"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CalendarTodayIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Confirm password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            fontFamily: "Poppins, Helvetica",
                                            fontSize: "12px",
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Remember me and forgot password */}
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                            <Box display="flex" alignItems="center">
                                <Checkbox
                                    sx={{
                                        padding: 0,
                                        marginRight: "8px",
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "1.4px",
                                    }}
                                />
                                <Typography
                                    fontFamily="Poppins, Helvetica"
                                    fontWeight="400"
                                    color="rgba(45, 55, 72, 1)"
                                    fontSize="10px"
                                >
                                    Remember me
                                </Typography>
                            </Box>
                            <Link
                                href="#"
                                sx={{
                                    fontFamily: "Poppins, Helvetica",
                                    fontWeight: "400",
                                    color: "rgba(0, 122, 255, 1)",
                                    fontSize: "10px",
                                }}
                            >
                                Forgot password?
                            </Link>
                        </Box>

                        {/* Terms and conditions */}
                        <Box display="flex" alignItems="center" mb={3}>
                            <Checkbox
                                sx={{
                                    padding: 0,
                                    marginRight: "8px",
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "1.4px",
                                }}
                            />
                            <Typography
                                fontFamily="Poppins, Helvetica"
                                fontWeight="400"
                                color="rgba(45, 55, 72, 1)"
                                fontSize="10px"
                            >
                                I agree to all the{" "}
                                <Link href="#" color="#007aff">
                                    Terms
                                </Link>{" "}
                                and{" "}
                                <Link href="#" color="#007aff">
                                    Privacy policy
                                </Link>
                            </Typography>
                        </Box>

                        {/* Buttons */}
                        <Box mb={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    mb: 2,
                                    borderRadius: "3.5px",
                                    backgroundColor: "rgba(0, 122, 255, 1)",
                                    fontFamily: "Poppins, Helvetica",
                                    fontWeight: "600",
                                    fontSize: "10px",
                                    padding: "10px 0",
                                    textTransform: "none",
                                }}
                            >
                                Create account
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<GoogleIcon />}
                                fullWidth
                                sx={{
                                    borderRadius: "3.5px",
                                    backgroundColor: "rgba(45, 55, 72, 1)",
                                    fontFamily: "Poppins, Helvetica",
                                    fontWeight: "600",
                                    fontSize: "10px",
                                    padding: "10px 0",
                                    textTransform: "none",
                                }}
                            >
                                Sign-in with google
                            </Button>
                        </Box>

                        {/* Login link */}
                        <Box textAlign="center">
                            <Typography
                                fontFamily="Poppins, Helvetica"
                                fontWeight="400"
                                fontSize="10px"
                            >
                                <span style={{ color: "#2d3748" }}>Already have an account? </span>
                                <Link
                                    component={RouterLink}
                                    to="/SignUp"
                                    color="#007aff"
                                    underline="none"
                                    sx={{
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    Log In
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    };

    // Use ThemeProvider to wrap the content
    return (
        <ThemeProvider>
            {renderContent()}
        </ThemeProvider>
    );
}