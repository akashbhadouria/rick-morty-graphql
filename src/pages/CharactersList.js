import React from "react";
import useCharacters from "../hooks/useCharacters";
import "./CharacterList.css";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  return (
    <div className="CharacterList">
      {data?.characters?.results?.map((character) => {
        return (
          <div>
            <img src={character?.image} />
            <h2>{character?.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
