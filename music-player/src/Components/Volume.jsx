export default function Volume({ audioRef }) {
	const onChange = (e) => {
		if (!audioRef || !audioRef.current) return;
		audioRef.current.volume = Number(e.target.value);
	};

	return (
		<div className="volume">
			<label htmlFor="vol">Vol</label>
			<input
				id="vol"
				type="range"
				min="0"
				max="1"
				step="0.01"
				defaultValue={0.8}
				onChange={onChange}
			/>
		</div>
	);
}