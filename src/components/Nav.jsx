import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className = "nav">
            <Link to = "/" className = "logolink">Grind</Link>
            <div className = "links">
                <Link to = "/calc1">Calculus 1</Link>
                <Link to = "/calc2">Calculus 2</Link>
            </div>
        </nav>
    );
}

export default Nav;
