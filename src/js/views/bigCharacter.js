import React from "react";
import { Link } from "react-router-dom";
import charactersImage from "../../img/characters.jpg";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/bigCharacter.scss";

export const BigCharacter = props => {
	return (
		<div className="container-fluid">
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="row">
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h2 className="card-title">
											{store.characters[props.match.params.theid].name}
										</h2>
										<button
											className="btn btn-success"
											onClick={() =>
												actions.addFavorites(store.characters[props.match.params.theid])
											}>
											<span>addFavorites</span>
										</button>
									</div>
									<img className="card-img-bottom" src={charactersImage} alt="Card image" />
								</div>
							</div>
							<div className="col-6">
								<div className="card">
									<div className="card-body">
										<h3 className="card-title">Looks Like</h3>
										<ul className="list-group">
											<li className="list-group-item">
												<p className="card-text">
													Gender: {store.characters[props.match.params.theid].gender}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Height: {store.characters[props.match.params.theid].height} cm.
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Eye Color: {store.characters[props.match.params.theid].eye_color}
												</p>
											</li>
											<li className="list-group-item">
												<p className="card-text">
													Mass: {store.characters[props.match.params.theid].mass} kg.
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

BigCharacter.propTypes = {
	match: PropTypes.object
};
