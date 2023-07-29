import "./canDrinks.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function CanDrinks() {
    return (
      <div className="CanDrinks">
        <div className="links-container-c">
        <a href="#" className="button1c">Coca-Cola 0,33l</a>
        <a href="#" className="button1c">Burn 0,25l</a>
        <a href="#" className="button2c">Monster 0,5l</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default CanDrinks;