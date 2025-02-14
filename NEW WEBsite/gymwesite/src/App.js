import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import FeatursPage from "./Pages/FeatursPage";
import Footer from "./Component/Footer";
import Testimonials from "./Pages/Testimonials";
import Amenities from "./Pages/Amenities";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import MainNavbar from "./Component/MainNavbar";
// import ScrollToTop from "./Pages/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
    
    <MainNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feature" element={<FeatursPage/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="footer" element={<Footer/>} />
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;