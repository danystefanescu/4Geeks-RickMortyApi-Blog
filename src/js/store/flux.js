const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		characters: [],
		planets: [],
		episodes: [],
		favorites: [],
		selectCharacter: [],
		},
		actions: {
			getCharacters: async() => {
				const respone = await fetch ("https://rickandmortyapi.com/api/character");
				const data = await respone.json();
				setStore({characters: data.results})
			},
			getPlanets: async() => {
				const respone = await fetch ("https://rickandmortyapi.com/api/location");
				const data = await respone.json();
				setStore({planets: data.results})
			},
			getEpisodes: async() => {
				const respone = await fetch ("https://rickandmortyapi.com/api/episode");
				const data = await respone.json();
				setStore({episodes: data.results})
			},
			getCharacter: (character) => { setStore({ selectCharacter: character, });
			},
		}
	};
};

export default getState;
