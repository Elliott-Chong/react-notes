import React, { useState } from "react";

const Follower = ({ data, loading }) => {
  const [page, setPage] = useState(1);
  const currentPeople = data[page - 1];
  if (!loading) {
    return (
      <section className="followers">
        <div className="container">
          {currentPeople.map((person) => {
            return (
              <article className="card" key={person.id}>
                <img src={person.avatar_url} alt={person.login} />
                <h4>{person.login}</h4>
                <a href={person.html_url} className="btn">
                  View Profile
                </a>
              </article>
            );
          })}
        </div>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => {
              if (page === 1) {
                setPage(10);
              } else {
                setPage(page - 1);
              }
            }}
          >
            prev
          </button>

          {data.map((person, idx) => {
            return (
              <button
                key={idx}
                className={`page-btn ${
                  idx + 1 === page ? `active-btn` : `null`
                }`}
                onClick={(e) => {
                  setPage(parseInt(e.target.innerText));
                }}
              >
                {idx + 1}
              </button>
            );
          })}

          <button
            className="next-btn"
            onClick={() => {
              if (page === 10) {
                setPage(1);
              } else {
                setPage(page + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </section>
    );
  }
  return null;
};

export default Follower;
