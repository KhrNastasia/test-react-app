// import Modal from 'react-modal'
import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from './ModelForm.module.css'

export default function ModelForm(props) {
	const [value, setValue] = useState(props.arr[props.id])

	console.log(props)
	console.log(props.arr[props.id])
	console.log(value)

	let state = props.state

	function handleChange(event) {
		setValue(event.target.value)
	}

	const switchModelForm = () => {
		props.setState(!state)
		setValue()
	}

	const modalContent = (
		<div className={state ? classes.back : classes.displ}>
			<div className={classes.model}>
				<div className={classes.head}>
					<h2>Отредактируйте элемент</h2>
					<p className={classes.close} onClick={switchModelForm}>
						x
					</p>
				</div>
				<Input
					className={classes.input}
					value={value}
					onChange={handleChange}
					onSubmit={props.onSubmit}
				/>
				<Button className={classes.button}>Редактировать</Button>
			</div>
		</div>
	)

	return <div>{modalContent}</div>
}
