function Input({ num, onChange, onClick, ...props }) {
	return (
		<input
			type={props.type}
			value={num}
			onChange={onChange}
			onClick={onClick}
		/>
	)
}

export default Input
