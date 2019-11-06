import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/allCharacters.scss";

export const AllCharacters = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-dark bg-dark">
				<h1 className="navbar-brand " href="#">
					CHARACTERS
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
						return store.characters.map((item, index) => {
							return (
								<div key={index} className="col-4">
									<div className="card">
										<Link to={"/bigCharacter/" + index}>
											<img className="card-img-top" src={rigoImage} alt="Card image" />
										</Link>

										<div className="card-body">
											<h4 className="card-title">{item.name}</h4>

											<button
												className="btn btn-success"
												onClick={() => actions.addFavorites(item, index)}>
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
