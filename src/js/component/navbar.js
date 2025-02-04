import React, { useContext } from "react";
import { Link } from "react-router-dom";
import estarguars from "../../img/estarguars.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handlerDelete = async (item) => {
		let deletedFavs = actions.deleteFavorites(item);
		if (deletedFavs) {
			alert("Borrado");
		}
	}
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src={estarguars} width="100" height="50" alt="" />
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Tus Favoritos
					<span className=" badge rounded-pill bg-danger">
						{store.favoritos.length}
					</span>
				</button>
				<ul className="container dropdown-menu">
					{Array.isArray(store.favoritos) && store.favoritos.map((item, index) => {
						return (
							<li key={index}>
								<h6 className="dropdown-item">
									{item.name}
									<button onClick={() => handlerDelete(item)}>
										<FontAwesomeIcon icon={faDeleteLeft} />
									</button>
								</h6>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	);
};

