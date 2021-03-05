import logo from './logo.svg';
import './App.css';
import ClassComp from "./ClassComp";
import FunctionComp from "./FunctionComp"
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        </a>
        <ClassComp/>
        <FunctionComp/>
      </header>
    </div>
  );
}

export default App;
