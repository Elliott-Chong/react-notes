import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);
  useEffect(() => {
    document.querySelector("html").className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button
            className="btn"
            onClick={() => {
              if (theme === "light-theme") {
                setTheme("dark-theme");
              } else {
                setTheme("light-theme");
              }
            }}
          >
            Toggle
          </button>
        </div>
      </nav>

      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </section>
    </main>
  );
}

export default App;
