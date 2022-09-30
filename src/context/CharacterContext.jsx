import React, { useState, createContext } from "react";
import axios from "axios";

export const CharacterContext = createContext();

const BASE_API = "https://swapi.dev/api";

export const CharacterContextProvider = ({ children }) => {
  const [character, setCharacter] = useState([]);
  const [favorites, setFavorites] = useState([]);
  let count = 1;

  const getPeopleData = () => {
    const newCharacter = [];

    axios.get(`${BASE_API}/people/?page=${count}`).then(({ data }) => {
      data.results.forEach((c) => newCharacter.push(c));
      setCharacter((character) => [...character, ...newCharacter]);
    });
    count += 1;
  };

  const addToFavorite = (character) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(character);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const deleteFavorites = (url) => {
    const transcitionObj = JSON.parse(localStorage.getItem("favorites"));
    const indexArray = transcitionObj.findIndex(
      (element) => element.url === url
    );
    transcitionObj.splice(indexArray, 1);
    const newArrayJson = JSON.stringify(transcitionObj);
    localStorage.setItem("favorites", newArrayJson);
    setFavorites(indexArray);
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        getPeopleData,
        addToFavorite,
        deleteFavorites,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
