import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import ArrowBack from "@mui/icons-material/ArrowBack";

import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Solano11 from "../assets/Solano11.png";
import img48 from "../assets/img48.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios"; // ⭐ NUEVO

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // ⭐ NUEVO
  const [password, setPassword] = useState(""); // ⭐ NUEVO
  const navigate = useNavigate(); // ⭐ NUEVO

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/smart-auth/login", {
        email
      });
      alert("Login exitoso");
      navigate("/"); // Redirige a la página principal o donde prefieras
    } catch (err) {
      alert("Error al iniciar sesión");
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
        {/* Left side */}
        <Box
          sx={{
            position: "absolute",
            width: "755px",
            height: "1024px",
            top: 0,
            left: 0,
            backgroundImage: `url(${img48})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "755px",
              height: "1024px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "40px",
                textAlign: "center",
                lineHeight: "29.2px",
                width: "400px",
                marginTop: "100px",
                marginleft: 15,
              }}
            >
              Explore The Riviera Maya
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "17px",
                textAlign: "center",
                lineHeight: "23.8px",
                width: "600px",
                marginBottom: "400px",
                letterSpacing: "0.40px",
              }}
            >
              Riviera Maya at your own pace: discover, book and live your
              adventure.
            </Typography>
          </Box>
        </Box>

        {/* Right side */}
        <Box
          sx={{
            position: "absolute",
            right: -60,
            top: 0,
            width: "calc(1440px - 721px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "107px 0 0",
          }}
        >
          {/* Back Button */}
          <Button
            startIcon={<ArrowBack />}
            component={RouterLink}
            to="/"
            sx={{
              position: "absolute",
              top: { xs: "20px", md: "55px" },
              left: { xs: "20px", md: "0px" },
              textTransform: "none",
              fontWeight: 600,
              fontSize: "18px",
              zIndex: 1,
              color: 'black'
            }}
          >
            Back
          </Button>
          <Box
            component="img"
            src={Solano11}
            alt="Logo TC"
            sx={{
              width: "259px",
              height: "122px",
              objectFit: "cover",
              marginBottom: "115px",
            }}
          />

          <Box sx={{ width: "570px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "19.8px",
                letterSpacing: "-0.2px",
                lineHeight: "25.7px",
                marginBottom: "16px",
              }}
            >
              Hi, Welcome!
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  lineHeight: "17.5px",
                }}
              >
                Email address
              </Typography>
              <TextField
                fullWidth
                placeholder="Your email"
                type="email"
                variant="outlined"
                value={email} // ⭐ NUEVO
                onChange={(e) => setEmail(e.target.value)} // ⭐ NUEVO
                sx={{
                  mt: 0.5,
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    height: "56px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    color: "#00000080",
                  },
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  lineHeight: "17.5px",
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password} // ⭐ NUEVO
                onChange={(e) => setPassword(e.target.value)} // ⭐ NUEVO
                sx={{
                  mt: 0.5,
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    height: "56px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    color: "#00000080",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOutlined />
                        ) : (
                          <VisibilityOffOutlined />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogin} // ⭐ NUEVO
                  sx={{
                    bgcolor: "#80b9ad",
                    borderRadius: "4px",
                    width: "280px",
                    py: 1,
                    textTransform: "none",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    "&:hover": {
                      bgcolor: "#6ca99d",
                    },
                  }}
                >
                  Log in
                </Button>

                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "13.9px",
                    mt: 1.5,
                    letterSpacing: "-0.2px",
                    lineHeight: "13.8px",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="/SignUp"
                    sx={{
                      color: "#1d836e",
                      textDecoration: "none",
                      fontFamily: "inherit",
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>

              <Divider sx={{ mt: 8 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
