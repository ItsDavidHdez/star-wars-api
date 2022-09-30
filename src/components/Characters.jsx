import React from "react";
import { Link } from "react-router-dom";
import { useConsumeContext } from "../hooks/useConsumeContext";

export const Characters = ({ character, addToFavorite }) => {
  const { deleteFavorites, favoritesChecker } = useConsumeContext();

  const url = character.url;
  const getId = url.substring(29, 30);

  return (
    <div className="col-md-4">
      <div className="text-center card card-body p-5">
        <Link to={`/character/${getId}`}>
          <h3>{character.name}</h3>
          <p>Height: {character.height} cm.</p>
          <p>Mass: {character.mass} KG</p>
          <p>Birth year: {character.birth_year}</p>
        </Link>
        {favoritesChecker(character.url) ? (
          <button
            className={"btn btn-danger"}
            onClick={() => deleteFavorites(character)}
          >
            Remove to favorites
          </button>
        ) : (
          <button
            className={"btn btn-success"}
            onClick={() => addToFavorite(character)}
          >
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
};
