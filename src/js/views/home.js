import React, {useContext, useEffect} from "react";
import "/workspace/react-hello-webapp/src/styles/home.css";
import { Card } from "../component/card";
import { CardLocation } from "../component/cardLocation";
import { CardEpisode } from "../component/cardEpisode";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);

  	return (
	<>
    <h3 className="mt-5 mx-3 category">Characters <i className="bi bi-person-fill category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-3">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
			{store.characters.map((character) => {
				return <Card key={character.id} identifier={character.id} name={character.name} image={character.image} status={character.status} species={character.species} gender={character.gender} location={character.location.name} />
			})};
		</div>
	</div>
	<h3 className="mt-5 mx-3 category">Locations <i className="bi bi-map category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
		{store.locations.map((location) => {
				return <CardLocation key={location.id} identifier={location.id} name={location.name} type={location.type} dimension={location.dimension} />
			})};
		</div>
	</div>
    <h3 className="mt-5 mx-3 category">Episodes <i className="bi bi-film category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row d-flex flex-row flex-nowrap g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
		{store.episodes.map((episode) => {
				return <CardEpisode key={episode.id} identifier={episode.id} name={episode.name} airdate={episode.air_date} episode={episode.episode} />
			})};	
		</div>
	</div>
  </>
  );
}
	
