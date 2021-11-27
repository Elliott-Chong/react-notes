import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [everyone, setEveryone] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newEveryone = await response.json();
    setEveryone(newEveryone);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(everyone);
  const { company, dates, duties, title } = everyone[index];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          <button
            className={`job-btn ${index === 0 ? "active-btn" : "false"}`}
            onClick={() => {
              setIndex(0);
            }}
          >
            TOMMY
          </button>
          <button
            className={`job-btn ${index === 1 ? "active-btn" : "false"}`}
            onClick={() => {
              setIndex(1);
            }}
          >
            BIGDROP
          </button>
          <button
            className={`job-btn  ${index === 2 ? "active-btn" : "false"}`}
            onClick={() => {
              setIndex(2);
            }}
          >
            CUKER
          </button>
        </div>

        <article className="job-info">
          <h3>{everyone[index].title}</h3>
          <h4>{everyone[index].company}</h4>
          <p className="job-date">{dates}</p>
          {everyone[index].duties.map((job, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight />
                <p>{job}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
