export const Button = ({ size, color, text, ...props }) => {
	return (
		<button style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}} {...props}>{text}</button>
	);
}

export const DangerButton = props => {
	return (
		<Button {...props} color="red" />
	);
}

export const BigSuccessButton = props => {
	return (
		<Button {...props} size="large" color="green" />
	);
}