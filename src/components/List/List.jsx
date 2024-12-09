import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input'
import Label from '../Label/Label'
import classes from './List.module.css'

function List() {
	const [num, setNum] = useState('')

	const [arr, setArr] = useState([])

	return (
		<div>
			<ul>
				{arr.map(item => {
					return <li key={item}>{item}</li>
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
				{/* <Input
					type='submit'
					value='Отправить'
					onClick={() => {
						setArr(arr => [...arr, num])
						setNum('')
						console.log(num)
					}}
				/> */}
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

			<p>{num}</p>
		</div>
	)
}

export default List
