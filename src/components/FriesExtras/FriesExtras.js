import "./friesExtras.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function FriesExtras() {
    return (
      <div className="FriesExtras">
        <div className="links-container-fex">
        <a href="#" className="button1fex">Frytki z posypką GIGANT</a>
        <a href="#" className="button2fex">Frytki z posypką małe</a>
        <a href="#" className="button3fex">Frytki z posypką duże</a>
        <a href="#" className="button4fex">OPAKOWANIE STYROPIAN</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default FriesExtras;