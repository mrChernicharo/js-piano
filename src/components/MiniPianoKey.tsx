import { isFlat } from '../lib/tone.fns';

interface Props {
	note: string;
}

export default function MiniPianoKey({ note }: Props) {
	const isBemol = isFlat(note);

	return (
		<div
			className={`${note} ${isBemol ? 'black' : 'white'} mini-piano-key`}
		></div>
	);
}
