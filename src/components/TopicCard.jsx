import "./TopicCard.css";
import { Link } from "react-router-dom";

function TopicCard(props) {
    return (
        <Link to = {props.path} className = "topic-card-link">
            <div className = "topic-card">
                <h2>{props.topic}</h2>
            </div>
        </Link>
    );
}

export default TopicCard;