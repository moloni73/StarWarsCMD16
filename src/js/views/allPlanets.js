import React from "react";
import { Link } from "react-router-dom";
import planetsImage from "../../img/planets.jpg";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/allPlanets.scss";

export const AllPlanets = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-dark bg-dark">
				<h1 className="navbar-brand " href="#">
					PLANETS
				</h1>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</nav>
			<div className="row">
				<Consumer>
					{({ store, actions }) => {
						return store.planets.map((item, index) => {
							return (
								<div key={index} className="col-4">
									<div className="card">
										<Link to={"/bigPlanet/" + index}>
											<img className="card-img-top" src={planetsImage} alt="Card image" />
										</Link>

										<div className="card-body">
											<h4 className="card-title">{item.name}</h4>

											<button
												className="btn btn-success"
												onClick={() => actions.addFavorites(item)}>
												<span>addFavorites</span>
											</button>
										</div>
									</div>
								</div>
							);
						});
					}}
				</Consumer>
			</div>
		</div>
	);
};
