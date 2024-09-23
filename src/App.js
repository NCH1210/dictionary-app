import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <Dictionary />
      </header>

      <footer>Coded by SheCodes</footer>
    </div>
  );
}

export default App;
