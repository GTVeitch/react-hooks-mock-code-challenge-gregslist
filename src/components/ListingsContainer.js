import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const handleListing = listings.map((listing) => {
      return <ListingCard key={listing.id} id={listing.id} desc={listing.description} image={listing.image} loc={listing.location}/>
    })

  return (
    <main>
      <ul className="cards">
        {handleListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
