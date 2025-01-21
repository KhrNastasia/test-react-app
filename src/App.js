import { React, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import List from './components/List/List'
import ModelForm from './components/ModelForm/ModelForm'

function App() {
	const [modalOpened, setModalOpened] = useState(false)

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
					state={modalOpened}
					setState={setModalOpened}
					onEdit={editItemHandler}
					onChange={handleChange}
					num={num}
					setNum={setNum}
					arr={arr}
					setArr={setArr}
					onSubmit={handleSubmit}
				/>
				{modalOpened && (
					<ModelForm
						state={modalOpened}
						setState={setModalOpened}
						num={num}
						setNum={setNum}
						id={id}
						arr={arr}
						element={arr[id]}
						setArr={setArr}
						onSubmit={handleSubmit}
						onEdit={editItemHandler}
					/>
				)}
			</div>
			<Footer />
		</div>
	)
}

export default App
