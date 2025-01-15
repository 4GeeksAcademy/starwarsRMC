import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const Plazas = () => {
    return(
    <div className="mt-5">
        <div className="container-fluid" style={{ width: "80%" }}>
            <h1 className="text-danger">Plazas</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to buil
                    </p>
                    <Link to="/masPlazas">
                        <button href="#" className="btn btn-primary">Saber mas...</button>
                    </Link>
                    <button href="#" className="btn btn-danger">
                        <FontAwesomeIcon icon={faHeart} />
                        
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}
