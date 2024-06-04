import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Services from "./components/whatwedo";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Why/>
      <Stats/>
      <Services/>
      <Pricing/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
