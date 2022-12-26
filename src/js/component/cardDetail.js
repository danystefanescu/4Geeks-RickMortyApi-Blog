import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardDetail = ({id, identifier, name, image, status, species, gender, location}) => (
    <>
        <div key={id}>
            <img src={image} alt=""/>
            <h1>{name}</h1>
            <ul>
                <li>{gender}</li>
                <li>{species}</li>
                <li>{location}</li>
                <li>{status}</li>
            </ul>
            <Link to="/" className="btn btn-customized go-to-button">
            Go to Home
            </Link>
        </div>   
    </>
);
