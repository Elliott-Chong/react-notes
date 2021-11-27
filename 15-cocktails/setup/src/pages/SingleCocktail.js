import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = ({ match }) => {
  const { params } = match;
  const { fetch_cocktails, state } = useGlobalContext();
  useEffect(() => {
    fetch_cocktails(`${url}${params.id}`);
  }, [fetch_cocktails, params.id]);
  let ingredients = [];
  if (!state.loading) {
    for (const keys in state.cocktails.drinks[0]) {
      if (keys.includes("Ingredient")) {
        if (state.cocktails.drinks[0][keys]) {
          ingredients.push(state.cocktails.drinks[0][keys]);
        }
      }
    }
  }
  if (state.loading) {
    return <Loading />;
  }
  console.log(state);
  return (
    <>
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
        <h2 className="section-title">{state.cocktails.drinks[0].strDrink}</h2>
        <div className="drink">
          <img
            src={state.cocktails.drinks[0].strDrinkThumb}
            alt={state.cocktails.drinks[0].strDrink}
          />
          <div className="drink-info">
            <p>
              <span className="drink-data">name:</span>
              {state.cocktails.drinks[0].strDrink}
            </p>
            <p>
              <span className="drink-data">Category:</span>
              {state.cocktails.drinks[0].strCategory}
            </p>
            <p>
              <span className="drink-data">Info:</span>
              {state.cocktails.drinks[0].strAlcoholic}
            </p>
            <p>
              <span className="drink-data">Glass:</span>
              {state.cocktails.drinks[0].strGlass}
            </p>
            <p>
              <span className="drink-data">Instructions:</span>
              {state.cocktails.drinks[0].strInstructions}
            </p>
            <p>
              <span className="drink-data">Ingredients:</span>
              {ingredients.map((yes, idx) => {
                return <span key={idx}>{yes}</span>;
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCocktail;
