import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState([]);
  const fetchTours = () => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((location) => {
        setLocation(location);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function deleteTour(id) {
    const new_loc = location.filter((tour) => {
      return tour.id !== id;
    });
    setLocation(new_loc);
  }
  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (location.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>

          <div>
            <Tours tours={location} deleteTour={deleteTour} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
