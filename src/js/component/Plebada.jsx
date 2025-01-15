import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export const Plebada = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getVatos();
  }, []);

  return (
    <div className="mt-5">
      <div className="container-fluid row" style={{ width: "80%" }}>
        <h1 className="text-danger">Plebada</h1>
        {store.vatos && store.vatos.map((item, index) => {
          return (
            <div className="card col" key={index} style={{ width: "18" }}>
              <img src="..." className="card-img-top" alt="..." style={{height:"200px",width:"400px"}} />
              <div className="card-body">
                <h5 className="card-title">
                  {item.name}
                </h5>

                <table className="table-responsive">
                  <tbody>
                    <tr>
                      <th scope="row">Eye Color:</th>
                      <td> {item.eye_color} </td>
                    </tr>
                    <tr>
                      <th scope="row">Gender:</th>
                      <td>{item.gender}</td>
                    </tr>
                    <tr>
                      <th scope="row">Height:</th>
                      <td>{item.height}</td>
                    </tr>
                  </tbody>
                </table>

                <Link to="/masPlebada">
                  <button href="#" className="btn btn-primary">Saber mas...</button>
                </Link>
                <button href="#" className="btn btn-danger">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>

          );
        })}
      </div>

    </div>//Main div close
  )
}

