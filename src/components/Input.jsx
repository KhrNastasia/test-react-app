function Input({ value, onChange, onClick, ...props }) {
	return (
		<input
			type={props.type}
			value={value}
			onChange={onChange}
			onClick={onClick}
		/>
	)
}

export default Input
