import "./salads.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Salads() {
    return (
      <div className="Salads">
        <div className="links-container-s">
        <a href="#" className="button1s">OPAKOWANIE SAŁATKI</a>
        <a href="#" className="button2s">Sałatka Efes</a>
        <a href="#" className="button2s">Sałatka Turecka</a>
        <a href="#" className="button2s">Sałatka Grecka</a>
        <a href="#" className="button2s">Sałatka Włoski Przysmak</a>
        <a href="#" className="button2s">Sałatka z Tuńczykiem</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Salads;