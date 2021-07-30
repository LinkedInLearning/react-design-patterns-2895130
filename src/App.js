import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
	return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
	return <p style={{ backgroundColor: 'red' }}>{message}!</p>;
}

function App() {
	return (
		<SplitScreen leftWeight={1} rightWeight={3}>
			<LeftHandComponent name="Shaun" />
			<RightHandComponent message="Hello" />
		</SplitScreen>
	);
}

export default App;
