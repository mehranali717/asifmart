import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { AboutUs, Home } from "./pages";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
