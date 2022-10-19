import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [rendered, setRendered] = useState([])

  useEffect(() =>
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(result => {
        setListings(result)
        setRendered(result)
      })
      , [])

  return (
    <div className="app">
      <Header listings={listings} setListings={setRendered} />
      <ListingsContainer listings={rendered} setListings={setRendered}/>
    </div>
  );
}

export default App;
