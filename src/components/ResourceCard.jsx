import "./ResourceCard.css";

function ResourceCard(props) {
    return (
        <a
            className="resource-card"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>{props.title}</h2>
        </a>
    );
}

export default ResourceCard;