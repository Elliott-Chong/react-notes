import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [categories, setCategories] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);

  const getCategories = (items) => {
    let cats = [];
    items.forEach((item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    setCategories(cats);
  };

  const changeCurrent = (e) => {
    console.log(e.target.innerText);
    setCurrentItems(
      items.filter((item) => {
        return item.category === e.target.innerText.toLowerCase();
      })
    );
  };

  useEffect(() => {
    getCategories(items);
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          changeCurrent={changeCurrent}
          items={items}
          setCurrentItems={setCurrentItems}
        />
        <Menu items={currentItems} />
      </section>
    </main>
  );
}

export default App;
