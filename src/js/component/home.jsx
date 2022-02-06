import React from "react";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mb-5">
				<div className="row">
					<Jumbotron />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
