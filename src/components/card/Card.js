import "./card.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";
function Card() {
    return (
      <div className="card">
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
        <ol className="text">
        <li>
          Maega Lavash
        </li>
        <li>
          Maega Lavash
        </li>
        <li>
          Maega Lavash
        </li>
        <li>
          Maega Lavash
        </li>
        <li>
          Maega Lavash
        </li>
        </ol>
        <div className="back">
        <HomeButton/>
        <BackButton/>
        </div>
      </div>
    );
  }
  
  export default Card;