import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<>
		<ResourceLoader resourceUrl="/users/123" resourceName="user">
			<UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/1234" resourceName="product">
			<ProductInfo />
		</ResourceLoader>
		</>
	);
}

export default App;
