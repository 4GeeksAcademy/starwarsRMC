import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Plebada = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  
  const handlerDetail = async (item) => {
    console.log("aqui abajito", item);
    let perro = await actions.goToDetailPlebada(item.url);
    
    if (perro) {
      navigate("./masPlebada");
    }
  }
  const handlerFavorites = async (item) => {
    console.log("previo",item)
    let favorites = await actions.addFavorites(item);
    
    if (favorites) {
      alert("Agregado a favoritos");
    }
  }
  const handlerNext = async () => {
    console.log("Next", store.vatos.next);
    await actions.getVatosNext(store.vatos.next);
    
    
  };
  const handlerBack = async () => {
    console.log("Back", store.vatos.previous);
    await actions.getVatosBack(store.vatos.previous);
    
    
  };
  useEffect(() => {
    actions.getVatos();
  }, []);

  return (
    <div className="mt-5">
      <div className="card" style={{ width: "100%" }}>
        <h1 className="text-danger">Personajes</h1>
        <div className="container-fluid" style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        padding: "1rem",
        gap: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        height: "350px"
      }}>
        {store.vatos.results && store.vatos.results.map((item, index) => {
          
            return (
              <div className="container-fluid row" key={index} style={{
                minWidth: "220px",
                height: "300px",
                backgroundColor: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}>
              <img src={`https://starwars-visualguide.com//assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="Caida de Origen" style={{width:"100%"}} />
              <div className="card-body col">
                <h5 className="card-title">
                  {item.name}
                </h5>
                  <button href="#" onClick={()=>handlerDetail(item)} className="btn btn-primary">Saber mas...</button>
                <button href="#" onClick={()=>handlerFavorites(item)} className="btn btn-danger">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                 
              </div>
            </div>

          );
        })}
      </div>
      </div>
      <button href="#" onClick={()=>handlerBack(store.vatos.next)} className="btn btn-dark">Anterior</button>

      <button href="#" onClick={()=>handlerNext(store.vatos.next)} className="btn btn-dark">Siguiente</button>
    </div>//Main div close
  )
}

