import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
	

function App() {
	return (
		<UserLoader userId = '123'>
			<UserInfo />
		</UserLoader>
	);
}

export default App;
