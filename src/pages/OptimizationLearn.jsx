import BackTo from "../components/BackTo";
import OptimizationExample from "../assets/images/optimization-example.jpg";
import "./RelatedRatesLearn.css";

function OptimizationLearn() {
    return (
        <div className="learn-pg">
            <BackTo path="/calc1/optimization" topic="Optimization" />

            <h1 className="learn-pg-title">
                <span>Optimization</span>
            </h1>

            <section className="learn-section">
                <h2 className="learn-section-heading">
                    What is optimization?
                </h2>
                <p className="learn-section-body">
                    Optimization is where we try to find the maximum or minimum value of a quantity given certain conditions. We use our knowledge of derivatives and extrema to solve these problems.
                </p>
            </section>

            <section className="learn-section">
                <h2 className="learn-section-heading">
                    The basic idea
                </h2>
                <p className="learn-section-body">
                    In an optimization problem, we will typically have a quantity that we want to maximize or minimize and some restrictions that we have to work with. We learnt that taking the derivative of a function allows is to find maximums and minimums, so we will use this idea here as well.
                </p>
            </section>

            <section className="learn-section">
                <h2 className="learn-section-heading">
                    A step by step approach
                </h2>

                <ol className="learn-steps">
                    <li className="learn-steps-item">
                        <span className="learn-steps-num">1</span>
                        <p className="learn-steps-text">
                            <strong>Read the problem carefully.</strong> Sometimes it is worthwhile to draw a diagram. Make sure to note what it is that we are trying to maximize or minimize.
                        </p>
                    </li>

                    <li className="learn-steps-item">
                        <span className="learn-steps-num">2</span>
                        <p className="learn-steps-text">
                            <strong>Find your objective equation.</strong> Get an equation that shows what we are trying to maximize or minimize.
                        </p>
                    </li>

                    <li className="learn-steps-item">
                        <span className="learn-steps-num">3</span>
                        <p className="learn-steps-text">
                            <strong>Find your constraint equation.</strong> Use the remaining information in the problem to come up with what the constraint equation is. This will be used to substutite into our objective equation later so we can get it in terms of one variable. 
                        </p>
                    </li>

                    <li className="learn-steps-item">
                        <span className="learn-steps-num">4</span>
                        <p className="learn-steps-text">
                            <strong>Differentiate.</strong> Take the derivative of your objective function and find the critical values.
                        </p>
                    </li>

                    <li className="learn-steps-item">
                        <span className="learn-steps-num">5</span>
                        <p className="learn-steps-text">
                            <strong>Verify your answer.</strong> It is always good practice to verify that you actually found a maximum when asked to find a maximum or vice versa.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="learn-section">
                <h2 className="learn-section-heading">
                    Here is a worked out example
                </h2>

                <p className="learn-section-body">
                    A farmer has 120 feet of fencing and wants to enclose a rectangular area. What dimensions will maximize the enclosed area?
                </p>

                <img src={OptimizationExample} alt="Worked solution to the rectangular fencing problem" className="example-solution"/>
            </section>

            <section className="learn-section learn-section-tip">
                <h2 className="learn-section-heading">
                    Tips / Things to Keep in Mind
                </h2>
                <p className="learn-section-body">
                    Make sure we are always substituting our constraint equation into our objective equation and differeniating that equation. 
                </p>
            </section>
        </div>
    );
}

export default OptimizationLearn;