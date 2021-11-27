import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [text, setText] = useState("");
  return (
    <main>
      <section className="markdown">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="input"
        ></textarea>
        <article className="result">
          <ReactMarkdown children={text} />
        </article>
      </section>
    </main>
  );
}

export default App;
