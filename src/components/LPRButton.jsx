import { Link } from 'react-router-dom';
import './LPRButton.css';

function LPRButton(props) {
    return (
        <div>
            <Link to = {props.path} className = "LPRButton">{props.buttontype}</Link>
        </div>
        
    );
}

export default LPRButton;