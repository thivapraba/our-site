import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Events from "./components/Events";
import PentagonLayout from "./components/PentagonLayout";
import SquareCards from "./components/SquareCards";
import FlowerGrid from "./components/FlowerGrid";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <section className="pentagon-section">
        <h2 className="section-title">Our Premium Collections</h2>
        <FlowerGrid />
      </section>

      <Events />

      {/* <section className="pentagon-section">
        <h2 className="section-title">Our Premium Collections</h2>
        <PentagonLayout />
      </section> */}

      {/* <section className="square-section">
        <h2 className="section-title">Shop by Category</h2>
        <SquareCards />
      </section> */}

      <About />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;
