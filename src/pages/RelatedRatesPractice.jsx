import BackTo from "../components/BackTo";
import PracticeProblem from "../components/PracticeProblem";
import relatedRatesProblems from "../data/relatedRatesProblems";


function RelatedRatesPractice() {
    return (
        <div className="practice-pg">
            <BackTo
                path="/calc1/related-rates"
                topic="Related Rates"
            />

            <h1>Related Rates Practice</h1>

            {relatedRatesProblems.map(problem => (
                <PracticeProblem
                    key={problem.number}
                    number={problem.number}
                    question={problem.question}
                    hints={problem.hints}
                    solution={problem.solution}
                />
            ))}
        </div>
    );
}

export default RelatedRatesPractice;