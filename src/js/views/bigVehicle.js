import React from "react";
import { Link } from "react-router-dom";
import shipsImage from "../../img/ships.jpg";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/bigVehicle.scss";

export const BigVehicle = props => {
	return (
		<div className="container-fluid">
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="row">
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h2 className="card-title">{store.vehicles[props.match.params.theid].name}</h2>
										<button
											className="btn btn-success"
											onClick={() => actions.addFavorites(item, index)}>
											<span>addFavorites</span>
										</button>
									</div>
									<img className="card-img-bottom" src={shipsImage} alt="Card image" />
								</div>
							</div>
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h3 className="card-title">Main Features</h3>
										<ul className="list-group">
											<li className="list-group-item">
												<p className="card-text">
													Cargo Capacity:{" "}
													{store.vehicles[props.match.params.theid].cargo_capacity} kg.
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Consumables: {store.vehicles[props.match.params.theid].consumables}{" "}
													month.
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Crew: {store.vehicles[props.match.params.theid].crew}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Passengers: {store.vehicles[props.match.params.theid].passengers}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Vehicle Class:{" "}
													{store.vehicles[props.match.params.theid].vehicle_class}
												</p>
											</li>
										</ul>
									</div>
								</div>
								<Link to="/">
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

BigVehicle.propTypes = {
	match: PropTypes.object
};
