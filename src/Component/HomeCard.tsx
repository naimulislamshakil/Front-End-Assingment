/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import './Navbar.css';

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
interface Album {
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
}

interface Card {
	album: Album;
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
	setUrl: (url: string) => void;
}

const HomeCard = ({ result, setUrl }: Porps) => {
	// console.log(result);
	// const [local, setLocal] = useState<Card[]>([]);

	// useEffect(() => {
	// 	localStorage.setItem('favorite', JSON.stringify(local));
	// }, [local]);
	// console.log(local);
	return (
		<div
			className="m-3 d-flex"
			style={{ cursor: 'pointer' }}
			onClick={() => setUrl(result.uri)}
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
			<div>
				<button className="d-flex align-items-center btn btn-outline-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						fill="currentColor"
						className="bi bi-star-fill me-2 text-success"
						viewBox="0 0 16 16"
					>
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					ADD TO FAVOURITES
				</button>
			</div>
		</div>
	);
};

export default HomeCard;
