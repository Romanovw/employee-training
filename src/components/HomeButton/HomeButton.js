import "./homeButton.css"
import home from "./home.png"
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/employee-training" id="homeButton"><img id="homeImg" src={home}/></Link>
  );
};

export default HomeButton;