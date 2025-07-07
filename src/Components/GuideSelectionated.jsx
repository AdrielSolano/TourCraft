import ArrowBack from "@mui/icons-material/ArrowBack";
import CardTravel from "@mui/icons-material/CardTravel";
import CheckCircle from "@mui/icons-material/CheckCircle";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import DirectionsWalk from "@mui/icons-material/DirectionsWalk";
import Explore from "@mui/icons-material/Explore";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Language from "@mui/icons-material/Language";
import LocalTaxi from "@mui/icons-material/LocalTaxi";
import LocationOn from "@mui/icons-material/LocationOn";
import Star from "@mui/icons-material/Star";
import Work from "@mui/icons-material/Work";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import p2 from "../assets/p2.png";
import adriel from "../assets/adriel.png";
import jesus from "../assets/jesus.png";

const calendarData = {
  month: "December",
  year: "2022",
  days: [
    ["", "", "", "", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", ""],
  ],
  unavailableDates: ["1", "12"],
  availableDates: ["24"],
};

const reviewsData = [
  {
    id: 1,
    name: "Rafa Camal",
    rating: 5,
    date: "2 October 2012",
    title: "Veloo",
    content:
      "The tour was very well organised. One minus is that you get completely bombarded with information...",
    image: adriel,
    verified: true,
  },
  {
    id: 2,
    name: "Yisus",
    rating: 5,
    date: "2 October 2012",
    title: "Good Tour, Really Well Organised",
    content:
      "The tour was very well organised. One minus is that you get completely bombarded with information...",
    image: jesus,
    verified: true,
  },
];

const tourCategories = [
  { label: "Business Tours", color: "#fb3131", icon: CardTravel },
  { label: "Nature & Adventure", color: "#7bbcb0", icon: Explore },
  { label: "Transportation", color: "#e4b613", icon: LocalTaxi },
  { label: "Local Visit", color: "#5b9bde", icon: DirectionsWalk },
  { label: "Pet Friendly", color: "#d175e0", icon: DirectionsBus },
];

const GuideSelectionated = () => {
  const [selectedDate, setSelectedDate] = useState("24");

  const renderCalendarDay = (day, rowIndex, dayIndex) => {
    if (!day) return <Box key={dayIndex} sx={{ width: 32, height: 32 }} />;
    const isUnavailable = calendarData.unavailableDates.includes(day);
    const isAvailable = calendarData.availableDates.includes(day);

    return (
      <Box
        key={dayIndex}
        onClick={() => setSelectedDate(day)}
        sx={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: isAvailable ? 1 : 0,
          backgroundColor: isUnavailable
            ? "#ff3232"
            : isAvailable
            ? "#80b9ad"
            : "transparent",
          color: isUnavailable || isAvailable ? "white" : "#333333",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 16 }}>{day}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        <Button startIcon={<ArrowBack />} sx={{ mb: 4, color: "#000", fontWeight: 600 }}>Back</Button>

        <Grid container spacing={4}>
          {/* Profile and Calendar */}
          <Grid item xs={12} md={6}>
            <Box component="img" src={p2} alt="Profile" sx={{ width: "100%", height: 400, borderRadius: 2, objectFit: "cover" }} />
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {[1, 2, 3].map((i) => (
                <Box key={i} component="img" src={p2} sx={{ width: 120, height: 80, borderRadius: 1, objectFit: "cover" }} />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>David Dominguez</Typography>
              <Typography variant="h5" sx={{ color: "#80b9ad", fontWeight: 800 }}>$34 / day</Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>

              {/* Calendar */}
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>{calendarData.month} {calendarData.year}</Typography>
                      <Box>
                        <IconButton><ChevronLeft /></IconButton>
                        <IconButton><ChevronRight /></IconButton>
                      </Box>
                    </Stack>
                    <Grid container>
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <Grid item xs key={day}>
                          <Typography align="center" variant="caption">{day}</Typography>
                        </Grid>
                      ))}
                    </Grid>
                    {calendarData.days.map((week, i) => (
                      <Grid container key={i}>
                        {week.map((day, j) => (
                          <Grid item xs key={j}>
                            <Box sx={{ display: "flex", justifyContent: "center", py: 0.5 }}>
                              {renderCalendarDay(day, i, j)}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Select Guide Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button  
                 variant="contained" 
                    component="a"
                    href="/BookingSimulation"
                 sx={{ backgroundColor: "#80b9ad", px: 3, py: 1, fontWeight: 600 }}>
                  Selected as a guide!
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        

        {/* Tour Categories */}
        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 6 }}>
          {tourCategories.map(({ label, icon: Icon, color }) => (
            <Chip
              key={label}
              icon={<Icon sx={{ color }} />}
              label={label}
              sx={{ backgroundColor: "#fff", color, fontWeight: 700, border: "none", boxShadow: 1 }}
            />
          ))}
        </Stack>

        <Divider sx={{ my: 8 }} />

        {/* Experiences and Details (Pending) */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <LocationOn sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>Areas and attractions covered</Typography>
                  <Typography variant="body2">
                    Tulum archaeological zone<br />Dos Ojos Cenote<br />Paraiso Beach<br />Xcacel Ecological Park<br />5th Avenue, Playa del Carmen
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <CheckCircle sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>What's included</Typography>
                  <Typography variant="body2">
                    Private transportation<br />Bottled water<br />Entrance fees<br />Tour photo support
                  </Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>Does not include</Typography>
                  <Typography variant="body2">
                    Meals and drinks<br />Gratuities<br />Souvenirs
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Work sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>Experience and certifications</Typography>
                  <Typography variant="body2">
                    8 years guiding<br />Certified by Ministry of Tourism<br />First aid training
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Star sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>Guide's specialties</Typography>
                  <Typography variant="body2">
                    Mayan culture<br />Gastronomic tours<br />Adventure in cenotes
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <FavoriteBorder sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>What to bring</Typography>
                  <Typography variant="body2">
                    Sunscreen<br />Bathing suit & towel<br />Walking shoes<br />Insect repellent<br />Water bottle
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Language sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>Additional languages</Typography>
                  <Typography variant="body2">
                    Spanish (native)<br />English (fluent)<br />Italian (intermediate)
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Reviews */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
            What they say about David Dominguez
          </Typography>
          <Grid container spacing={4}>
            {reviewsData.map((review) => (
              <Grid item xs={12} md={6} key={review.id}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={review.image} sx={{ width: 64, height: 64 }} />
                      <Box>
                        <Typography variant="h6">{review.name}</Typography>
                        <Rating value={review.rating} readOnly size="small" />
                        <Typography variant="caption">{review.date}</Typography>
                      </Box>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{review.title}</Typography>
                    <Typography variant="body2">{review.content}</Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSelectionated;