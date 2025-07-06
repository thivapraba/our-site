import React from "react";
import "./Card.css";

const PentagonImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="pentagon-image" />
  );
};

export default PentagonImage;
