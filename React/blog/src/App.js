import logo from './logo.svg';
import './App.css';
import ClassComp from "./ClassComp";
import FunctionComp from "./FunctionComp"
import StateComp from "./StateComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ClassComp text="pass from parent" data={{name: "Reza"}}/>
        <FunctionComp text="pass from parent" data={{name: "Reza"}}/>
        <StateComp/>
      </header>
    </div>
  );
}

export default App;
