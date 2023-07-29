import "./fries.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Fries() {
    return (
      <div className="Fries">
        <div className="links-container-f">
        <a href="#" className="button1f">Frytki małe</a>
        <a href="#" className="button1f">Frytki duże</a>
        <a href="#" className="button1f">SERWETS duży kurczak</a>
        <a href="#" className="button1f">SERWETS duży mieszany</a>
        <a href="#" className="button1f">SERWETS duży wołowy</a>
        <a href="#" className="button1f">SERWETS średni kurczak</a>
        <a href="#" className="button1f">SERWETS średni mieszany</a>
        <a href="#" className="button1f">SERWETS średni wołowy</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Fries;