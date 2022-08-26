import React, { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import {EntitiesContext} from "../../context/EntitiesContext";
import "./card.css";
import { useContext } from "react";

const Card = ({ title, created_at, comment }) => {
  const { fav, handleChangeFav } = useContext(EntitiesContext);
  let saved = fav?.find((o) => o.objectID === comment.objectID);
  let listDisabled = saved ? true : false;

  const addFav = (e) => {
    e.preventDefault();
    handleChangeFav(comment);
  };

  useEffect(() => {
        
  }, [fav]);

  return (
    <div className="gridCard">
      <div className="">
        <span>{created_at}</span>
        <br />
        <span>{title}</span>
      </div>
      <div>
        <IconButton
          color="error"
          disabled={listDisabled}
          onClick={(e) => addFav(e)}
        >
          {listDisabled ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
