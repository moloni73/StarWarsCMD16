import React from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => (
	<div className="container">
		<ul className="list-group">
			<Consumer>
				{({ store, actions }) => {
					return store.characters.map((character, i) => {
						store.planets.map((planet, j) => {
							<p key={j}>{planet.name}</p>;
						});
						return (
							<li key={i} className="list-group-item d-flex justify-content-between">
								<Link to={"/single/" + i}>
									<span>Link to:{character.title}</span>
								</Link>

								{// Conditional render example
								// Check to see if the background is orange, if so, display the message
								i.background === "orange" ? (
									<p style={{ color: i.initial }}>
										Check store/flux.js scroll to the actions to see the code
									</p>
								) : null}
								<p>Personaje: {character.name}</p>
								<button className="btn btn-success" onClick={() => actions.changeColor(i, "orange")}>
									Change Color
								</button>
							</li>
						);
					});
				}}
			</Consumer>
		</ul>

		<br />
		<Link to="/">
			<button className="btn btn-primary">Back home</button>
		</Link>
	</div>
);
