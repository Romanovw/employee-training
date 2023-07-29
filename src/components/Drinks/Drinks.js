import "./drinks.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Drinks() {
    return (
      <div className="Drinks">
        <div className="links-container-d">
        <a href="#" className="button1d">Coca-Cola 0,5l</a>
        <a href="#" className="button1d">Fanta 0,5l</a>
        <a href="#" className="button1d">Sprite 0,5l</a>
        <a href="#" className="button1d">Fuzetea 0,5l</a>
        <a href="#" className="button1d">Kinley 0,5l</a>
        <a href="#" className="button1d">Kropla Beskidu 0,5l</a>
        <a href="#" className="button1d">Sok Cappy 0,33l</a>
        <a href="#" className="button2d">Kawa</a>
        <a href="#" className="button2d">Herbata</a>
        <a href="#" className="button3d">Ayran</a>
        <a href="#" className="button4d">Frytki małe GRATIS</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Drinks;