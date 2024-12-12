import Button from '../Button/Button'
import classes from './ListItem.module.css'

export default function ListItem(props) {
	const { item, onRemove, id, onEdit } = props

	return (
		<div className={classes.div}>
			<li className={classes.li}>{item}</li>
			<div>
				<Button className={classes.button} id={id} onClick={e => onEdit(id)}>
					Редактировать
				</Button>
				<Button className={classes.button} id={id} onClick={e => onRemove(id)}>
					Удалить
				</Button>
			</div>
		</div>
	)
}
