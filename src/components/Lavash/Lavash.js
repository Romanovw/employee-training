import "./lavash.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
import { NavLink } from "react-router-dom";

function Lavash() {
    return (
      <div className="Lavash">
        <div className="links-container-l">
        <NavLink to="/lavash/mega" className="button1l">MEGA GIGANT w cieście</NavLink>
        <a href="#" className="button2l">Gigant w cieście z frytkami</a>
        <a href="#" className="button3l">Kebab w cieście</a>
        <a href="#" className="button4l">Kebab studencki</a>
        <a href="#" className="button5l">Kebab grecki</a>
        <a href="#" className="button6l">Gigant w cieście</a>
        <a href="#" className="button7l">Kebab wege/tuńczyk/łosos</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Lavash;