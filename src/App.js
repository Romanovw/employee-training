import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Tortillas from "./components/Tortillas/Tortillas";
import Lavash from "./components/Lavash/Lavash";
import Bread from "./components/Bread/Bread";
import Burgers from "./components/Burgers/Burgers";
import Fries from "./components/Fries/Fries";
import FriesExtras from "./components/FriesExtras/FriesExtras";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/employee-training" element={<Home/>}/>
        <Route path="/tortillas" element={<Tortillas/>}/>
        <Route path="/lavash" element={<Lavash/>}/>
        <Route path="/bread" element={<Bread/>}/>
        <Route path="/burgers" element={<Burgers/>}/>
        <Route path="/fries" element={<Fries/>}/>
        <Route path="/friesExtras" element={<FriesExtras/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
