import classes from './Button.module.css'

export default function Button({ children, onClick, isActive, ...props }) {
	return (
		<button
			{...props}
			onClick={onClick}
			className={isActive ? classes.active : classes.button}
		>
			{children}
		</button>
	)
}
