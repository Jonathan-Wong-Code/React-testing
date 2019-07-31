import React from "react";

const Card = ({ title, author, year }) => {
  return (
    <div>
      <h2>CARD COMPONENT</h2>
      <h3 data-testid="title">{title}</h3>
      <p data-testid="author">By: {author}</p>
      <p data-testid="year">Published: {year}</p>
    </div>
  );
};

export default Card;
