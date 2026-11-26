import BackTo from '../components/BackTo';
import './RelatedRates.css';
import LPRButton from '../components/LPRButton';

function Optimization() {
    return (
        <div>
            <BackTo path = "/calc1" topic = "Calculus 1"></BackTo>
            <h1 className = "title">Optimization</h1>
            <p className = "discription">The idea of optimization is a useful topic in the real world. We get two equations, the objective and the constraint. The objective is what we are either trying to maximize or minimize, while the constraint equation shows the restrictions given in the problem. We use the constraint to rewrite our objective equation in terms of a single variable before we differentiate.</p>
            <div className = "LPRButtons">
                <LPRButton buttontype = "Learn" path = "/calc1/optimization/learn"></LPRButton>
                <LPRButton buttontype = "Practice" path = "/calc1/optimization/practice"></LPRButton>
                <LPRButton buttontype = "Resources" path = "/calc1/optimization/resources"></LPRButton>
            </div>
        </div>
    );
}

export default Optimization;