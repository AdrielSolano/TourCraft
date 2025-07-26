import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import David from '../assets/david.png';


// Mock data for profile
const profileData = {
    name: "David Dominguez Fraga",
    displayName: "David Fraga",
    dateOfBirth: "15/03/1886",
    phone: "+52-984 3945 658",
    location: "Playa del Carmen",
    email: "masumrana15@gmail.com",
    password: "**********",
    img: David,
    profileImage: David,
};

const Profile = () => {
    return (
        <Box sx={{ bgcolor: "#ffffff", width: "100%" }}>
            <Container maxWidth="xl" sx={{ position: "relative", py: 4 }}>
              

                {/* Back Button */}
                <Button
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        mb: 4,
                        fontFamily: "Open Sans",
                        fontWeight: 600,
                        fontSize: "18px",
                        color: "#000000",
                        textTransform: "none",
                    }}
                >
                    Back
                </Button>

                {/* Page Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Open Sans",
                        fontWeight: 800,
                        mb: 4,
                    }}
                >
                    My Profile
                </Typography>

                {/* Main Content */}
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: 1,
                        overflow: "hidden",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Box sx={{ display: "flex", height: "100%" }}>
                        {/* Left Sidebar */}
                        <Box sx={{ width: 360, borderRight: "1px solid #f1f1f1" }}>
                            {/* Profile Image and Info */}
                            <Box sx={{ p: 4, textAlign: "center" }}>
                                <Avatar
                                    src={profileData.profileImage}
                                    sx={{
                                        width: 205,
                                        height: 205,
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Mulish",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    {profileData.displayName}
                                </Typography>

                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    divider={
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{ bgcolor: "#c6cdd0", height: 14 }}
                                        />
                                    }
                                >
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <LocationOnIcon sx={{ fontSize: 14, color: "#666" }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 600,
                                                color: "#666",
                                            }}
                                        >
                                            {profileData.location}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <CalendarTodayIcon sx={{ fontSize: 14, color: "#666" }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 600,
                                                color: "#666",
                                            }}
                                        >
                                            15th February
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>

                            <Divider />

                            {/* Navigation Menu */}
                            <List disablePadding>
                                <ListItem
                                    button
                                    selected
                                    sx={{
                                        bgcolor: "#7bbcb0",
                                        color: "#ffffff",
                                        py: 3,
                                        "&.Mui-selected": {
                                            bgcolor: "#7bbcb0",
                                        },
                                        "&.Mui-selected:hover": {
                                            bgcolor: "#6aa99d",
                                        },
                                    }}
                                    onClick={() => {}}
                                >
                                    <ListItemText
                                        primary="Profile Informations"
                                        primaryTypographyProps={{
                                            fontFamily: "Mulish",
                                            fontWeight: 700,
                                            fontSize: 16,
                                        }}
                                        sx={{ ml: 2 }}
                                    />
                                </ListItem>
                                <ListItem button sx={{ py: 2.5 }} onClick={() => {}}>
                                    <ListItemText
                                        primary="Booking History"
                                        primaryTypographyProps={{
                                            fontFamily: "Mulish",
                                            fontWeight: 600,
                                            fontSize: 16,
                                        }}
                                        sx={{ ml: 2 }}
                                    />
                                </ListItem>
                                <ListItem button sx={{ py: 2.5 }} onClick={() => {}}>
                                    <ListItemText
                                        primary="Manage Notifications"
                                        primaryTypographyProps={{
                                            fontFamily: "Mulish",
                                            fontWeight: 600,
                                            fontSize: 16,
                                        }}
                                        sx={{ ml: 2 }}
                                    />
                                </ListItem>
                            </List>
                        </Box>

                        {/* Main Content Area */}
                        <Box sx={{ flex: 1, p: 4 }}>
                            {/* Personal Information Section */}
                            <Box sx={{ mb: 8 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Mulish",
                                        fontWeight: 700,
                                        mb: 3,
                                    }}
                                >
                                    Personal Information
                                </Typography>

                                <Stack spacing={3}>
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Name:
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            value={profileData.name}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Date Of Birth
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            value={profileData.dateOfBirth}
                                            InputProps={{
                                                readOnly: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton edge="end">
                                                            <CalendarMonthIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Phone
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            value={profileData.phone}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Location
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            value={profileData.location}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#7bbcb0",
                                            width: 337,
                                            height: 65,
                                            fontFamily: "Mulish",
                                            fontWeight: 700,
                                            fontSize: 15,
                                            mt: 2,
                                            "&:hover": { bgcolor: "#6aa99d" },
                                        }}
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Box>

                            <Divider sx={{ my: 4 }} />

                            {/* Security Section */}
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Mulish",
                                        fontWeight: 700,
                                        mb: 3,
                                    }}
                                >
                                    Security
                                </Typography>

                                <Stack spacing={3}>
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Email Address
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            value={profileData.email}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            value={profileData.password}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "Mulish",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            Confirm Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            value={profileData.password}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    bgcolor: "#f5f5f5",
                                                    fontFamily: "Mulish",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: "#666",
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#7bbcb0",
                                            width: 337,
                                            height: 65,
                                            fontFamily: "Mulish",
                                            fontWeight: 700,
                                            fontSize: 15,
                                            mt: 2,
                                            "&:hover": { bgcolor: "#6aa99d" },
                                        }}
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Profile;
