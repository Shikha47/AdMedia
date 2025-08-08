import React from "react";
import bambooKitchen from "../images/BambooKitchen.png";
import organicCotton from "../images/organicCotton.webp";
import solarPowerBank from "../images/solarPowerBank.jpg";
import waterBottle from "../images/waterBottle.webp";
const Features = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Carefully curated sustainable products for conscious living
        </p>

        <div className="products-grid">
          {[
            {
              name: "Bamboo Kitchen Set",
              description: "Sustainable bamboo kitchen essentials",
              icon: bambooKitchen,
            },
            {
              name: "Organic Cotton Clothing",
              description:
                "Soft, comfortable apparel made from 100% organic cotton",
              icon: organicCotton,
            },
            {
              name: "Solar Power Banks",
              description: "Renewable energy solutions for your mobile devices",
              icon: solarPowerBank,
            },
            {
              name: "Reusable Water Bottles",
              description:
                "Premium stainless steel bottles to reduce plastic waste",
              icon: waterBottle,
            },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.icon} />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
