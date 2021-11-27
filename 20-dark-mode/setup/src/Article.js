import React from "react";
import moment from "moment";
const Article = ({ article }) => {
  return (
    <article className="post">
      <h2>{article.title}</h2>
      <div className="post-info">
        <span>{moment(article.date).format("dddd Do, YYYY")}</span>
        <span>{article.length} min read</span>
      </div>
      <p>{article.snippet}</p>
    </article>
  );
};

export default Article;
