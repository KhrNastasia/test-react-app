import { React, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import List from './components/List/List'
import ModelForm from './components/ModelForm/ModelForm'

function App() {
	const [state, setState] = useState(false)

	const [id, setId] = useState('')

	const [arr, setArr] = useState([])

	const [num, setNum] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (num) {
			setArr(arr => [...arr, num])
			setNum('')
		}
	}

	function editItemHandler(id) {
		setId(id)
	}

	function handleChange(event) {
		setNum(event.target.value)
	}

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<List
					state={state}
					setState={setState}
					onEdit={editItemHandler}
					onChange={handleChange}
					num={num}
					setNum={setNum}
					arr={arr}
					setArr={setArr}
					onSubmit={handleSubmit}
				/>
				<ModelForm
					state={state}
					setState={setState}
					id={id}
					// onChange={handleChange}
					num={num}
					setNum={setNum}
					arr={arr}
					setArr={setArr}
					onSubmit={handleSubmit}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default App
