import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { dispatch, state } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "START_GAME" });
  };
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              onChange={(e) => {
                e.persist();
                dispatch({ type: "UPDATE_GAME", payload: e });
              }}
              id="amount"
              value={state.amount}
              min="1"
              name="amount"
              max="50"
              className="form-input"
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              value={state.category}
              name="category"
              id="category"
              className="form-input"
              onChange={(e) => {
                e.persist();
                dispatch({ type: "UPDATE_GAME", payload: e });
              }}
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={state.difficulty}
              className="form-input"
              onChange={(e) => {
                e.persist();
                dispatch({ type: "UPDATE_GAME", payload: e });
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <p className="error">{state.error}</p>
          <input
            type="submit"
            className="submit-btn"
            value="Start!"
            onClick={handleSubmit}
          />
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
