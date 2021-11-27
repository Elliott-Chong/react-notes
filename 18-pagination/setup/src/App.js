import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import paginate from "./utils";
function App() {
  const { loading, data } = useFetch();
  return (
    <main>
      <div className="section-title">
        {loading ? <h1>Loading...</h1> : <h1>Pagination</h1>}
        <div className="underline"></div>
      </div>
      <Follower data={data} loading={loading} />
    </main>
  );
}

export default App;
