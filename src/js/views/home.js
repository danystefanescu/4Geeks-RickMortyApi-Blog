import React from "react";
import "/workspace/react-hello-webapp/src/styles/home.css";
import { Card } from "../component/card";

export const Home = () => (
  <>
    <h3 className="mt-5 mx-3 category">Characters <i className="bi bi-person-fill category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row flex-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />	
		</div>
	</div>
    <h3 className="mt-5 mx-3 category">Locations <i className="bi bi-map category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row flex-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />	
		</div>
	</div>
    <h3 className="mt-5 mx-3 category">Episodes <i className="bi bi-film category-icon"></i></h3>
	<div className="overflow-auto mt-4 mx-4">
		<div className="row flex-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />	
		</div>
	</div>
  </>
);
