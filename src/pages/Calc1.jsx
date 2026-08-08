import "./Calc1.css";
import TopicCard from '../components/TopicCard';
import { Routes, Route} from 'react-router-dom';

function Calc1() {
    return (
        <div>
            <h1 className = "title">Calculus 1</h1>
            <div className = "container-topic-card">
                <TopicCard topic = "Related Rates" path = "/calc1/related-rates"/>
                <TopicCard topic = "Optimization" path = "/calc1/optimization"/>
            </div>
        </div>

    );
}

export default Calc1;