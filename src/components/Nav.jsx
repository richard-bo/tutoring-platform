import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className = "nav">
            <a href = "#" className = "logolink">Grind</a>
            <ul className = "links">
                <li><a href = "#calc1">Calculus 1</a></li>
                <li><a href = "#calc2">Calculus 2</a></li>
            </ul>
        </nav>
    );
}

export default Nav;

