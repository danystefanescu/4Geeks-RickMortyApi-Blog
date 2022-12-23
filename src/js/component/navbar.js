import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-personalized">
      <div className="container-fluid">
        <Link to="/">
          <img id="navbar-logo-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-center"><i className="bi bi-list"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/">
              <span className="nav-link">Home</span>
            </Link>
            <Link to="/characters">
              <span className="nav-link">Characters</span>
            </Link>
            <Link to="/about">
              <span className="nav-link">About</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container align-items-end justify-content-end">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search characters"
            aria-label="Search"
          />
          <button className="btn btn-customized" type="submit">
		  	<i className="bi bi-search btn-customized"></i>
          </button>
        </form>
        <div class="dropdown ms-3 me-2">
            <button class="btn btn-secondary dropdown-toggle btn-customized-favorite" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <i className="bi bi-bookmark"></i><span class="badge btn-customized-bookmark">0</span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>
                <li><a class="dropdown-item" href="#"></a></li>
                <li><a class="dropdown-item" href="#"></a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};
