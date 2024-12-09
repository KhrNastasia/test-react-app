import './App.css'
import List from './components/List/List'

function App() {
	// const [time, setTime] = useState(new Date())

	// setInterval(() => {
	// 	setTime(new Date())
	// }, 10)

	return (
		<div className='wrapper'>
			<List />

			{/* <p>Сейчас время: {time.toLocaleTimeString()}</p> */}
		</div>
	)
}

export default App
