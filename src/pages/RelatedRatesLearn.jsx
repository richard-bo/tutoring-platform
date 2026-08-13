import BackTo from "../components/BackTo";
import LadderProblem from "../assets/images/related-rates-ladder.jpg";
import './RelatedRatesLearn.css';

function RelatedRatesLearn() {
    return (
        <div className="learn-pg">
            <BackTo path="/calc1/related-rates" topic="Related Rates" />

            <h1 className="learn-pg-title">
                Related <span>Rates</span>
            </h1>

            <section className="learn-section">
                <h2 className="learn-section-heading">What are related rates?</h2>
                <p className="learn-section-body">
                    Related rates are where you find how fast one quantity is changing by relating it to another quantity whose rate of change we already know.These rates are calculated with respect to time, and we use the concepts of implicit differentiation and the chain rule to solve these problems.
                </p>
            </section>

            <section className="learn-section">
                <h2 className="learn-section-heading">The basic idea</h2>
                <p className="learn-section-body">
                    In a related rates problem, we will typically have multiple quantities changing together. We know how fast one of them is changing and want to figure out how fast another is changing at a specific moment.
                </p>
            </section>

            <section className="learn-section">
                <h2 className="learn-section-heading">A step by step approach</h2>
                <ol className="learn-steps">
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">1</span>
                        <p className="learn-steps-text">
                            <strong>Read the problem carefully.</strong> Drawing a diagram and labeling helps a lot.
                        </p>
                    </li>
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">2</span>
                        <p className="learn-steps-text">
                            <strong>Identify all the quantities.</strong> Note what you are trying to find and keep track of other rates and variables.
                        </p>
                    </li>
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">3</span>
                        <p className="learn-steps-text">
                            <strong>Find an equation.</strong> Find an equation that will connect all of your variables. There will be times where you might need to use geometry to eliminate a variable.
                        </p>
                    </li>
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">4</span>
                        <p className="learn-steps-text">
                            <strong>Use implicit differentiation with respect to time.</strong> Take the derivative on both sides with respect to time and use your differentiation techniques.
                        </p>
                    </li>
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">5</span>
                        <p className="learn-steps-text">
                            <strong>Substitute your values.</strong> Plug in the information you were given and solve for the unknown rate.
                        </p>
                    </li>
                </ol>
            </section>

            <section className = "learn-section">
                <h2 className = "learn-section-heading">Here is a worked out example</h2>
                <p className = "learn-section-body">A 10-foot ladder is leaning against a wall. The bottom of the ladder is sliding away from the wall at a rate of 2 ft/s. How fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 feet from the wall?</p>
                <img src = {LadderProblem} alt = "My solution to a sliding ladder related rates problem." className = "example-solution"></img>
                <p className = "learn-section-body">
                    The negative sign in the final answer means the height of the ladder is decreasing, which makes sense because the ladder is sliding down the wall.
                </p>

            </section>

            <section className="learn-section learn-section-tip">
                <h2 className="learn-section-heading">Tips / Things to Keep in Mind</h2>
                <p className="learn-section-body">
                    Make sure you do not substitute any numbers that vary with time too early. You should only do this after you differentiate.
                </p>
            </section>

        </div>
    );
}

export default RelatedRatesLearn;
