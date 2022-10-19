import React, {useState} from "react";

function ListingCard({ loc, id, image, desc }) {
  const [favorite, setFavorite] = useState(false)

    function handleFavorite() {
      setFavorite((favorite) => !favorite)
    }

    function handleDelete() {
      const targetCard = document.getElementById(id)
          targetCard.remove()
            fetch(`http://localhost:6001/listings/${id}` , {
              method : "DELETE"
            })
          }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt="Oops!"/>
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{desc}</strong>
        <span> · {loc}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  )
}

export default ListingCard;
