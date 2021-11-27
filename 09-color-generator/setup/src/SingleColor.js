import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color }) => {
  const rgb = rgbToHex(...color.rgb);
  const type = color.type === "shade";
  const [alert, setAlert] = useState(false);
  console.log(rgb);

  return (
    <article
      className={`color ${type ? "color-light" : null}`}
      style={{ backgroundColor: rgb }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(rgb);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{rgb}</p>
      {alert && <p className="alert">Copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
