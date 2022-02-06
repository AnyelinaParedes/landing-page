import React from "react";

//create your first component
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap{" "}
					</a>

					<div
						className=" navbar-mx-left"
						id="navbarSupportedContent">
						<ul className="navbar-nav mb-2 mb-lg-0">
							<li className="nav-mx-left">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
