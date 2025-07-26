import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Log-in';
import SignUp from './SignUp';
import SignUpTourGuides from './SignUpTourGuides';
import HomePage from './HomePage';
import Tours from './Tours'; // Importa el componente Tours
import AboutUs from './AboutUs'; // Importa el componente AboutUs
import NotFound from './NotFound'; // Importa el componente NotFound
import Guides from './Guides';
import GuideSelectionated from './GuideSelectionated';
import BookingSimulation from './BookingSimulation';
import BookingSimulation2 from './BookingSimulation2'; // Importa el componente BookingSimulation2
import BookingSimulation3 from './BookingSimulation3'; // Importa el componente BookingSimulation3
import BookingSimulation4 from './BookingSimulation4';
import Merida from './Merida';
import PlaceSelectionated from './PlaceSelectionated'
import PlaceSelectionated2 from './PlaceSelectionated2'; // Importa el componente PlaceSelectionated2
import Profile from './Profile';
import MyTickets from './MyTickets'; // Importa el componente MyTickets

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Log-in' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignUpTourGuides' element={<SignUpTourGuides />} />
        <Route path='/Profile' element={<Profile />} /> {/* Ruta para el perfil del usuario */}
        <Route path='/MyTickets' element={<MyTickets />} /> {/* Ruta para las reservas del usuario */}
        {/* Otras rutas pueden ser añadidas aquí */}
        <Route path='/Tours' element={<Tours />} /> {/* Ruta para Tours */}
        <Route path='/Guides' element={<Guides />} /> {/* Ruta para Guides */}
        <Route path='/Merida' element={<Merida />} />
        <Route path='/PlaceSelectionated' element={<PlaceSelectionated />} />
        <Route path='/PlaceSelectionated2' element={<PlaceSelectionated2 />} />

        <Route path='/GuideSelectionated' element={<GuideSelectionated />} /> {/* Ruta para GuideSelectionated */}
        <Route path='/BookingSimulation' element={<BookingSimulation />} /> {/* Ruta para BookingSimulation */}
        <Route path='/BookingSimulation2' element={<BookingSimulation2 />} /> {/* Ruta para BookingSimulation2 */}
        <Route path='/BookingSimulation3' element={<BookingSimulation3 />} /> {/* Ruta para BookingSimulation3 */}
        <Route path='/BookingSimulation4' element={<BookingSimulation4 />} /> {/* Ruta para BookingSimulation3 */}
        <Route path='/AboutUs' element={<AboutUs />} /> {/* Ruta para About Us */}
        <Route path='/NotFound' element={<NotFound />} /> {/* Ruta para manejar 404 */}

        {/* Ruta para manejar 404 */}
        <Route path='*' element={<NotFound />} /> {/* Ruta para manejar 404 */}
      </Routes>
    </>
  );
}