import React from "react";
import { Star } from "lucide-react";
const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Join thousands of happy customers making a positive impact
        </p>

        <div className="testimonials-grid">
          {[
            {
              name: "Sarah Johnson",
              role: "Environmental Advocate",
              text: "AdMedia has transformed the way I shop. Their products are not only sustainable but also beautifully designed and functional.",
              avatar: "SJ",
            },
            {
              name: "Mike Chen",
              role: "Family Dad",
              text: "As a parent, I love knowing that the products I buy are safe for my family and the environment. Great quality and fast shipping!",
              avatar: "MC",
            },
            {
              name: "Emma Rodriguez",
              role: "Zero Waste Enthusiast",
              text: "Finally found a brand that aligns with my values. The bamboo kitchen set is amazing and the customer service is outstanding.",
              avatar: "ER",
            },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="star"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
