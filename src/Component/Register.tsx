import './Navbar.css';

const Register = () => {
	const CLIENT_ID = '8c8375372c2c46dd845183448ee70cdc';
	const REDIRECT_URI = 'http://localhost:3000/';
	const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
	const RESPONSE_TYPE = 'token';
	return (
		<div className="row ">
			<div className="col div-center">
				<a
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
					className="btn btn-lg rounded-pill color"
				>
					Register With Spotify
				</a>
			</div>
		</div>
	);
};

export default Register;
