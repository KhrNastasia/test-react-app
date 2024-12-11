import Button from '../Button/Button'
import classes from './ListItem.module.css'

export default function ListItem(props) {
	return (
		<div className={classes.div}>
			<li className={classes.li}>{props.item}</li>
			<div>
				{/* <Button
					className={classes.button}
					id={props.item}
					onClick={props.onClick}
				>
					Редактировать
				</Button> */}
				<Button
					className={classes.button}
					id={props.item}
					onClick={(e) => {
						e.stopPropagation();
						props.onClick(props.key)
					}}
				>
					Удалить
				</Button>
			</div>
		</div>
	)
}
