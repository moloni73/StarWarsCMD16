const getState = ({ getStore, getActions, setStore, setAPI }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: [
				{
					favoritesPeoples: [],
					favoritesCharacters: [],
					favoritesVehicles: []
				}
			]
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

			addFavorites: (item, i) => {}
		}
	};
};

export default getState;
