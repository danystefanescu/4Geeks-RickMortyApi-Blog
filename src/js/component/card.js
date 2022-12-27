import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import "/workspace/react-hello-webapp/src/styles/card.css";

export const Card = ({id, identifier, name, image, status, species, gender, location}) => {
  const { store, actions } = useContext(Context);
  const character = store.selectCharacter;

  return (
      <>
        <div className="card me-2" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <i>{name}</i> is a character of gender <i>{gender}</i> and his species is <i>{species}</i> from the planet <i>{location}</i> and is currently <i>{status}</i>.
            </p>
            <Link to={`/characters/${identifier}`} className="btn btn-customized go-to-button" onClick={() => actions.getCharacter({id: id, name: name, image: image, status: status, species: species, gender: gender, location: location})}>
              View details 
            </Link>
            <Link className="btn btn-customized mx-3"  onClick={() => actions.favorites({ name, id })}>
              <i className="bi bi-suit-heart-fill like-button" />
            </Link>
          </div>
        </div>
      </>
  );
  
};



		
					