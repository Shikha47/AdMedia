import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Choose from "./components/Choose";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div className="landing-page">
      <Header />

      <Hero />

      <Features />

      <Choose />

      <Testimonials />
      <Newsletter />

      <Footer />
    </div>
  );
};

export default App;
