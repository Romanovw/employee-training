import "./extras.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Extras() {
    return (
      <div className="Extras">
        <div className="links-container-e">
        <a href="#" className="button1e">Pozostałe dodatki</a>
        <a href="#" className="button1e">Dodatek mięsny</a>
        <a href="#" className="button2e">Sos</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Extras;