import "./TopicCard.css";

function TopicCard(props) {
    return (
        <div className = "topiccard">
            <h2>{props.topic}</h2>
        </div>
    );
}

export default TopicCard;