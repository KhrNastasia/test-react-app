import { useState } from 'react'
import ListForm from '../ListForm/ListForm'
import ListItem from '../ListItem/ListItem'
import classes from './List.module.css'

function List() {
	const [num, setNum] = useState('')

	const [arr, setArr] = useState([])

	function handleChange(event) {
		setNum(event.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (num) {
			setArr(arr => [...arr, num])
			setNum('')
		}
	}

	function removeItemHandler(id) {
		setArr(arr =>
			arr.filter((a, i) => {
				return i !== id
			})
		)
	}

	function editItemHandler(id) {
		console.log({ id })
	}

	return (
		<div className={classes.div}>
			<ListForm num={num} onChange={handleChange} onSubmit={handleSubmit} />
			<ul>
				{arr.map((item, key) => {
					return (
						<ListItem
							id={key}
							item={item}
							key={key}
							onRemove={removeItemHandler}
							onEdit={editItemHandler}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export default List
