import "./tortillas.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Tortillas() {
    return (
      <div className="Tortillas">
        <div className="links-container-t">
        <a href="#" className="button1t">BIG KEBAB TORTILLA KURCZAK</a>
        <a href="#" className="button1t">BIG KEBAB TORTILLA WOŁOWE</a>
        <a href="#" className="button1t">BIG KEBAB TORTILLA MIESZANE</a>
        <a href="#" className="button2t">TORTILLA Z FRYTKAMI I MIĘSEM KURCZAK</a>
        <a href="#" className="button2t">TORTILLA Z FRYTKAMI I MIĘSEM WOŁOWE</a>
        <a href="#" className="button2t">TORTILLA Z FRYTKAMI I MIĘSEM MIESZANE</a>
        <a href="#" className="button3t">TORTILLA Z NUGGETSAMI</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Tortillas;