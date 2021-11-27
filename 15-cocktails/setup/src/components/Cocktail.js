import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  return (
    <article className="cocktail" key={cocktail.idDrink}>
      <div className="img-container">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{cocktail.strDrink}</h3>
        <h4>{cocktail.strGlass}</h4>
        <p>{cocktail.strAlcoholic}</p>
        <Link
          to={`cocktail/${cocktail.idDrink}`}
          className="btn btn-primary btn-details"
        >
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
