import React from "react";

import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <h1> This is person component </h1>
      <p onClick={props.click}>
        My Name is {props.name} and age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
