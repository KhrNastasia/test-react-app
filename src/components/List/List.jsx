import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input'
import Label from '../Label/Label'
import LiElem from '../LiElem/LiElem'
import classes from './List.module.css'

function List() {
	const [num, setNum] = useState('')

	const [arr, setArr] = useState([])

	return (
		<div>
			<ul>
				{arr.map(item => {
					return <LiElem item={item} key={item} />
				})}
			</ul>

			<form
				className={classes.form}
				onSubmit={e => {
					e.preventDefault()
				}}
			>
				<Label htmlFor='num'>Введите число</Label>
				<Input
					type='text'
					value={num}
					onChange={event => setNum(event.target.value)}
				/>
				<Button
					onClick={() => {
						setArr(arr => [...arr, num])
						setNum('')
						console.log(num)
					}}
				>
					Отправить
				</Button>
			</form>
		</div>
	)
}

export default List
