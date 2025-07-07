import React from "react";
import AppRoutes from "./Components/AppRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
    const navItems = [
  { label: "Home", path: "/", active: true },
  { label: "Tours", path: "/Tours", active: false },
  { label: "Guides", path: "/Guides", active: false },
  { label: "About Us", path: "/AboutUs", active: false },
];

const theme = createTheme();

    return (
        <>
            <ThemeProvider theme={theme}>
  <Header navItems={navItems} />
            <AppRoutes/>
            <Footer />
        </ThemeProvider>
        </>
    );
}

export default App;