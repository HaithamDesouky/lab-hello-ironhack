import React, { Component } from 'react';

import './Box.css';

function BoxComponent(props) {
  return (
    <div className="box">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <small>Date Posted: {props.dateMade.toString()}</small>
      <span>{props.utilities}</span>
      <span>It is {props.completed ? 'completed ' : 'not completed'} </span>
    </div>
  );
}

export default BoxComponent;
