import { NOTES } from '../lib/constants';
import MiniPianoKey from './MiniPianoKey';

export default function MiniKeyboard() {
	return (
		<div className="mini-keyboard-container">
			<div className="brush"></div>
			<div className="mini-keyboard">
				{NOTES.map(note => (
					<MiniPianoKey key={note} note={note} />
				))}
			</div>
		</div>
	);
}
