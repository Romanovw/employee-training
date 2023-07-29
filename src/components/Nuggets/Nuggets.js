import "./nuggets.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Nuggets() {
    return (
      <div className="Nuggets">
        <div className="links-container-n">
        <a href="#" className="button1n">Nuggetsy 6 sztuk</a>
        <a href="#" className="button1n">Nuggetsy 12 sztuk</a>
        <a href="#" className="button2n">Zestaw obiadowy nuggetsy</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Nuggets;