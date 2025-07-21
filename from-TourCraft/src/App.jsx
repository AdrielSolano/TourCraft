import React from "react";
import AppRoutes from "./Components/AppRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';


function App() {
    const navItems = [
        { label: "Home", path: "/", active: true },
        { label: "Tours", path: "/Tours", active: false },
        { label: "Guides", path: "/Guides", active: false },
        { label: "About Us", path: "/AboutUs", active: false },
    ];

    const theme = createTheme();

    const location = useLocation();

    const hideHeaderFooterRoutes = ["/Log-in", "/SignUp", "/SignUpTourGuides"];
    const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);



    return (

        <ThemeProvider theme={theme}>
            {!shouldHideHeaderFooter && <Header navItems={navItems} />}
            <AppRoutes />
            {!shouldHideHeaderFooter && <Footer />}
        </ThemeProvider>

    );
}

export default App;