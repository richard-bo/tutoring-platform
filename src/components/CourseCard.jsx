import './CourseCard.css';

function CourseCard(props) {
    return (
        <div className = "card">
        <h2 className = "topic">{props.name}</h2>
        <p>{props.topic1}</p>
        <p>{props.topic2}</p>
        <p>And More!</p>
        </div>
    );
}

export default CourseCard;