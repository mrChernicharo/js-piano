import MiniKeyboard from './components/MiniKeyboard';
import Piano from './components/Piano';
import './index.css';

function App() {
	return (
		<div className="App">
			<h1>JS Piano</h1>

			<Piano />

			<MiniKeyboard />
		</div>
	);
}

export default App;
