import React, { Component } from 'react';

let StaffInformation = props => {
  let color;
  switch (props.role) {
    case 'Manager':
      color = 'brown';
      break;
    case 'Assistant':
      color = 'green';
      break;
    default:
      color = 'pink';
  }

  console.log(props);
  return (
    <div style={{ backgroundColor: color }}>
      <h4>{props.name}</h4>
      <p>Role: {props.role}</p>
      <span>Additional Information:</span>
      <div>{props.children}</div>
    </div>
  );
};

export default StaffInformation;
