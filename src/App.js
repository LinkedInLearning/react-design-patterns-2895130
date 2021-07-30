import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>
	);
}

export default App;
