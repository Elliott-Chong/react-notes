export const initialState = {
  questions: [],
  isLoading: true,
  gameHasStarted: false,
  percentage: 0,
  endGame: false,
  error: "",
  options: [],
  amount: 30,
  difficulty: "easy",
  currentQuestion: 0,
  totalCorrectQuestions: 0,
  category: "sports",
  correct_answer: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SKIP":
      if (state.currentQuestion === parseInt(state.amount) - 1) {
        return {
          ...state,
          currentQuestion: state.amount - 1,
          percentage: Math.floor(
            (state.totalCorrectQuestions / state.amount) * 100
          ),
          endGame: true,
        };
      }
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    case "RESTART":
      return initialState;
    case "SET_CORRECT_ANSWER":
      return { ...state, correct_answer: action.payload };
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "START_GAME":
      console.log("hi");
      return { ...state, gameHasStarted: true };
    case "UPDATE_GAME":
      //   console.log(action.payload);
      const { target } = action.payload;
      const name = target.name;
      let value = target.value;
      if (value > 50) {
        value = 50;
      }
      return { ...state, [name]: value, error: "" };
    // case "SET_NO_ERROR":
    //   return { ...state, error: "" };
    case "UPDATE_QUESTIONS":
      //   console.log(action.payload);
      const {
        data: { results },
      } = action.payload;
      //   console.log(results);
      if (results.length === 0) {
        return {
          ...state,
          loading: true,
          gameHasStarted: false,
          endGame: false,
          error: "Can't generate questions, please try different options",
        };
      }
      return { ...state, error: "", questions: results, isLoading: false };
    case "SET_OPTIONS":
      return { ...state, options: action.payload };
    case "END_GAME":
      return { ...state, endGame: true };
    //   percentage:
    //     Math.floor(state.totalCorrectQuestions / state.currentQuestion) *
    //     100,
    case "SUBMIT_ANSWER":
      if (state.currentQuestion === parseInt(state.amount) - 1) {
        if (action.payload === state.correct_answer) {
          //   console.log(
          //     Math.floor(
          //       ((state.totalCorrectQuestions + 1) / state.amount) * 100
          //     ),
          //     state.totalCorrectQuestions,
          //     state.amount
          //   );

          return {
            ...state,
            currentQuestion: state.amount - 1,
            totalCorrectQuestions: state.totalCorrectQuestions + 1,
            percentage: Math.floor(
              ((state.totalCorrectQuestions + 1) / state.amount) * 100
            ),
            endGame: true,
          };
        }

        return {
          ...state,
          currentQuestion: state.amount - 1,
          percentage: Math.floor(
            (state.totalCorrectQuestions / state.amount) * 100
          ),
          endGame: true,
        };
      }
      if (action.payload === state.correct_answer) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          totalCorrectQuestions: state.totalCorrectQuestions + 1,
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "ERROR":
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};
