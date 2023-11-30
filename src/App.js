import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Mobile from "./Pages/Mobile";
import './App.css'
import MobileDetails from "./Pages/MobileDetails";
import Layout from "./component/Layout";
import HostLayout from "./component/Host/HostLayout"
import Income from "./component/Host/Income"
import Review from "./component/Host/Review";
import Dashboard from "./component/Host/Dashboard"
import HostMobile from "./component/Host/HostMobile";
import HostInfo from "./component/Host/HostInfo";
import HostPricing from "./component/Host/HostPricing";
import HostPhoto from "./component/Host/HostPhoto";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/mobile" element={<Mobile/>}/>
      <Route path="/mobile/:id" element={<MobileDetails/>}>
        <Route index element ={<HostInfo/>}/>
        <Route path="pricing" element ={<HostPricing/>}/>
        <Route path="photos " element ={<HostPhoto/>}/>
      </Route>

      <Route path="host" element={<HostLayout/>}>
      <Route index  element={<Dashboard/>}/>
      <Route path="income" element={<Income/>}/>
      <Route path="review" element={<Review/>}/>
      <Route path="mobile" element={<HostMobile/>}/>
      </Route>
        
      </Route>
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
