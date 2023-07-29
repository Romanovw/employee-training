import "./falafel.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Falafel() {
    return (
      <div className="Falafel">
        <div className="links-container-fal">
        <a href="#" className="button1fal">Falafel w bułce</a>
        <a href="#" className="button2fal">Falafel w tortilli</a>
        <a href="#" className="button3fal">Falafel zestaw obiadowy</a>
        <a href="#" className="button4fal">VEGE burger z falafelem</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Falafel;