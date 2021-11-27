import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

const url = "https://course-api.com/react-useReducer-cart-project";
function App() {
  const { dispatch, state } = useGlobalContext();
  useEffect(() => {
    dispatch({ type: "START_LOADING" });
    fetch(url)
      .then((yes) => yes.json())
      .then((response) => {
        dispatch({ type: "FILL_CART", payload: response });
        dispatch({ type: "FINISH_LOADING" });
      })
      .catch((error) => {
        console.log(error);
        console.log("peasestp");
        dispatch({ type: "FINISH_LOADING" });
      });
  }, [dispatch]);
  if (state.isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
