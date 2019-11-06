import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {

    return (
        <div className="container">
            <Consumer>
                {({ store, actions }) => {

                    let homeCharacters = store.characters[0];
                    let homePlanets= store.planets[0];
                    let homeVehicles= store.vehicles[0];
                    return (
                        <div className="row">
                            <div className="col-3">
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
                            <div className="col-3">
                                <div className="card">
                                    <Link to={"/"}>
                                        <img className="card-img-top" src={rigoImage} alt="Card image" />
                                    </Link>

                                    <div className="card-body">
                                        <h4 className="card-title">{homeCharacters.name}</h4>

                                        <button className="btn btn-success"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <Link to={"/"}>
                                        <img className="card-img-top" src={rigoImage} alt="Card image" />
                                    </Link>

                                    <div className="card-body">
                                        <h4 className="card-title">{homePlanets.name}</h4>

                                        <button className="btn btn-success"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <Link to={"/"}>
                                        <img className="card-img-top" src={rigoImage} alt="Card image" />
                                    </Link>

                                    <div className="card-body">
                                        <h4 className="card-title">{homeVehicles.name}</h4>

                                        <button className="btn btn-success"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        </div>
    );
};





