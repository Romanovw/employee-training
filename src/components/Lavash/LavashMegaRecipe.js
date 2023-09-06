import "./lavash.css"
import BackButton from "../backButton/BackButton";
import HomeButton from "../HomeButton/HomeButton";

function LavashMegaRecipe() {
    return (
        <div className="card">
            <div className="back">
                <HomeButton />
                <BackButton />
            </div>
            <ol className="text">
                <li>
                    Mega Lavash
                </li>
                <li>
                    Mega Lavash
                </li>
                <li>
                    Mega Lavash
                </li>
                <li>
                    Mega Lavash
                </li>
                <li>
                    Mega Lavash
                </li>
            </ol>
            <div className="back">
                <HomeButton />
                <BackButton />
            </div>
        </div>
    );
}

export default LavashMegaRecipe;