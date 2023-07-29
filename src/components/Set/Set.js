import "./set.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Set() {
    return (
      <div className="Set">
        <div className="links-container-set">
        <a href="#" className="button1set">OPAKOWANIE STYROPIAN</a>
        <a href="#" className="button2set">DUŻY Zestaw Ob kurczak</a>
        <a href="#" className="button3set">DUŻY Zestaw Ob mięso mieszane</a>
        <a href="#" className="button4set">DUŻY Zestaw Ob Wołowy</a>
        <a href="#" className="button5set">ŚREDNI Zestaw Ob kurczak</a>
        <a href="#" className="button6set">ŚREDNI Zestaw Ob Wołowy</a>
        <a href="#" className="button7set">ŚREDNI Zestaw Ob mięso mieszane</a>
        <a href="#" className="button8set">TORT</a>
        <a href="#" className="button9set">COLA 0,33L ZESTAW PROMOCJA</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Set;