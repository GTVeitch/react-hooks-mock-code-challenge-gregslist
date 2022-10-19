import React , {useState} from "react";

function Search( {setListings , listings} ) {

  const [searchTerm, setSearchTerm] = useState("")
  const filteredListings = listings.filter((listing) =>
  (listing.description.toLowerCase()).includes(searchTerm.toLowerCase()) || (listing.location.toLowerCase().includes(searchTerm.toLowerCase())))

  function handleSubmit(e) {
      e.preventDefault()
      setListings(filteredListings)
  }

  return (
    <form className="searchbar" onSubmit={e => {handleSubmit(e)}}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => {setSearchTerm(e.target.value);}}
        value={searchTerm}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
