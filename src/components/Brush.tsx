import { useEffect, useRef, useState } from 'react';

interface Props {
	keyboardWidth: number;
}

export default function Brush({ keyboardWidth }: Props) {
	const [brushX, setBrushX] = useState(0);
	const [brushWidth, setBrushWidth] = useState(0);
	const [pointerOffset, setPointerOffset] = useState<number | null>(null);

	const brushRef = useRef<HTMLDivElement>(null);

	// function handleDrag(e: PointerEvent<HTMLDivElement>) {
	function handleDrag(e) {
		// ignore if mouse button is not being pressed
		if (e.buttons !== 1) return;

		const { clientX } = e;

		setPointerOffset(clientX);

		if (pointerOffset) {
			const diff = clientX - pointerOffset;

			setBrushX(brX => {
				const nextPos = brX + diff;

				// out of bounds
				if (nextPos < 1 || nextPos >= keyboardWidth - brushWidth) {
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
		const { x: brushPosX, width: brushRectWidth } =
			brushRef.current?.getBoundingClientRect()!;

		setBrushX(brushPosX);
		setBrushWidth(brushRectWidth);

		// console.log('res', keyboardWidth / brushRectWidth);
	}, []);

	return (
		<div
			ref={brushRef}
			style={{ left: brushX }}
			className="brush"
			onPointerMove={handleDrag}
			onPointerLeave={handleDragLeave}
			onPointerUp={handleDragCancel}
		></div>
	);
}
