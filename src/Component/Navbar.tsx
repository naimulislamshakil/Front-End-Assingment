import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
	const navbar = (
		<>
			<li>
				<Link to="/login" className="nav-link text-white px-0 align-middle">
					<span className="ms-1 d-sm-inline">Login</span>{' '}
				</Link>
			</li>
			<li>
				<Link
					to="/register"
					className="nav-link text-white px-0 mb-sm-2 align-middle"
				>
					<span className="ms-1 d-sm-inline">Register</span>{' '}
				</Link>
			</li>
		</>
	);
	return (
		<div>
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<Link
							to="/"
							className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
						>
							<span className="fs-5 d-sm-inline">Menu</span>
						</Link>
						<ul
							className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
							id="menu"
						>
							{navbar}
						</ul>

						<div className="dropdown pb-4">
							<Link
								to="/"
								className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
								id="dropdownUser1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="https://github.com/mdo.png"
									alt="hugenerd"
									width="30"
									height="30"
									className="rounded-circle"
								/>
								<span className="d-none d-sm-inline mx-1">loser</span>
							</Link>
							<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
								<li>
									<Link to="/" className="dropdown-item">
										New project...
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-item">
										Settings
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-item">
										Profile
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link to="/" className="dropdown-item">
										Sign out
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col py-3">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Navbar;