import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "/workspace/react-hello-webapp/src/styles/card.css";

export const CardPlanet = ({name, type, dimension, identifier}) => {
  const {store, actions} = useContext(Context);
  return (
    <>
    <div className="card me-2" style={{ width: "18rem" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Planet <i>{name}</i> is a planet of <i>{dimension}</i> and his type is <i>{type}</i>.
        </p>
        <button className="btn btn-customized go-to-button">
          View details
        </button>
        <button className="btn btn-customized mx-3" onClick={() => actions.setFavorites({ "name": name, "identifier": identifier })}>
          <i className="bi bi-suit-heart-fill like-button" />
        </button>
      </div>
    </div>
  </>
  );
}