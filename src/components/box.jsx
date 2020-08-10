import React, { Component } from 'react';

import './Box.css';

const BoxComponent = ({
  image,
  title,
  text,
  dateMade,
  utilities,
  completed
}) => {
  return (
    <div className="box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <small>Date Posted: {dateMade.toString()}</small>
      <span>{utilities}</span>
      <span>It is {completed ? 'completed ' : 'not completed'} </span>
    </div>
  );
};

export default BoxComponent;
