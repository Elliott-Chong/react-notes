import React, { useState } from "react";

const Tour = (props) => {
  const tour = props.tour;
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={tour.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        {readMore ? (
          <p>
            {tour.info.slice(0, 200)}...
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              Read More
            </button>
          </p>
        ) : (
          <p>
            {tour.info}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              Show Less
            </button>
          </p>
        )}
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            props.deleteTour(tour.id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
