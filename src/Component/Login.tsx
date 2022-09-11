import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';
import { useAppDispatch, useAppSelector } from './Redux/Hooks';
import { loginUser } from './Redux/Slice/LoginSlice';

const Login = () => {
	const dispatch = useAppDispatch();
	const { message, isLoading, error } = useAppSelector(
		(state) => state.register
	);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};

		dispatch(loginUser({ user }));
	};
	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		toast.error(error);
	}

	if (message) {
		toast.success(message?.message);
	}

	return (
		<div className="row">
			<div className="col">
				<form onSubmit={login} className="w-75 mx-auto mt-5">
					{/* <!-- Email input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form2Example1">
							Email address
						</label>
						<input
							onBlur={(e) => setEmail(e.target.value)}
							type="email"
							id="form2Example1"
							className="form-control"
						/>
					</div>

					{/* <!-- Password input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="form2Example2">
							Password
						</label>
						<input
							onBlur={(e) => setPassword(e.target.value)}
							type="password"
							id="form2Example2"
							className="form-control"
						/>
					</div>

					{/* <!-- 2 column grid layout for inline styling --> */}
					<div className="row mb-4">
						<div className="col d-flex justify-content-center">
							{/* <!-- Checkbox --> */}
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="form2Example31"
									checked
								/>
								<label className="form-check-label" htmlFor="form2Example31">
									{' '}
									Remember me{' '}
								</label>
							</div>
						</div>

						<div className="col">
							{/* <!-- Simple link --> */}
							<Link to="/">Forgot password?</Link>
						</div>
					</div>

					{/* <!-- Submit button --> */}
					<div className="d-flex justify-content-center">
						<input
							value="Login"
							type="submit"
							className="btn btn-lg btn-primary mb-4"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
