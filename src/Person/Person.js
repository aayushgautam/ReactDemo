import React from "react";

const person = (props) => {
    return (
        <div>
            <h1> This is person component </h1>
            <p>My Name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;