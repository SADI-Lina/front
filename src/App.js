import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './Pages/Acceuil';
import MapContainer from './components/MapContainer';
import LeafletMap from './components/LeafletMap';
import HeroPage from './Pages/HeroPage';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
function App() {
  

  return (
   <>
        <Routes>
          <Route
            path="/*"
            element={<HeroPage></HeroPage>}
          ></Route>
          <Route
            path="/UserPage"
            element={<UserPage></UserPage>}
          ></Route>
          <Route
            path="/AdminPage"
            element={<AdminPage></AdminPage>}
          ></Route>
        </Routes>
    
  </>
  );
}
export default App;
