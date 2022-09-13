import React from 'react';
import HomeCard from './HomeCard';
import './Navbar.css';

interface Type {
	album: {
		album_type: string;
		artists: [];
		available_markets: [];
		external_urls: {};
		href: string;
		id: string;
		images: [];
		name: string;
		release_date: string;
		release_date_precision: string;
		total_tracks: number;
		type: string;
		uri: string;
	};
	artists: [];
	available_markets: [];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: { isrc: string };
	external_urls: { spotify: string };
	href: string;
	id: string;
	is_local: boolean;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
}

interface Result {
	results: Type[];
}

const Home = ({ results }: Result) => {
	return (
		<div>
			{results ? (
				results.map((result, index) => (
					<HomeCard key={index} result={result}></HomeCard>
				))
			) : (
				<h4 className="text">First Search in the search Bar.....</h4>
			)}
		</div>
	);
};

export default Home;
