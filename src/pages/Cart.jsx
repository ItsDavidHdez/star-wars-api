import React, { useEffect } from "react";
import { useConsumeContext } from "../hooks/useConsumeContext";

export const Cart = () => {
  const { deleteFavorites, setFavorites, NAME_LOCALSTORAGE } =
    useConsumeContext();

  const newFavorites = localStorage.getItem(NAME_LOCALSTORAGE);

  useEffect(() => {
    const data = localStorage.getItem(NAME_LOCALSTORAGE);
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {JSON.parse(newFavorites).map((character) => (
          <div
            className={`col-md-${
              JSON.parse(newFavorites).length <= 3 ? "12" : "4"
            }`}
            key={character.url}
          >
            <div className="text-center card card-body p-5">
              <h3>{character.name}</h3>
              <p>Height: {character.height} cm.</p>
              <p>Mass: {character.mass} KG</p>
              <p>Birth year: {character.birth_year}</p>
              <button
                className="btn btn-danger"
                onClick={() => deleteFavorites(character.url)}
              >
                Delete to favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
