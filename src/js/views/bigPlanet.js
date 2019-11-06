import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/bigPlanet.scss";

export const BigPlanet = props => {
	return (
		<div className="container-fluid">
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="row">
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h2 className="card-title">{store.planets[props.match.params.theid].name}</h2>
										<button
											className="btn btn-success"
											onClick={() => actions.addFavorites(item, index)}>
											<span>addFavorites</span>
										</button>
									</div>
									<img className="card-img-bottom" src={rigoImage} alt="Card image" />
								</div>
							</div>
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h3 className="card-title">Looks Like</h3>
										<ul className="list-group">
											<li className="list-group-item">
												<p className="card-text">
													Climate: {store.planets[props.match.params.theid].climate}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Diameter: {store.planets[props.match.params.theid].diameter} Km.
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Gravity: {store.planets[props.match.params.theid].gravity} g.
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Population: {store.planets[props.match.params.theid].population}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Surface Water:
													{store.planets[props.match.params.theid].surface_water}
												</p>
											</li>
										</ul>
									</div>
								</div>
								<Link to="/allCharacters">
									<span className="btn btn-primary btn-lg" href="#" role="button">
										Back home
									</span>
								</Link>
							</div>
						</div>
					);
				}}
			</Consumer>
		</div>
	);
};

BigPlanet.propTypes = {
	match: PropTypes.object
};
