import Comp from "./Comp-one/Comp-one";
import Person from "./Person/Person";

import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import react from "react";

class App extends Component {
  state = {
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
  };

  render() {
    return (
      <div className="App">
        <h1> This is a demo </h1>
        <h2> Please check out components one by one </h2>
        <Comp />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age} >
          testing out the child component
        </Person>
      </div>
    );
  }
}

export default App;
