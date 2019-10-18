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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			cargarAPI: () => {
				fetch("https://swapi.co/api/people", {
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
			}
		}
	};
};

export default getState;
