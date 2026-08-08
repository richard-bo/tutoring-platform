import './CourseCard.css';
import { Link} from "react-router-dom";

function CourseCard(props) {
    return (
        <Link to = {props.path} className = "card-link">
            <div className = "card">
                <h2 className = "topic">{props.name}</h2>
                <p>{props.topic1}</p>
                <p>{props.topic2}</p>
                <p>And More!</p>
            </div>
        </Link>
        
    );
}

export default CourseCard;