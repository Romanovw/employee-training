import "./beer.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Beer() {
    return (
      <div className="Beer">
        <div className="links-container-beer">
        <a href="#" className="button1beer">Żywiec</a>
        <a href="#" className="button1beer">Warka jasna</a>
        <a href="#" className="button1beer">Heineken</a>
        <a href="#" className="button1beer">Desperados</a>
        <a href="#" className="button1beer">Radler</a>
        <a href="#" className="button2beer">Corona 0%</a>
        <a href="#" className="button3beer">Corona alkoholowa</a>
        <a href="#" className="button1beer">Warka Strong</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Beer;