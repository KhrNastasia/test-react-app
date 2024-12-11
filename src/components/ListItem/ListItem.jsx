import Button from '../Button/Button'
import classes from './ListItem.module.css'

export default function ListItem(props) {
	const {item, key, onClick} = props;

	
	return (
		<div className={classes.div}>
			<li className={classes.li}>{item}</li>
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
					id={item}
					onClick={(e) => {
						e.stopPropagation();
						onClick(key)
					}}
				>
					Удалить
				</Button>
			</div>
		</div>
	)
}
