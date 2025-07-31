import React from 'react';
import Header from './Components/Header';
import AppRoutes from './Components/AppRoutes';
import Footer from './Components/Footer';
import { AuthProvider } from './Components/AuthContext';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // <-- primero obtenemos location

  const navItems = [
    { label: "Home", path: "/", active: true },
    { label: "Tours", path: "/Tours", active: false },
    { label: "Guides", path: "/Guides", active: false },
    { label: "About Us", path: "/AboutUs", active: false },
  ];

  const hideHeaderFooterRoutes = ["/Log-in", "/SignUp", "/SignUpTourGuides"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <div className="App">
        {!shouldHideHeaderFooter && <Header navItems={navItems} />}
        <AppRoutes />
        {!shouldHideHeaderFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
