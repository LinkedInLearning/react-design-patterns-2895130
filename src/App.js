import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
	return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
}

const RightHandComponent = () => {
	return <p style={{ backgroundColor: 'red' }}>Right!</p>;
}

function App() {
	return (
		<SplitScreen
			left={LeftHandComponent}
			right={RightHandComponent} />
	);
}

export default App;
