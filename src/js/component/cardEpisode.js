import React, { Component } from "react";
import "/workspace/react-hello-webapp/src/styles/card.css";

export const CardEpisode = ({name, episode, airdate}) => (
  <>
    <div className="card me-2" style={{ width: "18rem" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Episode <i>{name}</i> it's a episode of Rick and Morty with the number <i>{episode}</i> and his release date is <i>{airdate}</i>.
        </p>
        <button className="btn btn-customized go-to-button">
          View details
        </button>
        <button className="btn btn-customized mx-3">
          <i className="bi bi-suit-heart-fill like-button" />
        </button>
      </div>
    </div>
  </>
);