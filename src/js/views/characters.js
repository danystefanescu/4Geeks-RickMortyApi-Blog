import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardDetail } from "../component/cardDetail";


export const Characters = ({characters}) => {
  const {store, actions} = useContext(Context);
  //const characters = store.characters;
  
  return (
    <>
    <CardDetail identifier={characters.id} id={characters.id} name={characters.name} image={characters.image} />
    </>
  );
};

