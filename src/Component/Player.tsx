import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

interface Props {
	url: string;
	token: any;
}

const Player = ({ url, token }: Props) => {
	return (
		<div>
			<SpotifyPlayer token={token} uris={[url]} />
		</div>
	);
};

export default Player;
