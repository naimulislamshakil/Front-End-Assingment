/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

interface Artist {
	external_urls: {};
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

interface Image {
	height: number;
	url: string;
	width: number;
}

interface Card {
	album: {
		album_type: string;
		artists: [];
		available_markets: [];
		external_urls: {};
		href: string;
		id: string;
		images: Image[];
		name: string;
		release_date: string;
		release_date_precision: string;
		total_tracks: number;
		type: string;
		uri: string;
	};
	artists: Artist[];
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

interface Porps {
	result: Card;
}

const HomeCard = ({ result }: Porps) => {
	const handelPlay = () => {
		console.log('click');
	};
	return (
		<div
			className="m-3 d-flex"
			style={{ cursor: 'pointer' }}
			onClick={handelPlay}
		>
			<img
				className=" me-3"
				style={{ height: '64', width: '64' }}
				src={result.album.images[2].url}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{result.name}</h5>
				<p>Author Name: {result.artists[0].name}</p>
			</div>
		</div>
	);
};

export default HomeCard;
