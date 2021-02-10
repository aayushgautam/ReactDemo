import Comp from "./Comp-one/Comp-one";
import Person from "./Person/Person";

import "./App.css";
import { Component } from "react";

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

  switchNameHandler = () => {
    console.log("was clicked!");
    this.setState({
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

  render() {
    return (
      <div className="App">
        <h1> This is a demo </h1>
        <h2> Please check out components one by one </h2>
        <Comp />
        <button onClick={this.switchNameHandler}>TRY ME OUT</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
        >
          testing out the child component
        </Person>
      </div>
    );
  }
}

export default App;
