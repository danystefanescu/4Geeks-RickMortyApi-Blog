import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardDetail = () => {
    const { store, actions } = useContext(Context);
    const selectCharacter = store.selectCharacter;

    return (
        <div className="container bg-dark bg-gradient mt-3 rounded">
            <div className="card mb-3 bg-dark bg-gradient text-light">
                <div className="row g-0">
                    <div className="col-md-7 mt-3">
                        <img className="img-fluid rounded" src={selectCharacter.image} />
                    </div>
                    <div className="col-md-3">
                        <div className="card-body text-center">
                            <h1>{selectCharacter.name}</h1>
                            <p>Rick and Morty Character</p>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mt-5">
                    <div className="col-4">
                        <h5>Name <i className="bi bi-person-circle"></i></h5>
                        <p>{selectCharacter.name}</p>
                    </div>
                    <div className="col-4">
                        <h5>Status <i className="bi bi-person-check"></i></h5>
                        <p>{selectCharacter.status}</p>
                    </div>
                    <div className="col-4">
                        <h5>Species <i className="bi bi-person-fill"></i></h5>
                        <p>{selectCharacter.species}</p>
                    </div>
                    <div className="col-4">
                        <h5>Gender <i className="bi bi-gender-ambiguous"></i></h5>
                        <p>{selectCharacter.gender}</p>
                    </div>
                    <div className="col-4">
                        <h5>Location <i className="bi bi-globe"></i></h5>
                        <p>{selectCharacter.location}</p>
                    </div>
                </div>
                <Link to="/" className="btn customized-button container-fluid">
                 Go to Home 
                </Link>
            </div>
        </div>
    );
}
