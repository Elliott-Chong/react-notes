import React, { useEffect } from "react";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  const { state, url, fetch_cocktails } = useGlobalContext();

  useEffect(() => {
    fetch_cocktails(url);
  }, [url, fetch_cocktails]);

  return (
    <main>
      <section className="section search">
        <SearchForm />
      </section>
      {state.loading ? <Loading /> : <CocktailList />}
    </main>
  );
};

export default Home;
