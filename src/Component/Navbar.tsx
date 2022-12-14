import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import './Navbar.css';
import Playlists from './Playlists';
import Favourites from './Favourites';
import { useEffect, useState } from 'react';
import spotifyWebApi from 'spotify-web-api-js';

const spotify = new spotifyWebApi();

const Navbar = () => {
	type User = {
		display_name?: string;
	};

	const [token, setToken] = useState('');
	const [user, setUser] = useState<User>({});
	const [results, setResults] = useState<any>({});
	useEffect(() => {
		const token: any = window.localStorage.getItem('token');
		if (token) {
			setToken(token);
			spotify.setAccessToken(token);
			spotify.getMe().then((data: any) => setUser(data));
		}
	}, []);
	const { display_name } = user;

	const logout = () => {
		setToken('');
		window.localStorage.removeItem('token');
	};

	const search = async (text: string) => {
		spotify.searchTracks(text).then((scarch: any) => setResults(scarch));
	};

	// console.log(results.tracks?.items);

	const navbar = (
		<>
			<li>
				<Link to="/" className="d-flex nav-link text-white px-0 align-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="currentColor"
						className="bi bi-house-fill me-2 text-success"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
						/>
						<path
							fillRule="evenodd"
							d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
						/>
					</svg>
					<span className="ms-1 d-sm-inline"> Home</span>{' '}
				</Link>
			</li>
			<li>
				<Link
					to="/favourites"
					className="d-flex nav-link text-white px-0 align-middle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="currentColor"
						className="bi bi-star-fill me-2 text-success"
						viewBox="0 0 16 16"
					>
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<span className="ms-1 d-sm-inline"> Favourites</span>{' '}
				</Link>
			</li>
			<li>
				<Link
					to="/playlists"
					className="d-flex nav-link text-white px-0 align-middle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="currentColor"
						className="bi bi-play-circle me-2 text-success"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
					</svg>
					<span className="ms-1 d-sm-inline"> Playlists</span>{' '}
				</Link>
			</li>
		</>
	);

	return (
		<div>
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<span className="fs-5 d-sm-inline">Menu</span>

						<ul
							className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
							id="menu"
						>
							{navbar}
						</ul>

						{token ? (
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
									<span className="d-none d-sm-inline mx-1">
										{display_name?.slice(0, 10)}
									</span>
								</Link>

								<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
									<li>
										<button onClick={logout} className="link dropdown-item ">
											Sign out
										</button>
									</li>
								</ul>
							</div>
						) : (
							<ul className="nav nav-pills flex-column">
								<li>
									<Link
										to="/login"
										className="nav-link text-white px-0 align-middle"
									>
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
							</ul>
						)}
					</div>
				</div>
				<div className="col py-3 content-bg">
					<div className="input-group mb-3 w-50">
						<input
							onChange={(e) => search(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Search By Name......"
						></input>
					</div>
					<Routes>
						<Route
							path="/"
							element={<Home results={results.tracks?.items} />}
						></Route>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/playlists" element={<Playlists />} />
						<Route path="/favourites" element={<Favourites />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
