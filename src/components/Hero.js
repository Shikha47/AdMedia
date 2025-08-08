import React from "react";
import { Leaf } from "lucide-react";
import Banner from "../images/banner.png";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Live Sustainably, Love Naturally</h1>
          <p>
            Discover eco-friendly products that make a difference for you and
            our planet. Join thousands of conscious consumers making sustainable
            choices every day.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#products" className="btn btn-primary">
              Explore Products
              <Leaf size={20} />
            </a>
            <a href="#why" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div>
            <img src={Banner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
