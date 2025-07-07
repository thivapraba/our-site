import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img src={"/our-site/Hero.jpg"} alt="Artificial flower bouquets" className="hero-img" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Premium Artificial Bouquets</h1>
        <p>Elegant. Timeless. Perfect for Every Space.</p>
        <button className="shop-btn">Call us Now</button>
      </div>
    </section>
  );
}

export default Hero;
