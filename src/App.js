import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container">
      <Weather />
      <footer>
        <p>Source code on <a href="https://github.com/michalina-galczak/weather-app-react">GitHub</a>. Coded by Michalina Galczak</p>
        <p><a href='https://www.freepik.com/vectors/background'>Background vector created by pikisuperstar - www.freepik.com</a></p>
      </footer>
    </div>
  );
}

export default App;
