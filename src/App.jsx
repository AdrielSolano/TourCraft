import React from "react";
import HeaderNav, { ThemeProvider } from './Components/HeaderNav'; // Importar solo ThemeProvider
import AppRoutes from './Components/AppRoutes';
import Footer from "./Components/Footer";

function App() {
    return (
        <ThemeProvider>
            <HeaderNav/>

            <AppRoutes /> {/* AppRoutes ahora maneja HeaderNav internamente */}
            <Footer />
        </ThemeProvider>
    );
}

export default App;