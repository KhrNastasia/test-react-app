import classes from './Button.module.css'

export default function Button({ children, onTouch, isActive, ...props }) {
	return (
		<button
			{...props}
			onClick={onTouch}
			className={isActive ? classes.active : classes.button}
		>
			{children}
		</button>
	)
}
