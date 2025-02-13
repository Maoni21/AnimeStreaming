import logo from './logo.svg';
import './App.css';
import WelcomePage from "./components/WelcomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="App">
          <Navbar />
          <WelcomePage/>
      </div>
  );
}

export default App;
