import "./sauses.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Sauses() {
    return (
      <div className="Sauses">
        <div className="links-container-sauses">
        <a href="#" className="button1sauses">Ketchup</a>
        <a href="#" className="button1sauses">Majonez</a>
        <a href="#" className="button1sauses">Musztarda</a>
        <a href="#" className="button1sauses">Sos łagodny</a>
        <a href="#" className="button1sauses">Sos mieszany</a>
        <a href="#" className="button1sauses">Sos ostry</a>
        <a href="#" className="button1sauses">Sos sriracha ostry</a>
        <a href="#" className="button1sauses">Sos sriracha z cebulką</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Sauses;