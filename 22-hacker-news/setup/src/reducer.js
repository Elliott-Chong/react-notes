import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
// Initial State
const initialState = {
  stores: [],
  loading: true,
  search: "react",
  currentPage: 1,
  totalPages: 0,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "UPDATE_STORIES":
      return {
        ...state,
        stories: action.payload.hits,
        loading: false,
        totalPages: action.payload.nbPages - 1,
      };
    case "REMOVE_STORY":
      console.log(action.payload);
      const newStories = state.stories.filter(
        (story) => story.objectID !== action.payload
      );
      return { ...state, stories: newStories };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      throw new Error("no dispatch");
  }
};

export { initialState, reducer };
