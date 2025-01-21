import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Plazas = () => {
  const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerDetail = async (item) => {
      let gato = await actions.goToDetailPlazas(item.url);
      console.log("aqui abajito", gato);
      if (gato) {
        navigate("./masPlazas");
      }
    };
    const handlerFavorites2 = async (item) => {
      console.log("previo",item)
      let favorites = await actions.addFavorites(item);
      
      if (favorites) {
        alert("Agregado a favoritos");
      }
    }
    const handlerNext2 = async () => {
      console.log("Next", store.plazas.next);
      await actions.getPlazasNext(store.plazas.next);
      
      
    };
    const handlerBack2 = async () => {
      console.log("Back", store.plazas.previous);
      await actions.getPlazasBack(store.plazas.previous);
      
      
    };
    useEffect(() => {
      actions.getPlazas();
    }, []);
  return (
    <div className="mt-5">
      <div className="card" >
        <h1 className="text-danger">Planetas</h1>
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
          {store.plazas.results && store.plazas.results.map((item, index) => {

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
                <img src={`https://starwars-visualguide.com//assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="caida de origen" style={{ width: "100%" }} />
                <div className="card-body col">
                  <h5 className="card-title">
                    {item.name}
                  </h5>


                  <button href="#" onClick={()=>handlerDetail(item)} className="btn btn-primary">Saber mas...</button>
                  <button href="#" onClick={()=>handlerFavorites2(item)} className="btn btn-danger">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                </div>
              </div>

            );
          })}
        </div>
        
      </div>
      <button href="#" onClick={()=>handlerBack2(store.plazas.next)} className="btn btn-dark">Anterior</button>

<button href="#" onClick={()=>handlerNext2(store.plazas.next)} className="btn btn-dark">Siguiente</button>

          
    </div>//Main div close
  )
}

