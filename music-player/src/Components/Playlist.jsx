export default function Playlist({ songs, setCurrentSong, currentSong }) {
	return (
		<ul className="playlist">
			{songs.map((song, index) => (
				<li
					key={song.id}
					onClick={() => setCurrentSong(index)}
					className={index === currentSong ? "active" : ""}
					title={`${song.title} — ${song.artist}`}
				>
					{song.title}
				</li>
			))}
		</ul>
	);
}