function Input({ value, onChange, onClick, ...props }) {
	return (
		<input
			className={props.className}
			type={props.type}
			value={value}
			onChange={onChange}
			onClick={onClick}
		/>
	)
}

export default Input
