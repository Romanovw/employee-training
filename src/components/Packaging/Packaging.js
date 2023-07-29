import "./packaging.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Packaging() {
    return (
      <div className="Packaging">
        <div className="links-container-pack">
        <a href="#" className="button1pack">RECYKLING REKLAMÓWKA</a>
        <a href="#" className="button2pack">KOSZT DOSTAWY</a>
        <a href="#" className="button3pack">KOSZT DOSTAWY UBER/ PYSZNE/ GLOVO</a>
        <a href="#" className="button4pack">OPAKOWANIE</a>
        <a href="#" className="button5pack">USŁUGA Gastronomiczna</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Packaging;