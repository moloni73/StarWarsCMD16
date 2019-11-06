import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import "bootstrap/dist/css/bootstrap.css";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark justify-content-center">
				<h1 className="navbar-brand " href="#">
					Entities Star Wars
				</h1>
			</nav>
		);
	}
}

// <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
