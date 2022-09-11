import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<div className="container">
			<Navbar />
			<ToastContainer />
		</div>
	);
}

export default App;
