import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import List from './components/List/List'

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
			<List />

			<Button
				isActive={content === 'button_1'}
				onClick={() => onClick('button_1')}
			>
				Нажми на меня
			</Button>

			<Button
				isActive={content === 'button_2'}
				onClick={() => onClick('button_2')}
			>
				Не нажимай
			</Button>

			<Button
				isActive={content === 'button_3'}
				onClick={() => onClick('button_3')}
			>
				Клик
			</Button>

			<p>{content}</p>

			{/* <p>Сейчас время: {time.toLocaleTimeString()}</p> */}
		</div>
	)
}

export default App
