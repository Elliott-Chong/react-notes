const initialState = { loading: true, search: "batman", movies: [], error: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "START_LOADING":
      return { ...state, loading: true };
    case "UPDATE_MOVIES":
      //   console.log(action.payload);
      console.log(action.payload.Response);
      if (action.payload.Response === "False") {
        console.log(action.payload.Error);
        return { ...state, error: action.payload.Error, loading: false };
      } else {
        console.log("updating movies to", action.payload.Search);
        return {
          ...state,
          loading: false,
          movies: action.payload.Search,
          error: "",
        };
      }
    default:
      throw new Error("No Matching Dispatch Type");
  }
};

export { reducer, initialState };
