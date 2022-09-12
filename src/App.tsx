import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
function App() {
	useEffect(() => {
		const hash: any = window.location.hash;
		let token: any = window.localStorage.getItem('token');

		// getToken()

		if (!token && hash) {
			token = hash
				.substring(1)
				.split('&')
				.find((elem: any) => elem.startsWith('access_token'))
				.split('=')[1];

			window.location.hash = '';
			window.localStorage.setItem('token', token);
		}
	}, []);

	return (
		<div className="container">
			<Navbar />
			<ToastContainer />
		</div>
	);
}

export default App;
