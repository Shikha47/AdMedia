import React from "react";

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
              description:
                "Complete eco-friendly kitchen essentials made from sustainable bamboo",
              icon: "🎋",
            },
            {
              name: "Organic Cotton Clothing",
              description:
                "Soft, comfortable apparel made from 100% organic cotton",
              icon: "👕",
            },
            {
              name: "Solar Power Banks",
              description: "Renewable energy solutions for your mobile devices",
              icon: "🔋",
            },
            {
              name: "Reusable Water Bottles",
              description:
                "Premium stainless steel bottles to reduce plastic waste",
              icon: "💧",
            },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <span style={{ fontSize: "3rem" }}>{product.icon}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
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
