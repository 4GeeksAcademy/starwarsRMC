import React from "react";
import "../../styles/home.css";
import { Plebada } from "../component/Plebada.jsx";
import { Plazas } from "../component/Plazas.jsx";

export const Home = () => (
	<div className="mt-5"> 
		<Plebada />
		<Plazas />
	</div>//Main div close
);
