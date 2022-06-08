import { PolySynth, Synth, Time } from 'tone';
import { Frequency } from 'tone/build/esm/core/type/Units';

const synth = new PolySynth(Synth).toDestination();

export function playNote(note: Frequency) {
	const time = Time('8n').toSeconds();
	console.log({ time, note });

	synth.triggerAttackRelease(note, time);
}

export function isFlat(note: Frequency) {
	return note.toString().slice(1, -1) === 'b';
}
