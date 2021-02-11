import React from "react";

const person = (props) => {
  return (
    <div>
      <h1> This is person component </h1>
      <p onClick={props.click}>
        My Name is {props.name} and age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
