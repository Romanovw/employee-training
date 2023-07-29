import "./panini.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Panini() {
    return (
      <div className="Panini">
        <div className="links-container-p">
        <a href="#" className="button1p">Panini z mięsem kurczak</a>
        <a href="#" className="button1p">Panini z mięsem wołowe</a>
        <a href="#" className="button1p">Panini z mięsem mieszane</a>
        <a href="#" className="button1p">Panini z salami i serem żółtym</a>
        <a href="#" className="button1p">Panini z tuńczykiem i kukurydzą</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Panini;