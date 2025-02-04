
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			vatos: [{}],
			plazas: [{}],
			currentData: {},
			currentDatas: {},
			favoritos: []
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
					console.log("fijate vato", data)
					setStore({ vatos: data });
					console.log("fijate mas", store)
				} catch (error) {
					console.log(error);
				}
			},
			getVatosNext: async (otro) => {
				let store = getStore();
				try {
					let response = await fetch(`${otro}`, {
					})
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					setStore({ vatos: data });
					console.log(store)
				} catch (error) {
					console.log(error);
				}
			},
			getVatosBack: async (otromas) => {
				let store = getStore();
				try {
					let response = await fetch(`${otromas}`, {
					})
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					setStore({ vatos: data });
					console.log(store)
				} catch (error) {
					console.log(error);
				}
			},
			getPlazasNext: async (otros) => {
				let store = getStore();
				try {
					let response = await fetch(`${otros}`, {
					})
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					setStore({ plazas: data });
					console.log(store)
				} catch (error) {
					console.log(error);
				}
			},
			getPlazasBack: async (otromass) => {
				let store = getStore();
				try {
					let response = await fetch(`${otromass}`, {
					})
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					setStore({ plazas: data });
					console.log(store)
				} catch (error) {
					console.log(error);
				}
			},
			getPlazas: async () => {
				let store = getStore();
				try {
					let response = await fetch(`https://www.swapi.tech/api/planets/`, {
					})
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data2 = await response.json();
					setStore({ plazas: data2 });
					console.log(store)
				} catch (error) {
					console.log(error);
				}
			},
			goToDetailPlebada: async (perro) => {
				try {
					let response = await fetch(`${perro}`)
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					let store = getStore();
					setStore({ ...store, currentData: { ...data } });
					console.log(store.currentData)
					return true
				} catch (error) {
					console.error(error)
				}
			},
			goToDetailPlazas: async (gato) => {
				try {
					let response = await fetch(`${gato}`)
					if (!response.ok) {
						throw new Error("Hubo un error")
					}
					let data = await response.json();
					let store = getStore();
					setStore({ ...store, currentDatas: { ...data } });
					return true
				} catch (error) {
					console.error(error)
				}
			},
			addFavorites: async (favorites) => {
				console.log("recibido", favorites)
				try {
					let store = getStore();
					setStore({ ...store, favoritos: [...store.favoritos, ...(Array.isArray(favorites) ? favorites : [favorites])] })
					return true
				} catch (error) {
					console.error(error)
				};
			},
			deleteFavorites: async (bye) => {
				console.log("recibido", bye)
				try {
					let store = getStore();
					const updatedFavoritos = store.favoritos.filter(favorito => favorito !== bye);
					setStore({ ...store, favoritos: updatedFavoritos });
					return true;
				} catch (error) {
					console.error(error)
				};
			}
		}
	};
};

export default getState;
