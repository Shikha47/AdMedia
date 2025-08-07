import React, { useState } from "react";

import { Leaf, Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Leaf size={28} />
          AdMedia
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#why" className="nav-link">
            Why Choose Us
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#shop" className="btn btn-primary">
            Shop Now
          </a>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <button className="mobile-close" onClick={toggleMenu}>
          <X size={24} />
        </button>
        <a href="#home" className="nav-link" onClick={toggleMenu}>
          Home
        </a>
        <a href="#products" className="nav-link" onClick={toggleMenu}>
          Products
        </a>
        <a href="#about" className="nav-link" onClick={toggleMenu}>
          About
        </a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>
          Contact
        </a>
        <a href="#shop" className="btn btn-primary" onClick={toggleMenu}>
          Shop Now
        </a>
      </div>
    </header>
  );
};

export default Header;
