import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";
// import { StaticRouter } from "react-router-dom";

const CocktailList = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <section className="section">
        <h2 className="section-title">
          {state.error
            ? "No Cocktails Matched Your Search Criteria"
            : "Cocktails"}
        </h2>
        {!state.error && (
          <div className="cocktails-center">
            {state.cocktails.drinks.map((drink) => {
              return <Cocktail cocktail={drink} key={drink.idDrink}></Cocktail>;
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default CocktailList;
