import Comp from "./Comp-one/Comp-one";
import Person from "./Person/Person";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1> This is a demo  </h1>
      <h2> Please check out components one by one </h2>
      <Comp />
      <Person name="Aayush" age="23" />
      <Person name="Gautam" age="23">testing out the child component</Person>
    </div>
  );
}

export default App;
