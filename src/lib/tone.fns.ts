import {
	AMSynth,
	FMSynth,
	MembraneSynth,
	MetalSynth,
	MonoSynth,
	PolySynth,
	Synth,
} from 'tone';
import { Frequency } from 'tone/build/esm/core/type/Units';

const synth = new PolySynth(Synth).toDestination();
const fmSynth = new PolySynth(FMSynth).toDestination();
const amSynth = new PolySynth(AMSynth).toDestination();
const monoSynth = new PolySynth(MonoSynth).toDestination();
const membraneSynth = new PolySynth(MembraneSynth).toDestination();
const metalSynth = new PolySynth(MetalSynth).toDestination();

const instrument = { synth, noteLength: '4n', velocity: 1 };
// const instrument = { synth: fmSynth, noteLength: '4n', velocity: 0.8 };
// const instrument = { synth: amSynth, noteLength: '4n', velocity: 0.8 };
// const instrument = { synth: monoSynth, noteLength: '4n', velocity: 0.5 };
// const instrument = { synth: membraneSynth, noteLength: '4n', velocity: 0.5 };
// const instrument = { synth: metalSynth, noteLength: '4n', velocity: 0.2 };

export function playNote(note: Frequency) {
	const { synth, noteLength, velocity = 1 } = instrument;

	synth.triggerAttackRelease(note, noteLength, undefined, velocity);
}

export function isFlat(note: Frequency) {
	return note.toString().slice(1, -1) === 'b';
}
