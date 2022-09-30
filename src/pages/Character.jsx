import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useConsumeContext } from "../hooks/useConsumeContext";

export const Character = () => {
  const {
    getCharacter,
    onlyCharacter,
    addToFavorite,
    deleteFavorites,
    favoritesChecker,
  } = useConsumeContext();
  let { id } = useParams();

  useEffect(() => {
    getCharacter(id);
  }, []);

  return (
    <div className="col-md-12">
      <div className="text-center card card-body p-5">
        <h3>{onlyCharacter?.name}</h3>
        <p>Height: {onlyCharacter?.height} cm.</p>
        <p>Mass: {onlyCharacter?.mass} KG.</p>
        <p>Hair color: {onlyCharacter?.hair_color}</p>
        <p>Skin color: {onlyCharacter?.skin_color}</p>
        <p>Eye color: {onlyCharacter?.eye_color}</p>
        <p>Birth year: {onlyCharacter?.birth_year}</p>
        <p>Gender: {onlyCharacter?.gender}</p>
        {favoritesChecker(onlyCharacter?.url) ? (
          <button
            className={"btn btn-danger"}
            onClick={() => deleteFavorites(onlyCharacter)}
          >
            Remove to favorites
          </button>
        ) : (
          <button
            className={"btn btn-success"}
            onClick={() => addToFavorite(onlyCharacter)}
          >
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
};
