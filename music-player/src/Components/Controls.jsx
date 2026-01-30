export default function Controls({ playPause, isPlaying, nextSong, prevSong }) {
return (
<div className="controls">
			<button onClick={prevSong} aria-label="Previous" className="btn">
				⏮
			</button>
			<button onClick={playPause} aria-label={isPlaying ? "Pause" : "Play"} className="btn primary">
				{isPlaying ? "⏸" : "▶"}
			</button>
			<button onClick={nextSong} aria-label="Next" className="btn">
				⏭
			</button>
</div>
);
}
