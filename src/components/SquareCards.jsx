import React from "react";
import "./SquareCard.css";

const SquareCard = ({ src, title, subtitle }) => {
  return (
    <div className="square-card">
      <img src={src} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default SquareCard;
