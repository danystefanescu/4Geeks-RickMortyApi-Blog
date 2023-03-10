const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		characters: [],
		locations: [],
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
			getLocations: async() => {
				const respone = await fetch ("https://rickandmortyapi.com/api/location");
				const data = await respone.json();
				setStore({locations: data.results})
			},
			getEpisodes: async() => {
				const respone = await fetch ("https://rickandmortyapi.com/api/episode");
				const data = await respone.json();
				setStore({episodes: data.results})
			},
			getCharacter: (character) => { setStore({ selectCharacter: character, });
			},
			setFavorites: (name) => {
				const store = getStore();
				if( !store.favorites.includes(name)) {
					setStore({favorites: [...store.favorites, name]})
				} else {
					setStore({favorites: store.favorites.filter((favName) => favName != name)});
				}
			},
		}
	};
};

export default getState;
