import React, { useState } from "react";
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

import {
  ArrowBack,
  CardTravel,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  DirectionsBus,
  DirectionsWalk,
  Explore,
  FavoriteBorder,
  Language,
  LocalTaxi,
  LocationOn,
  Star,
  Work,
} from "@mui/icons-material";

import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
} from "date-fns";
import { Link as RouterLink } from 'react-router-dom';

import p1 from "../assets/p1.jpg";
import adriel from "../assets/adriel.png";
import jesus from "../assets/jesus.png";

const reviewsData = [
  {
    id: 1,
    name: "Rafa Camal",
    rating: 5,
    date: "5 May 2025",
    title: "Amazing Experience!",
    content:
      "Sebastian was an incredible guide! He shared fascinating stories about Mayan culture and made sure everyone felt comfortable. The cenote adventure was unforgettable. Highly recommended!",
    image: adriel,
  },
  {
    id: 2,
    name: "Jesus Perez",
    rating: 5,
    date: "2 October 2024",
    title: "Professional and Friendly",
    content:
      "The tour was very well organised and Sebastian was super friendly. He helped us discover hidden gems in Tulum and gave great tips for local food. Would book again!",
    image: jesus,
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
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = (date) => format(date, "yyyy-MM-dd");

  // Crear fechas dinámicas para el mes actual
  const yyyy = currentDate.getFullYear();
  const mm = (currentDate.getMonth() + 1).toString().padStart(2, "0");

  // Fechas disponibles y no disponibles para el mes actual
  const availableDates = [
    `${yyyy}-${mm}-10`,
    `${yyyy}-${mm}-15`,
    `${yyyy}-${mm}-20`,
    `${yyyy}-${mm}-24`,
    `${yyyy}-${mm}-28`,
  ];
  const unavailableDates = [
    `${yyyy}-${mm}-01`,
    `${yyyy}-${mm}-05`,
    `${yyyy}-${mm}-12`,
    `${yyyy}-${mm}-18`,
    `${yyyy}-${mm}-25`,
  ];

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const isInRange = (day) => {
    if (startDate && endDate) {
      return (
        isSameDay(day, startDate) ||
        isSameDay(day, endDate) ||
        (isAfter(day, startDate) && isBefore(day, endDate))
      );
    }
    return false;
  };

  const handleDateClick = (day) => {
    const dayString = formatDate(day);
    if (unavailableDates.includes(dayString)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (isBefore(day, startDate)) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const renderCalendarCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDateCalendar = startOfWeek(monthStart);
    const endDateCalendar = endOfWeek(monthEnd);

    let day = startDateCalendar;
    const rows = [];

    while (day <= endDateCalendar) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const formatted = format(day, "d");
        const cloneDay = day;
        const dayString = formatDate(cloneDay);

        const isUnavailable = unavailableDates.includes(dayString);
        const isAvailable = availableDates.includes(dayString);

        const selected =
          isSameDay(cloneDay, startDate) || isSameDay(cloneDay, endDate);
        const inRange = isInRange(cloneDay);

        days.push(
          <Grid item xs key={dayString}>
            <Box
              onClick={() => handleDateClick(cloneDay)}
              sx={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: isUnavailable ? "not-allowed" : "pointer",
                borderRadius: 1,
                backgroundColor: isUnavailable
                  ? "#ff3232"
                  : selected || inRange
                    ? "#333"
                    : isAvailable
                      ? "#80b9ad"
                      : "transparent",
                color:
                  isUnavailable || isAvailable || selected || inRange
                    ? "#fff"
                    : "#333",
                opacity: isSameMonth(cloneDay, currentDate) ? 1 : 0.4,
                fontFamily: "Inter",
                userSelect: "none",
                transition: "background-color 0.3s",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: 16, fontFamily: "Inter" }}
              >
                {formatted}
              </Typography>
            </Box>
          </Grid>
        );

        day = addDays(day, 1);
      }
      rows.push(
        <Grid container key={day}>
          {days}
        </Grid>
      );
    }

    return rows;
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", py: 4 }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, md: 12 },
        }}
      >
        <Button
          startIcon={<ArrowBack />}
          component={RouterLink}
          to="/Guides"
          sx={{
            mb: 4,
            color: "#000",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Back
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={p1}
              alt="Profile"
              sx={{
                width: "100%",
                height: 400,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {[1, 2, 3].map((i) => (
                <Box
                  key={i}
                  component="img"
                  src={p1}
                  sx={{ width: 120, height: 80, borderRadius: 1, objectFit: "cover" }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, fontFamily: "Playfair Display" }}
              >
                Sebastian Monteverde
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#80b9ad", fontWeight: 800, fontFamily: "Playfair Display" }}
              >
                $34 / day
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Playfair Display" }}>
                Hi, I'm Sebastian, a certified guide with a great passion for the Riviera Maya. For over five years, I've been showing travelers the natural and cultural beauty of our region, from cenotes to Mayan ruins. My goal is to create unique and authentic experiences so every visitor takes home unforgettable memories. It will be a pleasure to be your guide on this adventure!
              </Typography>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography sx={{ fontFamily: "Playfair Display" }}>
                        {format(currentDate, "MMMM yyyy")}
                      </Typography>
                      <Box>
                        <IconButton onClick={prevMonth}>
                          <ChevronLeft />
                        </IconButton>
                        <IconButton onClick={nextMonth}>
                          <ChevronRight />
                        </IconButton>
                      </Box>
                    </Stack>
                    <Grid container>
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                          <Grid item xs key={day}>
                            <Typography
                              align="center"
                              variant="caption"
                              sx={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {day}
                            </Typography>
                          </Grid>
                        )
                      )}
                    </Grid>
                    {renderCalendarCells()}

                    {/* Color legend */}
                    <Box sx={{ mt: 2, display: "flex", gap: 3, flexWrap: "wrap" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            bgcolor: "#80b9ad",
                            borderRadius: 0.5,
                          }}
                        />
                        <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
                          Available
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            bgcolor: "#ff3232",
                            borderRadius: 0.5,
                          }}
                        />
                        <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
                          Unavailable
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            bgcolor: "#333",
                            borderRadius: 0.5,
                          }}
                        />
                        <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
                          Selected Range
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  component="a"
                  href="/BookingSimulation"
                  sx={{
                    backgroundColor: "#80b9ad",
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Selected as a guide!
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 6 }}>
          {tourCategories.map(({ label, icon: Icon, color }) => (
            <Chip
              key={label}
              icon={<Icon sx={{ color }} />}
              label={label}
              sx={{
                backgroundColor: "#fff",
                color,
                fontWeight: 700,
                border: "none",
                boxShadow: 1,
                fontFamily: "Playfair Display",
              }}
            />
          ))}
        </Stack>

        <Divider sx={{ my: 8 }} />

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <LocationOn sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    Areas and attractions covered
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Tulum archaeological zone
                    <br />
                    Dos Ojos Cenote
                    <br />
                    Paraiso Beach
                    <br />
                    Xcacel Ecological Park
                    <br />
                    5th Avenue, Playa del Carmen
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <CheckCircle sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    What's included
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Private transportation
                    <br />
                    Bottled water
                    <br />
                    Entrance fees
                    <br />
                    Tour photo support
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mt: 2, fontFamily: "Playfair Display" }}
                  >
                    Does not include
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Meals and drinks
                    <br />
                    Gratuities
                    <br />
                    Souvenirs
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
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    Experience and certifications
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    8 years guiding
                    <br />
                    Certified by Ministry of Tourism
                    <br />
                    First aid training
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Star sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    Guide's specialties
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Mayan culture
                    <br />
                    Gastronomic tours
                    <br />
                    Adventure in cenotes
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
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    What to bring
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Sunscreen
                    <br />
                    Bathing suit & towel
                    <br />
                    Walking shoes
                    <br />
                    Insect repellent
                    <br />
                    Water bottle
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Language sx={{ color: "#000", mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    Additional languages
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Playfair Display" }}>
                    Spanish (native)
                    <br />
                    English (fluent)
                    <br />
                    Italian (intermediate)
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        <Box sx={{ mt: 6, marginBottom: '100px' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mb: 4, fontFamily: "Playfair Display" }}
          >
            What They Say About... Sebastian Monteverde
          </Typography>
          <Grid container spacing={4}>
            {reviewsData.map((review) => (
              <Grid item xs={12} md={6} key={review.id}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={review.image} sx={{ width: 64, height: 64 }} />
                      <Box>
                        <Typography sx={{ fontFamily: "Playfair Display" }}>
                          {review.name}
                        </Typography>
                        <Rating value={review.rating} readOnly size="small" />
                        <Typography sx={{ fontFamily: "Playfair Display" }}>
                          {review.date}
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, fontFamily: "Playfair Display" }}
                    >
                      {review.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "Playfair Display" }}>
                      {review.content}
                    </Typography>
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