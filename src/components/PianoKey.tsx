import { useState } from 'react';
import { isFlat, playNote } from '../lib/tone.fns';

interface PianoKeyProps {
	note: string;
}

const PianoKey = ({ note }: PianoKeyProps) => {
	const isBemol = isFlat(note);
	const [isActive, setIsActive] = useState(false);

	function handleKeyPressed(e) {
		setIsActive(true);
		playNote(note);
		setTimeout(() => setIsActive(false), 500);
	}

	return (
		<div
			className={`${note} ${isBemol ? 'black' : 'white'} ${
				isActive ? 'active' : ''
			} piano-key`}
			onPointerDown={handleKeyPressed}
		></div>
	);
};
export default PianoKey;
