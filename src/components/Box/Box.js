import "./box.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Box() {
    return (
      <div className="Box">
        <div className="links-container-box">
        <a href="#" className="button1box">duży Box kurczak</a>
        <a href="#" className="button1box">duży Box mieszane</a>
        <a href="#" className="button1box">duży Box wołowy</a>
        <a href="#" className="button1box">średni Box kurczak</a>
        <a href="#" className="button1box">średni Box mieszane</a>
        <a href="#" className="button1box">średni Box wołowy</a>
        </div>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Box;