import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/error.css";

export const Error = () => (
	<div className="text-center main-div">
		<h1 className="tittle"> Page is not found, maybe it's a mistake, but here you had a button to return to Home Page</h1>	
        <Link to="/">
            <span className="btn customized-button">Home</span>
        </Link>
    </div>
);

