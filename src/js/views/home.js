import React, {useContext, useEffect} from "react";
import "/workspace/react-hello-webapp/src/styles/home.css";
import { Card } from "../component/card";
import { CardPlanet } from "../component/cardPlanet";
import { CardEpisode } from "../component/cardEpisode";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getEpisodes();
	}, []);

  	return (
	<>
    <h3 className="mt-5 mx-3 category">Characters <i className="bi bi-person-fill category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-3">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
			{store.characters.map((item) => {
				return <Card key={item.id} identifier={item.id} name={item.name} image={item.image} status={item.status} species={item.species} gender={item.gender} location={item.location.name} />
			})};
		</div>
	</div>
    <h3 className="mt-5 mx-3 category">Locations <i className="bi bi-map category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
		{store.planets.map((item) => {
				return <CardPlanet key={item.id} identifier={item.id} name={item.name} type={item.type} dimension={item.dimension} />
			})};
		</div>
	</div>
    <h3 className="mt-5 mx-3 category">Episodes <i className="bi bi-film category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
		{store.episodes.map((item) => {
				return <CardEpisode key={item.id} identifier={item.id} name={item.name} airdate={item.air_date} episode={item.episode} />
			})};	
		</div>
	</div>
  </>
  );
}
	
