import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => console.log(state), [state]);
  useEffect(() => {
    const fetchQuestions = () => {
      dispatch({ type: "START_LOADING" });
      axios
        .get(
          API_ENDPOINT +
            `amount=${state.amount}&category=${
              table[state.category]
            }&difficulty=${state.difficulty}`
        )
        .then((response) => {
          // console.log(response);
          dispatch({ type: "SET_NO_ERROR" });
          dispatch({ type: "UPDATE_QUESTIONS", payload: response });
        })
        .catch((error) => {
          console.log("something is wrong.... error:");
          dispatch({ type: "ERROR", payload: error });
        });
    };

    if (state.gameHasStarted) {
      console.log("start game");
      dispatch({ type: "START_LOADING" });
      // console.log("um");
      fetchQuestions();
    }
  }, [state.amount, state.category, state.difficulty, state.gameHasStarted]);

  useEffect(() => {
    if (state.questions.length === 0) {
      // console.log("no questions yet");
      return;
    }
    if (state.currentQuestion === parseInt(state.amount)) {
      dispatch({ type: "END_GAME" });
      // console.log("end game");
      return;
    }
    // console.log(state);
    // console.log(state.questions.length);
    const question = state.questions[state.currentQuestion];
    // console.log(question);
    dispatch({ type: "SET_CORRECT_ANSWER", payload: question.correct_answer });
    let options = [];

    options.push(question.correct_answer);
    question.incorrect_answers.forEach((ans) => {
      options.push(ans);
      const shuffled_options = shuffle(options);
      dispatch({ type: "SET_OPTIONS", payload: shuffled_options });
    });
  }, [
    state.currentQuestion,
    state.gameHasStarted,
    state.questions,
    state.amount,
  ]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
