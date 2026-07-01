import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
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
import Blog from "./pages/Blog"; 
import HomeExhibition from "./pages/HomeExhibition";
import Mcb from "./pages/Mcb";
import Rccb from "./pages/Rccb";
import Isolator from "./pages/Isolator";
import DbBox from "./pages/DbBox";
import ChannelPartner from "./pages/ChannelPartner";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import CartToast from "./components/CartToast";
import ElectricalBackdrop from "./components/ElectricalBackdrop";
import ProductPageAnimations from "./components/ProductPageAnimations";

export default function App() {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/admin") || location.pathname.startsWith("/panel");

  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/panel/login" element={<AdminLogin />} />
        <Route path="/panel" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
        <Route path="/panel/*" element={<Navigate to="/panel" replace />} />
      </Routes>
    );
  }

  return (
    <div className="site-shell">
      <ElectricalBackdrop variant="site" />
      <ProductPageAnimations />
      <Header />
      <CartToast />
      <SocialSidebar />
      <ScrollToTop />
      <main className="site-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/Products" element={<Navigate to="/products" replace />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/ChannelPartner" element={<ChannelPartner />} />
        <Route path="/channel-partner" element={<Navigate to="/pages/ChannelPartner" replace />} />
        <Route path="/contact" element={<Navigate to="/pages/Contact" replace />} />
        <Route path="/pages/contact" element={<Navigate to="/pages/Contact" replace />} />
        <Route path="/components/HeroSlider" element={<HeroSlider />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
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
                         <Route path="/pages/ats" element={<Navigate to="/pages/Ats" replace />} />
                         <Route path="/pages/Mcb" element={<Mcb />} />
                         <Route path="/pages/Rccb" element={<Rccb />} />
                         <Route path="/pages/Isolator" element={<Isolator />} />
                         <Route path="/pages/DbBox" element={<DbBox />} />
                         <Route path="/pages/dbbox" element={<Navigate to="/pages/DbBox" replace />} />
                         <Route path="/pages/isolators" element={<Navigate to="/pages/Isolator" replace />} />
                         <Route path="/products/mcb" element={<Navigate to="/pages/Mcb" replace />} />
                           <Route path="/auth" element={<Auth />} />
                           <Route path="/ScrollSection" element={<ScrollSection/>}/>
                           <Route path="/pages/Blog" element={<Blog />} />
                           <Route path="/Blog" element={<Navigate to="/pages/Blog" replace />} />
                           <Route path="/blog" element={<Navigate to="/pages/Blog" replace />} />
                           <Route path="/pages/HomeExhibition" element={<HomeExhibition />} /> 

      </Routes>
      </main>
      <Whatsapp />
      <Chatbot />
      <Footer />
    </div>
  );
}
