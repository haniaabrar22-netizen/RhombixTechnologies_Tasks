import { useRef, useState, useEffect } from "react";
import { songs } from "../data/songs";
import Controls from "./Controls";
import Playlist from "./Playlist";
import Volume from "./Volume";
import "../Styles/Player.css";

export default function Player() {
const audioRef = useRef(null);
const [currentSong, setCurrentSong] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);

const playPause = () => {
	if (!audioRef.current) return;
	if (isPlaying) audioRef.current.pause();
	else audioRef.current.play().catch(() => {
		/* ignore play promise errors (autoplay blocked) */
	});
	setIsPlaying((s) => !s);
};

const nextSong = () => {
	setCurrentSong((prev) => (prev + 1) % songs.length);
	setIsPlaying(true);
};

const prevSong = () => {
	setCurrentSong((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
	setIsPlaying(true);
};

// Play/pause when isPlaying changes or when song changes
useEffect(() => {
	const audio = audioRef.current;
	if (!audio) return;

	if (isPlaying) {
		audio.play().catch(() => setIsPlaying(false));
	} else {
		audio.pause();
	}
}, [isPlaying]);

// When the current song changes, load it and play if expected
useEffect(() => {
	const audio = audioRef.current;
	if (!audio) return;
	audio.pause();
	audio.load();
	if (isPlaying) audio.play().catch(() => setIsPlaying(false));
}, [currentSong]);

return (
	<div className="player">
			<img
				src={songs[currentSong].cover}
				className="cover"
				alt={`${songs[currentSong].title} cover`}
				onError={(e) => {
					// fallback to a tiny inline SVG if cover fails to load
					e.currentTarget.onerror = null;
					e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="%236c63ff">No Cover</text></svg>';
				}}
			/>
		<h3 className="title">{songs[currentSong].title}</h3>
		<p className="artist">{songs[currentSong].artist}</p>

		<audio
			ref={audioRef}
			src={songs[currentSong].src}
			onEnded={() => {
				setCurrentSong((prev) => (prev + 1) % songs.length);
				setIsPlaying(true);
			}}
		/>

		<Controls
			playPause={playPause}
			isPlaying={isPlaying}
			nextSong={nextSong}
			prevSong={prevSong}
		/>

		<div className="bottom-row">
			<Volume audioRef={audioRef} />
			<Playlist
				songs={songs}
				setCurrentSong={(i) => {
					setCurrentSong(i);
					setIsPlaying(true);
				}}
				currentSong={currentSong}
			/>
		</div>
	</div>
);
}