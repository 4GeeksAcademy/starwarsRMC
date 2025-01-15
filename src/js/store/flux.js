const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vatos: [
				{
					birth_year: "MIO", 
					eye_color: "Blue", 
					gender: "Male", 
					hair_color: "Blond", 
					height: "172", 
					homeworld: "https://www.swapi.tech/api/planets/1/", 
					mass: "77", 
					name: "Luke Skywalker", 
					skin_color: "Fair", 
					created: "2014-12-09T13:50:51.644000Z", 
					edited: "2014-12-10T13:52:43.172000Z", 
					species: [ "https://www.swapi.tech/api/species/1/" ], 
					url: "https://www.swapi.tech/api/people/1/", 
					
				  },
			]
		},
		actions: {
			getVatos: async () => {
				let store = getStore();
				
				
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/`, { 
					})
					if (!response.ok) {
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
					console.log("fijate",data)
					setStore({ vatos: data.results });
					console.log("fijate mas",store)
					
				

				} catch (error) {
					console.log(error);
				}
			},
			
			
				}
	};
};

export default getState;
