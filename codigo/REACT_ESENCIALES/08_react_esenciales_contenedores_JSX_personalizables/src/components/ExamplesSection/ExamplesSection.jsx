import TabButton from "../../components/TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import "./ExamplesSection.css";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = (
    <p>
      Aquí se va a mostrar información sobre una característica de React, para
      ello elige una opción del menú
    </p>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const buttons = Object.values(EXAMPLES).map((button, index) => 
    <TabButton key={index} onClick={() => handleClickMenu(button.key)}>{button.title}</TabButton>
  );

  return (
    <Section title="Ejemplos React" id="reactExamples" className="miClase">
      <TabsMenu ButtonsContainer="menu" buttons={<>{buttons}</>}>
        {tabContent}
      </TabsMenu>
      <menu></menu>
    </Section>
  );
}
