import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
function App() {
  const { state, dispatch } = useGlobalContext();
  const {
    currentQuestion,
    totalCorrectQuestions,
    questions,
    percentage,
    endGame,
  } = state;
  // console.log(state);
  if (!state.gameHasStarted || state.error !== "") {
    return <SetupForm />;
  }
  if (state.isLoading) {
    return <Loading />;
  }

  // if (state.currentQuestion === parseInt(state.amount)) {
  //   return <h1>lol done</h1>;
  // }

  return (
    <main>
      <div className={`modal-container ${endGame && `isOpen`}`}>
        <div className="modal-content">
          <h2>Congrats</h2>
          <p>You answered {percentage}% of questions correctly!</p>
          <button
            className="close-btn"
            onClick={() => {
              dispatch({ type: "RESTART" });
            }}
          >
            play again
          </button>
        </div>
      </div>

      <section className="quiz">
        <p className="correct-answers">
          Correct Answers: {totalCorrectQuestions}/
          {endGame ? state.amount : state.currentQuestion}
        </p>
        <article className="container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="btn-container">
            {state.options.map((option, idx) => {
              return (
                <button
                  key={idx}
                  className="answer-btn"
                  onClick={() => {
                    dispatch({ type: "SUBMIT_ANSWER", payload: option });
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </article>
        <button
          className="next-question"
          onClick={() => {
            dispatch({ type: "SKIP" });
          }}
        >
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
