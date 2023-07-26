import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
      <div className="links-container">
        <NavLink to="/lavash" className="button1">KEBAB NA CIENKIM CIEŚCIE</NavLink>
        <NavLink to="/tortillas" className="button2">TORTILLA</NavLink>
        <NavLink to="/bread" className="button3">KEBAB W BULCE</NavLink>
        <NavLink to="/burgers" className="button4">Burgery</NavLink>
        <NavLink to="/fries" className="button5">FRYTKI/SERVETS</NavLink>
        <NavLink to="/friesExtras" className="button6">FRYTKI Z POSYPKĄ</NavLink>
        <NavLink to="/set" className="button7">ZESTAW OBIADOWY</NavLink>
        <NavLink to="/box" className="button8">KEBAB BOX</NavLink>
        <NavLink to="/salads" className="button9">SAŁATKI</NavLink>
        <NavLink to="/falafel" className="button10">FALAFEL MENU</NavLink>
        <NavLink to="/panini" className="button11">Kanapki Panini</NavLink>
        <NavLink to="/nuggets" className="button12">Nuggetsy</NavLink>
        <NavLink to="/extras" className="button13">DODATKI</NavLink>
        <NavLink to="/packaging" className="button14">OPAKOWANIA</NavLink>
        <NavLink to="/drinks" className="button15">Napoje</NavLink>
        <NavLink to="/canDrinks" className="button16">Napoje-puszka</NavLink>
        <NavLink to="/beer" className="button17">PIWO</NavLink>
        <NavLink to="/sauses" className="button18">Sosy</NavLink>
      </div>
  );
}

export default Home;