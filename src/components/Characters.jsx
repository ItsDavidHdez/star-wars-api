import React from "react";

export const Characters = ({ character, addToFavorite }) => {
  return (
    <div className="col-md-4">
      <div className="text-center card card-body p-5">
        <h3>{character.name}</h3>
        <p>Height: {character.height} cm.</p>
        <p>Mass: {character.mass} KG</p>
        <p>Birth year: {character.birth_year}</p>
        <button
          className="btn btn-success"
          onClick={() => addToFavorite(character)}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
};
