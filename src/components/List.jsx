function List(props) {
	return (
		<div>
			<ul>
				{props.arr.map(item => {
					return <li key={item}>{item}</li>
				})}
			</ul>
		</div>
	)
}

export default List
