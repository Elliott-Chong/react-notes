import { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((yes) => yes.json())
      .then((response) => {
        setTimeout(() => {
          dispatch({ type: "update_cocktails", payload: response });
          setLoading(false);
          //   setData(response);
        }, 0);
        // setLoading(false);
        // setData(response);
      })
      .catch((err) => {
        console.log(err);
        console.log("elle something went wrong buddy");
      });
  }, [url]);

  return [loading];
};
