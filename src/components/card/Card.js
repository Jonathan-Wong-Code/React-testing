import React from "react";

const Card = ({ title, author, year }) => {
  return (
    <div>
      <h2>CARD COMPONENT</h2>
      <h3>{title}</h3>
      <p>By: {author}</p>
      <p>Published: {year}</p>
    </div>
  );
};

export default Card;
