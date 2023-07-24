import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
      <div className="links-container">
        <a href="#" className="button1">KEBAB NA CIENKIM CIEŚCIE</a>
        <NavLink to="/tortillas" className="button2">TORTILLA</NavLink>
        <a href="#" className="button3">KEBAB W BULCE</a>
        <a href="#" className="button4">Burgery</a>
        <a href="#" className="button5">FRYTKI/SERVETS</a>
        <a href="#" className="button6">FRYTKI Z POSYPKĄ</a>
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