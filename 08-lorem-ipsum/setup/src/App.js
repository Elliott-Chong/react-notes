import React, { useState } from "react";
import data from "./data";
function App() {
  const [amount, setAmount] = useState(0);
  const [lorem, setLorem] = useState([]);

  function generate(e) {
    e.preventDefault();
    if (amount <= data.length) {
      setLorem(data.slice(0, amount));
    } else {
      setLorem(data);
    }
  }

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          min="0"
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button className="btn" type="submit" onClick={generate}>
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {lorem.map((lorem, index) => {
          return <p>{lorem}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
