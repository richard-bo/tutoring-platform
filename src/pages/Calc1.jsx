import "./Calc1.css";
import TopicCard from '../components/TopicCard';

function Calc1() {
    return (
        <div>
            <h1 className = "title">Calculus 1</h1>
            <div className = "container-topic-card">
                <TopicCard topic = "Related Rates"/>
                <TopicCard topic = "Optimization"/>
            </div>
        </div>

    );
}

export default Calc1;