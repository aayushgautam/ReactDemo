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
  });

  const switchNameHandler = () => {
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

  return (
    <div className="App">
      <h1> This is a demo </h1>
      <h2> Please check out components one by one </h2>
      <Comp />
      <button onClick={switchNameHandler}>TRY ME OUT</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age= {personsState.persons[1].age}
        click= {switchNameHandler} 
      >
        testing out the child component
      </Person>
    </div>
  );
};

export default App;
