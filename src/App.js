

import React from 'react'
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home"
import Products from "./Components/Products"
import Contact from "./Components/Contact"
import InjectionMould from "./Components/InjectionMould"
import ElectricFittingDetail from "./Components/ElectricFittingDetail"
import FanBladeMouldDetail from "./Components/FanBladeMouldDetail"
import FlipTopDetail from "./Components/FlipTopDetail"
import JunctionBoxDetail from "./Components/JunctionBoxDetail"
import PlasticSpoutDetail from "./Components/PlasticSpoutDetail"
import PesticidesCapDetail from "./Components/PesticidesCapDetail"
import TorchBodyDetail from "./Components/TorchBodyDetail"
import ToysMouldDetail from "./Components/ToysMouldDetail"
import CapMouldDetail from "./Components/CapMouldDetail"
import PetMould from "./Components/PetMould"
import PetBottleDetail from "./Components/PetBottleDetail"
import BlowMould from "./Components/BlowMould"
import BlowBottleDetail from "./Components/BlowBottleDetail"
import BlowCatDetail from "./Components/BlowCatDetail"
import Infrastructure from "./Components/Infrastructure"


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/InjectionMould' element={<InjectionMould/>}></Route>
        <Route path='/ElectricFittingDetail' element={<ElectricFittingDetail/>}></Route>
        <Route path='/FanBladeMouldDetail' element={<FanBladeMouldDetail/>}></Route>
        <Route path='/FlipTopDetail' element={<FlipTopDetail/>}></Route>
        <Route path='/PlasticSpoutDetail' element={<PlasticSpoutDetail/>}></Route>
        <Route path='/PesticidesCapDetail' element={<PesticidesCapDetail/>}></Route>
        <Route path='/TorchBodyDetail' element={<TorchBodyDetail/>}></Route>
        <Route path='/ToysMouldDetail' element={<ToysMouldDetail/>}></Route>
        <Route path='/CapMouldDetail' element={<CapMouldDetail/>}></Route>
        <Route path='/PetMould' element={<PetMould/>}></Route>
        <Route path='/PetBottleDetail' element={<PetBottleDetail/>}></Route>
        <Route path='/BlowMould' element={<BlowMould/>}></Route>
        <Route path='/BlowBottleDetail' element={<BlowBottleDetail/>}></Route>
        <Route path='/BlowCatDetail' element={<BlowCatDetail/>}></Route>
        <Route path='/Infrastructure' element={<Infrastructure/>}></Route>
       
      </Routes>
    </HashRouter>
  )
}

export default App