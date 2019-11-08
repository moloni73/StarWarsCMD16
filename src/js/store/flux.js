const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a fuction

			loadCharacters: () => {
				fetch("https://swapi.co/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})

					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadPlanets: () => {
				fetch("https://swapi.co/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})

					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadVehicles: () => {
				fetch("https://swapi.co/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})

					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},

			addFavorites: nitem => {
				const nstore = getStore();
				const favorito = nstore.favorites.concat(nitem);
				setStore({ favorites: favorito });
			},

			delFavorites: ditem => {
				const fstore = getStore();
				const favorito = fstore.favorites.concat(ditem);
				setStore({ favorites: favorito });
			}
		}
	};
};

export default getState;
