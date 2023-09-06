import "./styles/main.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Tortillas from "./components/Tortillas/Tortillas";
import Lavash from "./components/Lavash/Lavash";
import Bread from "./components/Bread/Bread";
import Burgers from "./components/Burgers/Burgers";
import Fries from "./components/Fries/Fries";
import FriesExtras from "./components/FriesExtras/FriesExtras";
import Set from "./components/Set/Set";
import Box from "./components/Box/Box";
import Salads from "./components/Salads/Salads";
import Falafel from "./components/Falafel/Falafel";
import Panini from "./components/Panini/Panini";
import Nuggets from "./components/Nuggets/Nuggets";
import Extras from "./components/Extras/Extras";
import Packaging from "./components/Packaging/Packaging";
import Drinks from "./components/Drinks/Drinks";
import CanDrinks from "./components/CanDrinks/CanDrinks";
import Beer from "./components/Beer/Beer";
import Sauses from "./components/Sauces/Sauses";
import LavashMegaRecipe from "./components/Lavash/LavashMegaRecipe";

function App() {
  return (
    <div className="App">
      return(
      <Router>
        <Routes>
        <Route path="/employee-training" element={<Home/>}/>
        <Route path="/tortillas" element={<Tortillas/>}/>
        <Route path="/lavash" element={<Lavash/>}/>
        <Route path="/bread" element={<Bread/>}/>
        <Route path="/burgers" element={<Burgers/>}/>
        <Route path="/fries" element={<Fries/>}/>
        <Route path="/friesExtras" element={<FriesExtras/>}/>
        <Route path="/set" element={<Set/>}/>
        <Route path="/box" element={<Box/>}/>
        <Route path="/salads" element={<Salads/>}/>
        <Route path="/falafel" element={<Falafel/>}/>
        <Route path="/panini" element={<Panini/>}/>
        <Route path="/nuggets" element={<Nuggets/>}/>
        <Route path="/extras" element={<Extras/>}/>
        <Route path="/packaging" element={<Packaging/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/canDrinks" element={<CanDrinks/>}/>
        <Route path="/beer" element={<Beer/>}/>
        <Route path="/sauses" element={<Sauses/>}/>
        <Route path="/lavash/mega" element={<LavashMegaRecipe/>}/>
        </Routes>
      </Router>
      );
    </div>
  );
}

export default App;
