import CoreConcepts from "../../components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConceptsSection(){
    return (
    <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
          {CORE_CONCEPTS.map((conceptItem, index)=> 
            <CoreConcepts key={index} {...conceptItem} />
          )}
        </div>
    </section>
    );
}