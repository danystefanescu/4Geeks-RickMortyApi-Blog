import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import "/workspace/react-hello-webapp/src/styles/card.css";

export const Card = ({id, identifier, name, image, status, species, gender, location}) => {
  const { store, actions } = useContext(Context);

  return (
      <>
        <div className="card ms-1 me-1 bg-customized parent" style={{ width: "19rem" }}>
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body child">
            <h5 className="card-title">{name}</h5>
            <p className="card-text pb-3">
              <i>{name}</i> is a character of gender <i>{gender}</i> and his species is <i>{species}</i> from the planet <i>{location}</i> and is currently <i>{status}</i>.
            </p>
            <div className="content-buttons mt-3">
              <Link to={`/characters/${identifier}`} className="btn btn-customized go-to-button mt-3" onClick={() => actions.getCharacter({id: id, name: name, image: image, status: status, species: species, gender: gender, location: location})}>
                View details 
              </Link>
              <Link className="btn btn-customized mx-3 mt-3"  onClick={() => actions.setFavorites({  "identifier": identifier, "name": name})}>
                <i className="bi bi-suit-heart-fill like-button" />
              </Link>
            </div>
          </div>
        </div>
      </>
  );
  
};



		
					