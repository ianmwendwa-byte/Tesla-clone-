import React from 'react'
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom';
import S from './Components/S';
import Model3 from './Components/Model3';
import ModelX from './Components/ModelX';
import ModelY from './Components/ModelY';
import SolarPanel from './Components/SolarPanel';
import SolarRoof from './Components/SolarRoof';

function App() {
  return (
    <div className="App">
  <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='S' element={<S/>}/>
    <Route path='Model3' element={<Model3/>}/>
    <Route path='ModelX' element={<ModelX/>}/>
    <Route path='ModelY' element={<ModelY/>}/>
    <Route path='SolarPanel' element={<SolarPanel/>}/>
    <Route path='SolarRoof' element={<SolarRoof/>}/>
   </Routes>
    </div>
  );
}

export default App;
