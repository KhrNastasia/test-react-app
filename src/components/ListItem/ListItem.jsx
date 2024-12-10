import Button from '../Button/Button'
import classes from './ListItem.module.css'

export default function ListItem(props) {
	return (
		<div className={classes.div}>
			<li className={classes.li}>{props.item}</li>
			<Button className={classes.button} id={props.item} onClick={props.del}>
				Удалить
			</Button>
		</div>
	)
}
