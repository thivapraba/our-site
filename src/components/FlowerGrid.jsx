import React from "react";
import FlowerCard from "./FlowerCard";
import "./FlowerGrid.css";

const bouquets = [
  { src: "our-site/DSC03285_(1).jpg", title: "Warm Wishes", rating: 4.5, price: 3000, oldPrice: 169 },
  { src: "our-site/DSC03295.jpg", title: "Caramel Charm", rating: 4.2, price: 4000, oldPrice: 199 },
  { src: "our-site/DSC03292.jpg", title: "Purple Hues", rating: 4.8, price: 2500, oldPrice: 149 },
  { src: "our-site/DSC03287.jpg", title: "Clouds of Affection", rating: 4.7, price: 5000 },
];

function FlowerGrid() {
  return (
    <div className="flower-grid">
      {bouquets.map((b, i) => (
        <FlowerCard key={i} {...b} />
      ))}
    </div>
  );
}

export default FlowerGrid;
