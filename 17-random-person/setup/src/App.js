import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("name");
  const [info, setInfo] = useState({
    name: "",
    email: "",
    age: "",
    street: "",
    phone: "",
    password: "",
  });

  const fetchUser = async () => {
    // setData("name");
    setLoading(true);
    const yes = await fetch(url);
    const result = await yes.json();
    const { results } = result;
    console.log(results);
    setPerson(results[0]);
    setData("name");
    setInfo({
      name: results[0].name.first + results[0].name.last,
      email: results[0].email,
      age: results[0].dob.age,
      street:
        results[0].location.street.number + results[0].location.street.name,
      phone: results[0].phone,
      password: results[0].login.password,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // useEffect(() => {
  //   console.log("setting info");
  // }, [results]);

  const handleMouseOver = (e) => {
    console.log(e.target.dataset.label);
    if (e.target.dataset.label) {
      setData(e.target.dataset.label);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person ? person.picture.large : defaultImage}
            alt={loading ? `random user` : person.name.first}
            className="user-img"
          />
          <p className="user-title">My {data} is</p>
          <p className="user-value">{person ? info[data] : "random user"}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleMouseOver}
            >
              <FaUser />
            </button>
            <button
              onMouseOver={handleMouseOver}
              className="icon"
              data-label="email"
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={handleMouseOver}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleMouseOver}
            >
              <FaMap />
            </button>
            <button
              onMouseOver={handleMouseOver}
              className="icon"
              data-label="phone"
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              onMouseOver={handleMouseOver}
              data-label="password"
            >
              <FaLock />
            </button>
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => {
              fetchUser();
              // setData("name");
            }}
          >
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
