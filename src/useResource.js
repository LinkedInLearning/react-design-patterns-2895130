import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResource = resourceUrl => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await axios.get(resourceUrl);
			setResource(response.data);
		})();
	}, [resourceUrl]);

	return resource;
}
