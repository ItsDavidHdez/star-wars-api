import React, { useState, createContext } from "react";
import axios from "axios";
import { getDataCharacter } from "../api/getCharacter.api";
import { getDataCharacters } from "../api/getCharacters.api";

export const CharacterContext = createContext();

const BASE_API = "https://swapi.dev/api";
const NAME_LOCALSTORAGE = "favorites";

export const CharacterContextProvider = ({ children }) => {
  const [character, setCharacter] = useState([]);
  const [onlyCharacter, setOnlyCharacter] = useState([]);
  const [favorites, setFavorites] = useState([]);

  let count = 1;

  const getPeopleData = async () => {
    const newCharacter = [];
    try {
      const data = await getDataCharacters(
        `${BASE_API}/people/?page=${count}`,
        newCharacter,
        setCharacter
      );
      count += 1;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCharacter = async (id) => {
    try {
      const data = await getDataCharacter(id);
      setOnlyCharacter(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = (character) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(character);
    setFavorites(newFavorites);
    localStorage.setItem(NAME_LOCALSTORAGE, JSON.stringify(newFavorites));
  };

  const favoritesChecker = (url) => {
    const transcitionObj = JSON.parse(localStorage.getItem(NAME_LOCALSTORAGE));
    const matches = transcitionObj?.some((character) => character.url === url);
    return matches;
  };

  const deleteFavorites = (url) => {
    const transcitionObj = JSON.parse(localStorage.getItem(NAME_LOCALSTORAGE));
    const indexArray = transcitionObj.findIndex(
      (element) => element.url === url
    );
    transcitionObj.splice(indexArray, 1);
    const newArrayJson = JSON.stringify(transcitionObj);
    localStorage.setItem(NAME_LOCALSTORAGE, newArrayJson);
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
        getCharacter,
        onlyCharacter,
        favoritesChecker,
        NAME_LOCALSTORAGE,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
