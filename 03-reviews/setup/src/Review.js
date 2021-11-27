import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (current === people.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const prev = () => {
    if (current === 0) {
      setCurrent(people.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const random = () => {
    let random = Math.ceil(Math.random() * people.length - 1);
    while (random === current) {
      random = Math.ceil(Math.random() * people.length - 1);
    }
    console.log("random is " + random);
    setCurrent(() => random);
    console.log("current is " + current);
    console.log("---------------");
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={people[current].image} alt="" className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{people[current].name}</h4>
          <p className="job">{people[current].job}</p>
          <p className="info">{people[current].text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prev}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={next}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={random}>
            Surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Review;
