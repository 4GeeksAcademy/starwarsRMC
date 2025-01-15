import React from "react";
import { Link } from "react-router-dom";
import estarguars from "../../img/estarguars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src={estarguars} width="100" height="50" alt="" />
			</Link>
			<div className="ml-auto">
				<Link to="...">
					<button className="btn btn-warning">Favs 4ever
						<span className=" badge rounded-pill bg-danger">
							99+
							<span className="visually-hidden">unread messages</span>
						</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};

