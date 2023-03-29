import React from "react";
import useCharacters from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  return (
    <div className="CharacterList">
      {data?.characters?.results?.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id} className="Link">
            <img src={character?.image} />
            <h2>{character?.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
