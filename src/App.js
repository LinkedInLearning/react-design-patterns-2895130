import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<>
		<UserLoader userId="123">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="234">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="345">
			<UserInfo />
		</UserLoader>
		</>
	);
}

export default App;
