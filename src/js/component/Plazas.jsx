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
  // const handleSaber = () =>



  useEffect(() => {
    actions.getPlazas();
  }, []);

  return (
    <div className="mt-5">
      <div className="card" >
        <h1 className="text-danger">Plazas</h1>
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
        }}>
          {store.plazas && store.plazas.map((item, index) => {

            return (
              <div className="col" key={index} style={{
                minWidth: "200px",
                height: "150px",
                backgroundColor: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}>
                <img src={`https://starwars-visualguide.com//assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="estarguars image" style={{ width: "100%" }} />
                <div className="card-body col">
                  <h5 className="card-title">
                    {item.name}
                  </h5>


                  <Link to={`/masPlazas/${item.uid}`}>
                    <button href="#" onClick={() => actions.goToDetailPlazas.setNumber(item.uid)} className="btn btn-primary">Saber mas...</button>
                  </Link>
                  <button href="#" className="btn btn-danger">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                </div>
              </div>

            );
          })}
        </div>
      </div>

    </div>//Main div close
  )
}

