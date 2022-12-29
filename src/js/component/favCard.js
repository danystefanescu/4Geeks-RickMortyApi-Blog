import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const FavCard = () => {
  const {store, actions} = useContext(Context);
  return (
    <div className="dropdown ms-3 me-2">
        <button className="btn btn-secondary dropdown-toggle btn-customized-favorite" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <i className="bi bi-bookmark"></i><span className="badge btn-customized-bookmark"> {store.favorites.length} </span>
        </button>
        <ul className="dropdown-menu">
            {store.favorites.map((item) => {
              return <li key={item.name}>{item.identifier + " " + item.name}</li>
            })}
        </ul>
    </div>
  );
};



