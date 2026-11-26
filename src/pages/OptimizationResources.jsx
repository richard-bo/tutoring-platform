import BackTo from "../components/BackTo";
import ResourceCard from "../components/ResourceCard";
import optimizationResources from "../data/optimizationResources";
import "./RelatedRatesResources.css";

function OptimizationResources() {
    return (
        <div className="resources-pg">
            <BackTo
                path="/calc1/optimization"
                topic="Optimization"
            />

            <h1>Optimization Resources</h1>

            <div className="resources-container">
                {optimizationResources.map(resource => (
                    <ResourceCard
                        key={resource.id}
                        title={resource.title}
                        url={resource.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default OptimizationResources;