import React, { useEffect } from "react";
import { useConsumeContext } from "../hooks/useConsumeContext";
import { Characters } from "../components/Characters";

export const Home = () => {
  const { character, getPeopleData, addToFavorite } = useConsumeContext();

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getPeopleData();
    }
  };

  useEffect(() => {
    getPeopleData();

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row">
        {character?.map((character, key) => (
          <Characters
            key={key}
            character={character}
            addToFavorite={addToFavorite}
          />
        ))}
      </div>
    </div>
  );
};
