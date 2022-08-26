import React, { useContext } from "react";
import { EntitiesContext } from "../../context/EntitiesContext";
import Card from "../Card/Card";
import "./favs.css";

const Favs = () => {
  const { fav } = useContext(EntitiesContext);
  return (
    <div className="grid">
      {fav.length ? (
        fav.map((fav, i) => {
          return (
            <Card
              title={fav.story_title}
              created_at={fav.created_at}
              comment={fav}
            />
          );
        })
      ) : (
        <h1 className="noFavorites">"You have not selected any favorites"</h1>
      )}
    </div>
  );
};

export default Favs;
