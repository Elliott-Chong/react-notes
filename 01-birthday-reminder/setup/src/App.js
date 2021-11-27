import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <List
              key={person.id}
              name={person.name}
              img={person.image}
              age={person.age}
            />
          );
        })}
        <button
          type="button"
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
