import React, { useState } from "react";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    // Handle successful submission
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };
  return (
    <section className="section newsletter" id="contact">
      <div className="container">
        <h2 className="section-title">Stay Updated</h2>
        <p className="section-subtitle">
          Get the latest eco-friendly tips and product updates delivered to your
          inbox
        </p>

        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-submit">
            Subscribe
          </button>
        </form>
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
