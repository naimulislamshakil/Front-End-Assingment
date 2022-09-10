import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [check, setCheck] = useState(false);
	return (
		<div className="row">
			<div className="col">
				<form className="w-75 mx-auto mt-5">
					<div className="form-outline mb-4">
						<input
							type="text"
							id="form3Example1cg"
							className="form-control form-control-lg"
						/>
						<label className="form-label" htmlFor="form3Example1cg">
							Your Name
						</label>
					</div>

					<div className="form-outline mb-4">
						<input
							type="email"
							id="form3Example3cg"
							className="form-control form-control-lg"
						/>
						<label className="form-label" htmlFor="form3Example3cg">
							Your Email
						</label>
					</div>

					<div className="form-outline mb-4">
						<input
							type="password"
							id="form3Example4cg"
							className="form-control form-control-lg"
						/>
						<label className="form-label" htmlFor="form3Example4cg">
							Password
						</label>
					</div>

					<div className="form-outline mb-4">
						<input
							type="password"
							id="form3Example4cdg"
							className="form-control form-control-lg"
						/>
						<label className="form-label" htmlFor="form3Example4cdg">
							Repeat your password
						</label>
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
