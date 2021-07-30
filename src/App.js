import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
	return (
		<UserInfoForm />
	);
}

export default App;
