const initial_state = {
  form: "",
  cocktails: {},
  loading: true,
  error: false,
};
// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const reducer = (state, action) => {
  switch (action.type) {
    case "start_loading":
      console.log("startloading");
      return { ...state, loading: true };
    case "form":
      return { ...state, form: action.payload };
    case "update_cocktails":
      if (!action.payload.response.drinks) {
        console.log("hmm not found");
        return { ...state, error: true, loading: false };
      }
      return {
        ...state,
        error: false,
        cocktails: action.payload.response,
        loading: false,
        perma: action.payload.response,
      };
    default:
      return state;
  }
};

export { initial_state, reducer };
