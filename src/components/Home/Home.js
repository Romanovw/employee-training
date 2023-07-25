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
        <a href="#" className="button7">ZESTAW OBIADOWY</a>
        <a href="#" className="button8">KEBAB BOX</a>
        <a href="#" className="button9">SAŁATKI</a>
        <a href="#" className="button10">FALAFEL MENU</a>
        <a href="#" className="button11">Kanapki Panini</a>
        <a href="#" className="button12">Nuggetsy</a>
        <a href="#" className="button13">DODATKI</a>
        <a href="#" className="button14">OPAKOWANIA</a>
        <a href="#" className="button15">Napoje</a>
        <a href="#" className="button16">Napoje-puszka</a>
        <a href="#" className="button17">PIWO</a>
        <a href="#" className="button18">Sosy</a>
      </div>
  );
}

export default Home;