import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <>
      {props.tours.map((tour) => {
        return <Tour tour={tour} deleteTour={props.deleteTour} key={tour.id} />;
      })}
    </>
  );
};

export default Tours;
