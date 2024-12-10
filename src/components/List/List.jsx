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
		setArr(arr => [...arr, num])
		setNum('')
	}

	function del(id) {
		console.log('sddfsd')
	}

	return (
		<div className={classes.div}>
			<ul>
				{arr.map(item => {
					return <ListItem item={item} key={item} onClick={del} />
				})}
			</ul>
			<ListForm num={num} onChange={handleChange} onSubmit={handleSubmit} />
		</div>
	)
}

export default List
