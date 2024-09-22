import { CORE_CONCEPTS } from "./data_example.jsx";

import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcepts.jsx'
import TabButton from "./components/TabButton.jsx";

import { useState } from "react";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />

          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Components2</TabButton>
            <TabButton>Components3</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
