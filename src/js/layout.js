import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//import { Home } from "./views/home";
//import { Favorites } from "./views/favorites";
import { AllCharacters } from "./views/allCharacters";
import { AllPlanets } from "./views/allPlanets";
import { AllVehicles } from "./views/allVehicles";
import { AllFavorites } from "./views/allFavorites";
import { BigCharacter } from "./views/bigCharacter";
import { BigPlanet } from "./views/bigPlanet";
import { BigVehicle } from "./views/bigVehicle";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/allVehicles" component={AllVehicles} />
						<Route path="/allCharacters" component={AllCharacters} />
						<Route path="/allPlanets" component={AllPlanets} />
						<Route path="/allFavorites" component={AllFavorites} />
						<Route path="/bigCharacter/:theid" component={BigCharacter} />
						<Route path="/bigPlanet/:theid" component={BigPlanet} />
						<Route path="/bigVehicle/:theid" component={BigVehicle} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
