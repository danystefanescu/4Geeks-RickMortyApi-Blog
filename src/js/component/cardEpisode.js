import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "/workspace/react-hello-webapp/src/styles/card.css";

export const CardEpisode = ({identifier, name, episode, airdate}) => {
  const {store, actions} = useContext(Context);
  return (
    <>
    <div className="card ms-1 me-1 bg-customized parent" style={{ width: "18rem" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body child">
        <h5 className="card-title pb-3">{name}</h5>
        <p className="card-text">
          Episode <i>{name}</i> it's a episode of Rick and Morty with the number <i>{episode}</i> and his release date is <i>{airdate}</i>.
        </p>
        <div className="content-buttons mt-3">
          <button className="btn btn-customized go-to-button">
            View details
          </button>
          <button className="btn btn-customized mx-3"  onClick={() => actions.setFavorites({ "identifier": episode, "name": name})}>
            <i className="bi bi-suit-heart-fill like-button" />
          </button>
        </div>
      </div>
    </div>
  </>
  );
};