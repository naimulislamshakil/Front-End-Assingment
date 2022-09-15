import React, { useState } from 'react';
import HomeCard from './HomeCard';
import './Navbar.css';
import Player from './Player';

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
	const [url, setUrl] = useState('');
	// const [palyingTrack, setpalyingTrack] = useState();
	const token = localStorage.getItem('token');

	// const chooseSongs = (song: any) => {
	// 	setpalyingTrack(song);
	// };

	return (
		<div>
			<div>
				{results ? (
					results.map((result, index) => (
						<HomeCard key={index} result={result} setUrl={setUrl}></HomeCard>
					))
				) : (
					<h4 className="text">First Search in the search Bar.....</h4>
				)}
			</div>
			<div>
				<Player url={url} token={token} />
			</div>
		</div>
	);
};

export default Home;
