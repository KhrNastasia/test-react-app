// import Modal from 'react-modal'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from './ModelForm.module.css'

export default function ModelForm(props) {
	let state = props.state

	const switchModelForm = () => {
		props.setState(!state)
	}

	const value = props.arr[props.id]

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
					onChange={props.onChange}
				/>
				<Button className={classes.button}>Редактировать</Button>
			</div>
		</div>
	)

	return <div>{modalContent}</div>
}
