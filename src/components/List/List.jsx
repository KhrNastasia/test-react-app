import { useState } from 'react'
import classes from './List.module.css'

function List() {
	const [num, setNum] = useState('')

	const [arr, setArr] = useState(['1', '2', '3', '4', '5', '6'])

	function handleSubmit(event) {
		event.preventDefault()
	}

	function handleClick(e) {
		setArr(arr => [...arr, num])
		setNum('')
	}

	return (
		<div>
			<ul>
				{arr.map(item => {
					return <li key={item}>{item}</li>
				})}
			</ul>

			<form className={classes.form} onSubmit={handleSubmit}>
				<label htmlFor='num'>
					Введите число
					<input
						type='text'
						id='num'
						value={num}
						onChange={event => setNum(event.target.value)}
					/>
				</label>
				<input
					type='submit'
					name=''
					id=''
					value='Отправить'
					onClick={handleClick}
				/>
			</form>
		</div>
	)
}

export default List
