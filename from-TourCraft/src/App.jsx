import React from 'react';
import Header from './Components/Header';
import AppRoutes from './Components/AppRoutes';
import Footer from './Components/Footer';
import { AuthProvider } from './Components/AuthContext';

function App() {
  const navItems = [
    { label: "Home", path: "/", active: true },
    { label: "Tours", path: "/Tours", active: false },
    { label: "Guides", path: "/Guides", active: false },
    { label: "About Us", path: "/AboutUs", active: false },
  ];

  return (
    <AuthProvider>
      <div className="App">
        <Header navItems={navItems} />
        <AppRoutes />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;