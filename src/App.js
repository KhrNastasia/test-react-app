import { React, useState } from 'react'
import './App.css'
import List from './components/List/List'
import ModelForm from './components/ModelForm/ModelForm'

function App() {
	const [state, setState] = useState(false)

	const [id, setId] = useState('')

	const [num, setNum] = useState('')

	const [arr, setArr] = useState([])

	function editItemHandler(id) {
		setId(id)
	}

	function handleChange(event) {
		setNum(event.target.value)
	}

	return (
		<div className='wrapper'>
			<List
				state={state}
				setState={setState}
				onEdit={editItemHandler}
				onChange={handleChange}
				num={num}
				setNum={setNum}
				arr={arr}
				setArr={setArr}
			/>
			<ModelForm
				state={state}
				setState={setState}
				id={id}
				onChange={handleChange}
				num={num}
				setNum={setNum}
				arr={arr}
				setArr={setArr}
			/>
		</div>
	)
}

export default App
