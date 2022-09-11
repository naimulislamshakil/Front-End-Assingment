import React from 'react';

const Loading = () => {
	return (
		<div className="d-flex h-100 justify-content-center align-items-center">
			<div className="spinner-grow" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
