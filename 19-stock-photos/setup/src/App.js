import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function useStateRef(initialValue) {
  const [loading, setLoading] = useState(initialValue);

  const loadingRef = useRef(loading);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  return [loading, setLoading, loadingRef];
}

function App() {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading, loadingRef] = useStateRef(true);
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPhotos();
  };

  useEffect(() => {
    console.log(isSearching);
  }, [search]);

  useEffect(() => {
    if (!search) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
      setPage(1);
    }
  }, [search]);

  const searchPhotos = useCallback(() => {
    console.log("searching now");
    setLoading(true);

    fetch(
      `${searchUrl}?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=${search}&page=${page}`
    )
      .then((yes) => yes.json())
      .then((response) => {
        setPhotos([...photos, ...response.results]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("something wrong elle");
        setLoading(false);
      });
  }, [setLoading, search]);

  const fetchPhotos = useCallback(
    (url) => {
      console.log("fetching now");
      setLoading(true);
      fetch(`${url}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}`)
        .then((yes) => yes.json())
        .then((response) => {
          // setPhotos(response);
          // console.log(response);
          setPhotos((oldresponse) => {
            // console.log(oldresponse);
            return [...oldresponse, ...response];
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      // setLoading(false);
    },
    [page, setLoading]
  );

  useEffect(() => {
    if (!isSearching) {
      fetchPhotos(mainUrl);
    } else {
      searchPhotos();
    }
  }, [page, fetchPhotos]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  // const faux = () => {
  //   setLoading(true);
  //   console.log("inside faux");
  //   setInterval(() => setLoading(false), 1000);
  // };

  useEffect(() => {
    // console.log("added");
    const event = window.addEventListener("scroll", (e) => {
      // let scrollY = window.scrollY;
      // console.log(search);
      // console.log(loading);
      // let innerHeight = window.innerHeight;
      // console.log(loading);
      // let scrollHeight = document.body.scrollHeight;
      if (
        !loadingRef.current &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 2
      ) {
        setPage((page) => page + 1);
        // faux();
        // console.log(loading);
        // console.log("it works");
      }
    });
    return () => {
      // console.log("remove liao");
      window.removeEventListener("scroll", event);
    };
  }, [loading, loadingRef]);

  return (
    <main>
      {document.documentElement.scrollHeight}
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            value={search}
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="submit-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, idx) => {
            return <Photo photo={photo} key={idx} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
