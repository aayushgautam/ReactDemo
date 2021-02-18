import Comp from "./Comp-one/Comp-one";
import Person from "./Person/Person";

import "./App.css";
import { useState } from "react";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Aayush",
        age: "23",
      },
      {
        name: "Gautam",
        age: "24",
      },
    ],
    showDiv: false,
  });

  const switchNameHandler = (newName) => {
    console.log("was clicked!");
    setPersonsState({
      persons: [
        {
          name: "Deepanshu",
          age: "25",
        },
        {
          name: "Pratap",
          age: "20",
        },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {
          name: event.target.value,
          age: "25",
        },
        {
          name: "Pratap",
          age: "20",
        },
      ],
    });
  };

  const toggleButton = () => {
    setPersonsState({
      
    })
  };

  return (
    <div>
      <div className="App">
        <h1> This is a demo </h1>
        <h2> Please check out components one by one </h2>
        <Comp />
        <button onClick={() => switchNameHandler("Random Kappoor")}>
          TRY ME OUT
        </button>
        <button onClick={toggleButton}> TOGGLE DIV </button>
        { === true ? (
          <div>
            <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age}
              change={nameChangedHandler}
            />
            <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
              click={() => switchNameHandler("Harsh Beniwal")}
            >
              testing out the child component
            </Person>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
