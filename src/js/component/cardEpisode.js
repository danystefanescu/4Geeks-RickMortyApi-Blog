import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspace/react-hello-webapp/src/styles/card.css";

export const CardEpisode = ({identifier, name, episode, airdate}) => {
  const {store, actions} = useContext(Context);
  return (
    <>
    <div className="card ms-1 me-1 bg-customized parent" style={{ width: "18rem" }}>
      <img src="https://i.ytimg.com/vi/BFTSrbB2wII/maxresdefault.jpg" className="card-img-top" alt="" />
      <div className="card-body child">
        <h5 className="card-title pb-3">{name}</h5>
        <p className="card-text">
          Episode <i>{name}</i> it's a episode of Rick and Morty with the number <i>{episode}</i> and his release date is <i>{airdate}</i>.
        </p>
        <div className="content-buttons mt-3">
          <Link to={`/episodes/${identifier}`} className="btn btn-customized go-to-button" onClick={() => actions.getEpisode({id: id, name: name, episode: episode, airdate: airdate})}>
            View details
          </Link>
          <Link className="btn btn-customized mx-3"  onClick={() => actions.setFavorites({ "identifier": episode, "name": name})}>
            <i className="bi bi-suit-heart-fill like-button" />
          </Link>
        </div>
      </div>
    </div>
  </>
  );
};