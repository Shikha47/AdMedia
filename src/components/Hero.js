import React from "react";
import { Leaf } from "lucide-react";
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
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "linear-gradient(135deg, #228B22, #32CD32)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            <Leaf size={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
