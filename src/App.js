import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Tortillas from "./components/Tortillas/Tortillas";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/employee-training" element={<Home/>}/>
        <Route path="/tortillas" element={<Tortillas/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
