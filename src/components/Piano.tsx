import { useEffect, useRef } from 'react';
import { NOTES } from '../lib/constants';
import PianoKey from './PianoKey';

export default function Piano() {
	const keyboardRef = useRef<HTMLDivElement>(null);

	function handleScroll(e) {
		// const { scrollLeft, scrollWidth, scrollIntoView } = keyboardRef.current!;
	}

	useEffect(() => {
		if (keyboardRef) {
			keyboardRef.current?.scrollTo({
				left: keyboardRef.current?.scrollWidth / 3,
			});
		}
	}, []);

	return (
		<div ref={keyboardRef} className="piano" onScroll={handleScroll}>
			<div className="keyboard">
				{NOTES.map(note => (
					<PianoKey key={note} note={note} />
				))}
			</div>
		</div>
	);
}
