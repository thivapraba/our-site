import React from "react";
import "./FlowerCard.css";

const FlowerCard = ({ src, title, rating, price, oldPrice }) => {
  return (
    <div className="flower-card">
      <div className="diamond-frame">
        <img src={src} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        {/* <div className="rating">⭐ {rating}</div> */}
        <div className="price">
          <span className="current">Rs {price}</span>
          {/* {oldPrice && <span className="old">RM {oldPrice}</span>} */}
        </div>
        {/* <button className="add-btn">Add to Cart</button> */}
      </div>
    </div>
  );
};

export default FlowerCard;
