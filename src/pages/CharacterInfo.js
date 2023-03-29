import React from "react";
import { useParams } from "react-router";
import useCharacterInfo from "../hooks/useCharacterInfo";
import "./CharacterInfo.css";

const CharacterInfo = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacterInfo(id);
  if (error) {
    return <div>Something went wrong.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="CharacterInfo">
      <img src={data?.character?.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data?.character?.name}</h1>
        <p>{data?.character?.gender}</p>
        <div className="Character-episode">
          {data?.character?.episode?.map((episode) => {
            <div key={episode.episode}>
              <h3>
                {episode.name} - <b>{episode.episode}</b>
              </h3>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
