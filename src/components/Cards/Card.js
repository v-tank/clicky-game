import React from "react";
import "./Card.css";

const Card = props => (
  // Wraps a div around the card and add onClick functionality that uses the id of the card
  <div className="card click-item" onClick={() => props.checkCard(props.id)}>
    <div className="img-container">
      {/* Places an image in a div with the name and URL retrieved as props */}
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card; // Exports the Card component
