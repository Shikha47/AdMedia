import React from "react";
import { Leaf, Truck, Shield, Heart } from "lucide-react";
const Choose = () => {
  return (
    <section className="section features" id="why">
      <div className="container">
        <h2 className="section-title">Why Choose AdMedia?</h2>
        <p className="section-subtitle">
          We're committed to making sustainable living accessible and enjoyable
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Leaf size={24} />
            </div>
            <h3 className="feature-title">100% Eco-Friendly</h3>
            <p className="feature-description">
              All our products are sustainably sourced and environmentally
              responsible
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Truck size={24} />
            </div>
            <h3 className="feature-title">Fast Shipping</h3>
            <p className="feature-description">
              Quick delivery with carbon-neutral shipping options available
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={24} />
            </div>
            <h3 className="feature-title">Quality Guarantee</h3>
            <p className="feature-description">
              30-day money-back guarantee on all products
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart size={24} />
            </div>
            <h3 className="feature-title">Community Impact</h3>
            <p className="feature-description">
              Every purchase supports environmental conservation projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
