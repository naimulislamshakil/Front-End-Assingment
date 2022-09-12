import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.config';
import Loading from './Loading';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
	// create user
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	// const [user, loading2] = useAuthState(auth);

	// navigator
	const navigate = useNavigate();

	// usefull state
	const [check, setCheck] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	// create a user
	const register = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password === rePassword) {
			createUserWithEmailAndPassword(email, password);
		} else {
			toast.error("Password dosen't match.");
		}
	};

	if (loading) {
		return <Loading />;
	}
	if (error) {
		toast.error(error?.message);
	}
	if (user) {
		navigate('/');
	}
	console.log(user);

	return (
		<div className="row">
			<div className="col">
				<form onSubmit={register} className="w-75 mx-auto mt-5">
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form3Example1cg">
							Your Name
						</label>
						<input
							type="text"
							id="form3Example1cg"
							className="form-control form-control-lg"
						/>
					</div>

					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form3Example3cg">
							Your Email
						</label>
						<input
							type="email"
							id="form3Example3cg"
							onChange={(e) => setEmail(e.target.value)}
							className="form-control form-control-lg"
						/>
					</div>

					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form3Example4cg">
							Password
						</label>
						<input
							type="password"
							id="form3Example4cg"
							onChange={(e) => setPassword(e.target.value)}
							className="form-control form-control-lg"
						/>
					</div>

					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form3Example4cdg">
							Repeat your password
						</label>
						<input
							type="password"
							id="form3Example4cdg"
							onChange={(e) => setRePassword(e.target.value)}
							className="form-control form-control-lg"
						/>
					</div>

					<div className="form-check d-flex justify-content-center mb-5">
						<input
							className="form-check-input me-2"
							type="checkbox"
							onClick={() => setCheck(!check)}
							value=""
							id="form2Example3cg"
						/>
						<label className="form-check-label" htmlFor="form2Example3g">
							I agree all statements in{' '}
							<a href="#!" className="text-body">
								<u>Terms of service</u>
							</a>
						</label>
					</div>

					{check ? (
						<div className="d-flex justify-content-center">
							<input
								type="submit"
								value="Register"
								className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
							/>
						</div>
					) : (
						<div className="d-flex justify-content-center">
							<input
								type="submit"
								value="Register"
								className="btn disabled btn-success btn-block btn-lg gradient-custom-4 text-body"
							/>
						</div>
					)}

					<p className="text-center text-muted mt-5 mb-0">
						Have already an account?{' '}
						<Link to="/login" className="fw-bold text-body">
							Login Here!
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
