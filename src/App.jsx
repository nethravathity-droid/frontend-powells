import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
//import Chatbot from "./components/Chatbot";
import HeroSlider from "./components/HeroSlider";
import Ammeter from "./pages/Ammeter";
import Voltmeter from "./pages/Voltmeter";
import AVM from "./pages/AVM";
import Vafmeter from "./pages/vafmeter";
import Hzmeter from "./pages/hzmeter";
import Kwhmeter from "./pages/kwhmeter";
import Mfmmeter from "./pages/mfmmeter";
import Elr from "./pages/Elr";
import Mpr from "./pages/Mpr";
import SPD from "./pages/SPD";
import Amf from "./pages/Amf";
import Ats2p from "./pages/Ats2p";
import Ats from "./pages/Ats";
import About from "./pages/About";
import Whatsapp from "./components/Whatsapp";
import Auth from "./pages/Auth";
import ScrollToTop from "./ScrollToTop";
import ScrollSection from "./pages/ScrollSection";
import SocialSidebar from "./components/SocialSidebar";

export default function App() {
  return (
    <>
      <Header />
        <SocialSidebar />
 <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/components/HeroSlider" element={<HeroSlider />} /> 
        <Route path="/cart" element={<div>Cart Page</div>} />
       <Route path="/pages/Ammeter" element={<Ammeter />} />
       <Route path="/pages/Voltmeter" element={<Voltmeter />} /> 
        <Route path="/pages/AVM" element={<AVM />} /> 
        <Route path="/pages/vafmeter" element={<Vafmeter />} /> 
        <Route path="/pages/hzmeter" element={<Hzmeter />} /> 
         <Route path="/pages/kwhmeter" element={<Kwhmeter />} /> 
         <Route path="/pages/mfmmeter" element={<Mfmmeter />} />
         <Route path="/pages/Elr" element={<Elr />} /> 
          <Route path="/pages/Mpr" element={<Mpr />} /> 
              <Route path="/pages/SPD" element={<SPD />} /> 
              <Route path="/pages/Amf" element={<Amf />} /> 
                         <Route path="/pages/Ats2p" element={<Ats2p />} /> 
                         <Route path="/pages/Ats" element={<Ats />} />
                           <Route path="/auth" element={<Auth />} />
                           <Route path="/ScrollSection" element={<ScrollSection/>}/>
                          
      </Routes>
       <Whatsapp />
         <Footer />
          </>
          
  );
}
