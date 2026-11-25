import { useState } from "react";
import "./PracticeProblem.css";

function PracticeProblem(props) {
    const [hintCount, setHintCount] = useState(0);
    const [showSolution, setShowSolution] = useState(false);

    return (
        <section className="practice-problem">
            <h2>Problem {props.number}</h2>

            <p>{props.question}</p>

            <button
                onClick={() => setHintCount(prev => prev + 1)}
                disabled={hintCount >= props.hints.length}
            >
                Show Next Hint
            </button>

            <button onClick={() => setShowSolution(prev => !prev)}>
                {showSolution ? "Hide Solution" : "Show Solution"}
            </button>

            {props.hints.slice(0, hintCount).map((hint, index) => (
                <p key={index}>
                    Hint {index + 1}: {hint}
                </p>
            ))}

            {showSolution && (
                <div className="practice-solution">
                <h3>Solution</h3>
                 <img
                    src={props.solution}
                    alt={`Worked solution to problem ${props.number}`}
                />
                </div>
            )}
        </section>
    );
}

export default PracticeProblem;