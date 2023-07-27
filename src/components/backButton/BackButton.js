import "./backButton.css"
import back from "./back.png"
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="#" id="backButton" onClick={() => window.history.back()}><img id="backImg" src={back}/></Link>
  );
};

export default BackButton;