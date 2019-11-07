import React from "react";
import charactersImage from "../../img/characters.jpg";
import planetsImage from "../../img/planets.jpg";
import shipsImage from "../../img/ships.jpg";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<ul className="list-group">
						<li className="list-group-item">
							<Link to={"/"}>
								<span>ALL</span>
							</Link>
						</li>
						<li className="list-group-item">
							<Link to={"/allCharacters"}>
								<span>CHARACTERS</span>
							</Link>
						</li>
						<li className="list-group-item">
							<Link to={"/allPlanets"}>
								<span>PLANETS</span>
							</Link>
						</li>
						<li className="list-group-item">
							<Link to={"/allVehicles"}>
								<span>VEHICLES</span>
							</Link>
						</li>
						<li className="list-group-item">
							<Link to={"/allFavorites"}>
								<span>FAVORITES</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-8">
					<div className="row">
						<div className="col-8">
							<div className="card">
								<Link to={"/allCharacters"}>
									<img className="card-img-top" src={charactersImage} alt="Card image" />
								</Link>
								<div className="card-body">
									<h4 className="card-title">CHARACTERS</h4>
									<button className="btn btn-success"></button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<div className="card">
								<Link to={"/allPlanets"}>
									<img className="card-img-top" src={planetsImage} alt="Card image" />
								</Link>
								<div className="card-body">
									<h4 className="card-title">PLANETS</h4>
									<button className="btn btn-success"></button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<div className="card">
								<Link to={"/allVehicles"}>
									<img className="card-img-top" src={shipsImage} alt="Card image" />
								</Link>
								<div className="card-body">
									<h4 className="card-title">VEHICLES</h4>
									<button className="btn btn-success"></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
