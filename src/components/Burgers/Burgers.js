import "./burgers.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Burgers() {
    return (
      <div className="Burgers">
        <div className="links-container-brg">
        <a href="#" className="button1brg">Burger Jagnięcy</a>
        <a href="#" className="button2brg">Burger Wołowy</a>
        <a href="#" className="button3brg">DODATKI DO BURGERÓW</a>
        <a href="#" className="button4brg">OPAKOWANIE BURGER</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Burgers;