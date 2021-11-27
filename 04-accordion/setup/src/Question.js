import React, { useState } from "react";
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [expand, setExpand] = useState(false);
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>

        <button
          className="btn"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {expand && <p>{info}</p>}
    </article>
  );
};

export default Question;
