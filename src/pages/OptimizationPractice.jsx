import BackTo from "../components/BackTo";
import PracticeProblem from "../components/PracticeProblem";
import optimizationProblems from "../data/optimizationProblems";


function OptimizationPractice() {
    return (
        <div className="practice-pg">
            <BackTo
                path="/calc1/optimization"
                topic="Optimization"
            />

            <h1>Optimization Practice</h1>

            {optimizationProblems.map(problem => (
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

export default OptimizationPractice;