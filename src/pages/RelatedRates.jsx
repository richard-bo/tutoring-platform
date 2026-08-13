import BackTo from '../components/BackTo';
import './RelatedRates.css';
import LPRButton from '../components/LPRButton';

function RelatedRates() {
    return (
        <div>
            <BackTo path = "/calc1" topic = "Calculus 1"></BackTo>
            <h1 className = "title">Related Rates</h1>
            <p className = "discription">The idea of related rates is to find how quickly one quantity changes by relating it to another quantity. We use implicit differentiation, with respect to time, to solve these problems.</p>
            <div className = "LPRButtons">
                <LPRButton buttontype = "Learn" path = "/calc1/related-rates/learn"></LPRButton>
                <LPRButton buttontype = "Practice" path = "/calc1/related-rates/practice"></LPRButton>
                <LPRButton buttontype = "Resources" path = "/calc1/related-rates/resources"></LPRButton>
            </div>
        </div>
    );
}

export default RelatedRates;