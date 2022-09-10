import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="row">
			<div className="col">
				<form className="w-75 mx-auto mt-5">
					{/* <!-- Email input --> */}
					<div className="form-outline mb-4">
						<input type="email" id="form2Example1" className="form-control" />
						<label className="form-label" htmlFor="form2Example1">
							Email address
						</label>
					</div>

					{/* <!-- Password input --> */}
					<div className="form-outline mb-4">
						<input
							type="password"
							id="form2Example2"
							className="form-control"
						/>
						<label className="form-label" htmlFor="form2Example2">
							Password
						</label>
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
