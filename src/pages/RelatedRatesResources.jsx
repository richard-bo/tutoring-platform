import BackTo from "../components/BackTo";
import ResourceCard from "../components/ResourceCard";
import relatedRatesResources from "../data/relatedRatesResources";
import "./RelatedRatesResources.css";

function RelatedRatesResources() {
    return (
        <div className="resources-pg">
            <BackTo
                path="/calc1/related-rates"
                topic="Related Rates"
            />

            <h1>Related Rates Resources</h1>

            <div className="resources-container">
                {relatedRatesResources.map(resource => (
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

export default RelatedRatesResources;