import { useEffect, useRef, useState } from 'react';
import { NOTES } from '../lib/constants';
import Brush from './Brush';
import MiniPianoKey from './MiniPianoKey';

export default function MiniKeyboard() {
	const [keyboardWidth, setKeyboardWidth] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const { width: containerWidth } =
			containerRef.current?.getBoundingClientRect()!;

		setKeyboardWidth(containerWidth);
	}, []);

	return (
		<div ref={containerRef} className="mini-keyboard-container">
			<div className="mini-keyboard">
				{NOTES.map(note => (
					<MiniPianoKey key={note} note={note} />
				))}
			</div>

			<Brush keyboardWidth={keyboardWidth} />
		</div>
	);
}

// setar --brush-x
// descobrir o x máximo pra --brush-x
