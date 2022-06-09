import { useEffect, useRef, useState } from 'react';
import { NOTES } from '../lib/constants';
import MiniPianoKey from './MiniPianoKey';

export default function MiniKeyboard() {
	const [brushX, setBrushX] = useState(0);
	const [brushWidth, setBrushWidth] = useState(0);
	const [keyboardWidth, setKeyboardWidth] = useState(0);
	const [pointerOffset, setPointerOffset] = useState<number | null>(null);

	const containerRef = useRef<HTMLDivElement>(null);
	const brushRef = useRef<HTMLDivElement>(null);

	// function handleDrag(e: PointerEvent<HTMLDivElement>) {
	function handleDrag(e) {
		// ignore if mouse button is not being pressed
		if (e.buttons !== 1) return;

		const { clientX } = e;

		// if (pointerOffset === null)
		setPointerOffset(clientX);

		if (pointerOffset) {
			const diff = clientX - pointerOffset;
			setBrushX(brX => {
				const nextPos = brX + diff;

				// out of bounds
				if (nextPos < 1 || nextPos > keyboardWidth - brushWidth) {
					return brX;
				}

				return nextPos;
			});
		}
	}

	function handleDragCancel(e) {
		console.log('CANCEL', e);
		setPointerOffset(null);
	}
	function handleDragLeave(e) {
		// ignore if mouse button is not being pressed
		if (e.buttons !== 1) return;

		console.log('LEAVE', e);
		setPointerOffset(null);
	}

	useEffect(() => {
		const { width: containerWidth } =
			containerRef.current?.getBoundingClientRect()!;
		const { x: brushPosX, width: brushRectWidth } =
			brushRef.current?.getBoundingClientRect()!;

		setBrushX(brushPosX);
		setBrushWidth(brushRectWidth);
		setKeyboardWidth(containerWidth);
	}, []);

	useEffect(() => {
		console.log('pointerOffset', pointerOffset);
	}, [pointerOffset]);

	return (
		<div ref={containerRef} className="mini-keyboard-container">
			<div className="mini-keyboard">
				{NOTES.map(note => (
					<MiniPianoKey key={note} note={note} />
				))}
			</div>

			<div
				ref={brushRef}
				style={{ left: brushX }}
				className="brush"
				// onDrag={handleDrag}
				// onDragOver={handleDrag}
				// onDragStart={handleDrag}
				onPointerMove={handleDrag}
				onPointerLeave={handleDragLeave}
				// onPointerMoveCapture={() => console.log('HEEEEY')}
				// onPointerCancel={handleDragCancel}
				onPointerUp={handleDragCancel}
				// onClick={handleDrag}
				// onPointerDown={handleDrag}
				// onPointerMoveCapture=
				// onPointerOver={handleDrag}
			></div>
		</div>
	);
}

// setar --brush-x
// descobrir o x máximo pra --brush-x
