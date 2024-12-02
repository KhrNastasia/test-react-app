import './Button.css'

export default function Button({ children, onTouch }) {
	return (
		<button onClick={onTouch} className='button'>
			{children}
		</button>
	)
}
