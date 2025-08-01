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
import Holbox from './Holbox';
import Cozumel from './Cozumel';
import IslaMujeres from './IslaMujeres';
import HotelZoneTour from './HotelZoneTour';
import UnderwaterMuseum from './UnderwaterMuseum';
import TulumRuinsTour from './TulumRuinsTour';
import SianKaanBiosphere from './SianKaanBiosphere';
import GranCenote from './GranCenote';
import CobaRuins from './CobaRuins';
import TulumBeachClubs from './TulumBeachClubs';
import MuyilLagoon from './MuyilLagoon';
import CenoteDosOjos from './CenoteDosOjos';
import FifthAvenueTour from './FifthAvenueTour';
import WhaleSharkTour from './WhaleSharkTour';
import SanGervasioRuins from './SanGervasioRuins';
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
// New Top Activities components for Tulum
import AkumalTurtleSwim from './AkumalTurtleSwim';
import AkumalBay from './AkumalBay';
import KaanLuumLagoon from './KaanLuumLagoon';
// New Top Activities components for Playa del Carmen
import CenoteSwimAdventure from './CenoteSwimAdventure';
import CocoBongoPlaya from './CocoBongoPlaya';
import FerryToCozumel from './FerryToCozumel';
import RioSecreto from './RioSecreto';
import XplorAdventurePark from './XplorAdventurePark';
import ThreeDMuseumOfWonders from './ThreeDMuseumOfWonders';
import XcaretPark from './XcaretPark';
// New Top Activities components for Holbox
import IslandBikeTour from './IslandBikeTour';
import PuntaMosquito from './PuntaMosquito';
import YalahauLagoon from './YalahauLagoon';
import CenoteYalahau from './CenoteYalahau';
import BirdWatching from './BirdWatching';
import FlamingoSpotting from './FlamingoSpotting';
import BeachYoga from './BeachYoga';
// New Top Activities components for Cozumel
import ScubaDivingTour from './ScubaDivingTour';
import PuntaSurEcoPark from './PuntaSurEcoPark';
import ChankanaabBeach from './ChankanaabBeach';
import ElCieloSnorkeling from './ElCieloSnorkeling';
import PlayaPalancar from './PlayaPalancar';
import CozumelMuseum from './CozumelMuseum';
import IslandJeepTour from './IslandJeepTour';
// Top Activities components for Cancun
import CocoBongo from './CocoBongo';
import PlayaDelfines from './PlayaDelfines';
import ElMecoArchaeological from './ElMecoArchaeological';
import CancunAquarium from './CancunAquarium';
import LaIslaShopping from './LaIslaShopping';
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
        <Route path='/Holbox' element={<Holbox />} />
        <Route path='/Cozumel' element={<Cozumel />} />
        <Route path='/IslaMujeres' element={<IslaMujeres />} />
        <Route path='/HotelZoneTour' element={<HotelZoneTour />} />
        <Route path='/UnderwaterMuseum' element={<UnderwaterMuseum />} />
        {/* Top Activities routes for Cancun */}
        <Route path='/CocoBongo' element={<CocoBongo />} />
        <Route path='/PlayaDelfines' element={<PlayaDelfines />} />
        <Route path='/ElMeco' element={<ElMecoArchaeological />} />
        <Route path='/InteractiveAquarium' element={<CancunAquarium />} />
        <Route path='/LaIslaShopping' element={<LaIslaShopping />} />
        <Route path='/TulumRuinsTour' element={<TulumRuinsTour />} />
        <Route path='/SianKaan' element={<SianKaanBiosphere />} />
        <Route path='/GranCenote' element={<GranCenote />} />
        <Route path='/CobaRuins' element={<CobaRuins />} />
        <Route path='/TulumBeachClubs' element={<TulumBeachClubs />} />
        <Route path='/MuyilLagoon' element={<MuyilLagoon />} />
        <Route path='/CenoteDosOjos' element={<CenoteDosOjos />} />
        <Route path='/FifthAvenueTour' element={<FifthAvenueTour />} />
        <Route path='/FifthAvenue' element={<FifthAvenueTour />} />
        <Route path='/XcaretPark' element={<XcaretPark />} />
        <Route path='/CenoteAdventure' element={<CenoteSwimAdventure />} />
        <Route path='/CozumelFerry' element={<FerryToCozumel />} />
        <Route path='/XplorAdventure' element={<XplorAdventurePark />} />
        <Route path='/3DMuseum' element={<ThreeDMuseumOfWonders />} />
        <Route path='/WhaleSharkTour' element={<WhaleSharkTour />} />
        <Route path='/SanGervasioRuins' element={<SanGervasioRuins />} />
        {/* New Top Activities routes for Tulum */}
        <Route path='/AkumalTurtleSwim' element={<AkumalTurtleSwim />} />
        <Route path='/AkumalBay' element={<AkumalBay />} />
        <Route path='/KaanLuumLagoon' element={<KaanLuumLagoon />} />
        {/* New Top Activities routes for Playa del Carmen */}
        <Route path='/CenoteSwimAdventure' element={<CenoteSwimAdventure />} />
        <Route path='/CocoBongoPlaya' element={<CocoBongoPlaya />} />
        <Route path='/FerryToCozumel' element={<FerryToCozumel />} />
        <Route path='/RioSecreto' element={<RioSecreto />} />
        <Route path='/XplorAdventurePark' element={<XplorAdventurePark />} />
        <Route path='/ThreeDMuseumOfWonders' element={<ThreeDMuseumOfWonders />} />
        {/* New Top Activities routes for Holbox */}
        <Route path='/IslandBikeTour' element={<IslandBikeTour />} />
        <Route path='/PuntaMosquito' element={<PuntaMosquito />} />
        <Route path='/YalahauLagoon' element={<YalahauLagoon />} />
        <Route path='/CenoteYalahau' element={<CenoteYalahau />} />
        <Route path='/BirdWatching' element={<BirdWatching />} />
        <Route path='/FlamingoSpotting' element={<FlamingoSpotting />} />
        <Route path='/BeachYoga' element={<BeachYoga />} />
        {/* New Top Activities routes for Cozumel */}
        <Route path='/ScubaDivingTour' element={<ScubaDivingTour />} />
        <Route path='/PuntaSurEcoPark' element={<PuntaSurEcoPark />} />
        <Route path='/ChankanaabBeach' element={<ChankanaabBeach />} />
        <Route path='/ElCieloSnorkeling' element={<ElCieloSnorkeling />} />
        <Route path='/PlayaPalancar' element={<PlayaPalancar />} />
        <Route path='/CozumelMuseum' element={<CozumelMuseum />} />
        <Route path='/IslandJeepTour' element={<IslandJeepTour />} />
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