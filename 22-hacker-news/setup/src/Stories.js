import React from "react";
import moment from "moment";
import { useGlobalContext } from "./context";

const Stories = () => {
  const {
    state: { stories },
    state,
    dispatch,
  } = useGlobalContext();
  if (state.loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {stories.map((story) => {
        const yes = new Date(story.created_at);
        const date = moment(yes).format("MMMM Do YYYY");
        return (
          <article className="story" key={story.objectID}>
            <h4 className="title">{story.title}</h4>
            <p className="info">
              {story.points} by <span>{story.author} |</span>{" "}
              {story.num_comments} comments | Posted on {date}
            </p>
            <div>
              <a href={story.url} target="_blank" className="read-link">
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => {
                  dispatch({ type: "REMOVE_STORY", payload: story.objectID });
                }}
              >
                Remove from feed
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
