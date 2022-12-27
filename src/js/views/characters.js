import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardDetail } from "../component/cardDetail";


export const Characters = () => {
  const {store, actions} = useContext(Context);
  
  return (
    <>
    <CardDetail />
    </>
  );
};

