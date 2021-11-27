import React from "react";

const Photo = ({ photo }) => {
  return (
    <article className="photo">
      <img src={photo.urls.full} alt={photo.alt_description} />
    </article>
  );
};

export default Photo;
