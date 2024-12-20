import ListForm from '../ListForm/ListForm'
import ListItem from '../ListItem/ListItem'
import classes from './List.module.css'

function List(props) {
	let arr = props.arr

	function handleSubmit(e) {
		e.preventDefault()
		if (props.num) {
			props.setArr(arr => [...arr, props.num])
			props.setNum('')
		}
	}

	function removeItemHandler(id) {
		props.setArr(arr =>
			arr.filter((a, i) => {
				return i !== id
			})
		)
	}

	return (
		<div className={classes.div}>
			<ListForm
				num={props.num}
				onChange={props.onChange}
				onSubmit={handleSubmit}
			/>
			<ul>
				{arr.map((item, key) => {
					return (
						<ListItem
							id={key}
							item={item}
							key={key}
							state={props.state}
							setState={props.setState}
							onRemove={removeItemHandler}
							onEdit={props.onEdit}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export default List
