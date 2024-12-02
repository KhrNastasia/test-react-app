import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input'
import List from './components/List'
import { arr } from './data'

function App() {
	const [content, setContent] = useState('Нажми на кнопку')
	// const [time, setTime] = useState(new Date())

	function onClick(type) {
		console.log('Clicked ' + type)
		setContent(type)
	}

	// setInterval(() => {
	// 	setTime(new Date())
	// }, 10)

	return (
		<div>
			<List arr={arr} />
			<Input />
			<Button onTouch={() => onClick('button_1')}>Нажми на меня</Button>
			<Button onTouch={() => onClick('button_2')}>Не нажимай</Button>
			<Button onTouch={() => onClick('button_3')}>Клик</Button>
			<p>{content}</p>
			{/* <p>Сейчас время: {time}</p> */}
		</div>
	)
}

export default App
