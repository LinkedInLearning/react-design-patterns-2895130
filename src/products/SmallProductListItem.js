export const SmallProductListItem = ({ product }) => {
	const { name, price } = product;

	return (
		<h3>{name} - {price}</h3>
	);
}