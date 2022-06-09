import { PointerEvent, useCallback, useState } from 'react';
import { isFlat, playNote } from '../lib/tone.fns';

interface PianoKeyProps {
	note: string;
}

const PianoKey = ({ note }: PianoKeyProps) => {
	const isBemol = isFlat(note);
	const [isActive, setIsActive] = useState(false);

	const handlePlayNote = useCallback(note => {
		setIsActive(true);
		playNote(note);
		setTimeout(() => setIsActive(false), 500);
	}, []);

	function handleKeyPressed(e: PointerEvent<HTMLDivElement>) {
		// console.log(e);
		handlePlayNote(note);
	}

	function handleKeySlurredAcross(e: PointerEvent<HTMLDivElement>) {
		if (e.buttons !== 1) return;
		// console.log(e);
		handlePlayNote(note);
	}

	return (
		<div
			className={`${note} ${isBemol ? 'black' : 'white'} ${
				isActive ? 'active' : ''
			} piano-key`}
			onPointerDown={handleKeyPressed}
			onPointerOver={handleKeySlurredAcross}
		></div>
	);
};
export default PianoKey;
