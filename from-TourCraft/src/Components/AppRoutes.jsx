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
import Cancun from './Cancun';
import PlayadelCarmen from './PlayadelCarmen';
import Tulum from './Tulum';
import PlaceSelectionated from './PlaceSelectionated'
import PlaceSelectionated2 from './PlaceSelectionated2'; // Importa el componente PlaceSelectionated2
import Profile from './Profile';
// Top Activities individual components
import ArchitectureMerida from './ArchitectureMerida';
import CenotesTour from './CenotesTour';
import Izamal from './Izamal';
import ProgresoBeach from './ProgresoBeach';
import PlazaGrande from './PlazaGrande';
import CenotesCuzama from './CenotesCuzama';
import MyTickets from './MyTickets'; // Importa el componente MyTickets
import ProtectedRoute from './ProtectedRoute'; // Importa el componente ProtectedRoute

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Log-in' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignUpTourGuides' element={<SignUpTourGuides />} />
        <Route path='/Profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path='/MyTickets' element={
          <ProtectedRoute>
            <MyTickets />
          </ProtectedRoute>
        } />
        {/* Otras rutas pueden ser añadidas aquí */}
        <Route path='/Tours' element={
          <ProtectedRoute>
            <Tours />
          </ProtectedRoute>
        } /> {/* Ruta para Tours */}
        <Route path='/Guides' element={
          <ProtectedRoute>
            <Guides />
          </ProtectedRoute>
        } /> {/* Ruta para Guides */}
        <Route path='/Merida' element={<Merida />} />
        <Route path='/Cancun' element={<Cancun />} />
        <Route path='/PlayadelCarmen' element={<PlayadelCarmen />} />
        <Route path='/Tulum' element={<Tulum />} />
        <Route path='/PlaceSelectionated' element={
          <ProtectedRoute>
            <PlaceSelectionated />
          </ProtectedRoute>
        } />
        <Route path='/PlaceSelectionated2' element={
          <ProtectedRoute>
            <PlaceSelectionated2 />
          </ProtectedRoute>
        } />
        
        {/* Top Activities individual routes */}
        <Route path='/ArchitectureMerida' element={
          <ProtectedRoute>
            <ArchitectureMerida />
          </ProtectedRoute>
        } />
        <Route path='/CenotesTour' element={
          <ProtectedRoute>
            <CenotesTour />
          </ProtectedRoute>
        } />
        <Route path='/Izamal' element={
          <ProtectedRoute>
            <Izamal />
          </ProtectedRoute>
        } />
        <Route path='/ProgresoBeach' element={
          <ProtectedRoute>
            <ProgresoBeach />
          </ProtectedRoute>
        } />
        <Route path='/PlazaGrande' element={
          <ProtectedRoute>
            <PlazaGrande />
          </ProtectedRoute>
        } />
        <Route path='/CenotesCuzama' element={
          <ProtectedRoute>
            <CenotesCuzama />
          </ProtectedRoute>
        } />

        <Route path='/GuideSelectionated' element={
          <ProtectedRoute>
            <GuideSelectionated />
          </ProtectedRoute>
        } /> {/* Ruta para GuideSelectionated */}
        <Route path='/BookingSimulation' element={
          <ProtectedRoute>
            <BookingSimulation />
          </ProtectedRoute>
        } />
        <Route path='/BookingSimulation2' element={
          <ProtectedRoute>
            <BookingSimulation2 />
          </ProtectedRoute>
        } />
        <Route path='/BookingSimulation3' element={
          <ProtectedRoute>
            <BookingSimulation3 />
          </ProtectedRoute>
        } />
        <Route path='/BookingSimulation4' element={
          <ProtectedRoute>
            <BookingSimulation4 />
          </ProtectedRoute>
        } />
        <Route path='/AboutUs' element={<AboutUs />} /> {/* Ruta para About Us */}
        <Route path='/NotFound' element={<NotFound />} /> {/* Ruta para manejar 404 */}

        {/* Ruta para manejar 404 */}
        <Route path='*' element={<NotFound />} /> {/* Ruta para manejar 404 */}
      </Routes>
    </>
  );
}