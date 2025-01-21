import { useState } from "react";
import { Navigate } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vatos: [{}],
			hardcore:
				{
					birth_year: "MIO", 
					eye_color: "Blue", 
					gender: "Male", 
					hair_color: "Blond", 
					height: "172", 
					homeworld: "https://www.swapi.tech/api/planets/1/", 
					mass: "77", 
					name: "DDDDDDDXXXXXXX", 
					skin_color: "Fair", 
					created: "2014-12-09T13:50:51.644000Z", 
					edited: "2014-12-10T13:52:43.172000Z", 
					species: [ "https://www.swapi.tech/api/species/1/" ], 
					url: "https://www.swapi.tech/api/people/1/", 
					
				  },
			
			plazas: [
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
					
				  }
			],
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
					console.log("fijate vato",data)
					setStore({ vatos: data });
					console.log("fijate mas",store)
					
				

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
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
					console.log("fijate fijateeeee",data)
					setStore({ vatos: data });
					console.log("fijate mas",store)
					
				

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
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
					console.log("fijate fijateeeee",data)
					setStore({ vatos: data });
					console.log("fijate mas",store)
					
				

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
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
					console.log("fijate fijateeeee",data)
					setStore({ plazas: data });
					console.log("fijate mas",store)
					
				

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
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
					console.log("fijate fijateeeee",data)
					setStore({ plazas: data });
					console.log("fijate mas",store)
					
				

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
						throw new Error("Tas bien wey")
					}
					let data2 = await response.json();
					console.log("fijate",data2)
					setStore({ plazas: data2 });
					console.log("fijate mas",store)
					
				

				} catch (error) {
					console.log(error);
				}
			},
			goToDetailPlebada : async (perro) => {
				console.log("back", perro);
			
				try {
					let response = await fetch(`${perro}`)
					if (!response.ok) {
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
						console.log("ES VIERNES",data)
					let store = getStore();
				setStore({...store,currentData:{...data}});
				console.log("otro mas wey",store.currentData)
				
				return true
				} catch (error) {
					console.error(error)
					
				}
			},
			goToDetailPlazas : async (gato) => {
				try {
					let response = await fetch(`${gato}`)
					if (!response.ok) {
						throw new Error("Tas bien wey")
					}
					let data = await response.json();
						console.log("ES VIERNES",data)
					let store = getStore();
				setStore({...store,currentDatas:{...data}});
			
				
				return true
				} catch (error) {
					console.error(error)
					
				}

			},
			addFavorites : async (favorites) => {
				console.log("recibido",favorites)
				try {
					let store = getStore();
					setStore({...store, favoritos: [...store.favoritos, ...(Array.isArray(favorites) ? favorites : [favorites])]})
					return true
				} catch (error) {
					console.error(error)
     			 };
			},
			deleteFavorites : async (bye) => {
				console.log("recibido",bye)
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
