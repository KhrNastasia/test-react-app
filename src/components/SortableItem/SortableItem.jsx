import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'
import Button from '../Button/Button'
import classes from './SortableItem.module.css'

const SortableItem = props => {
	const { item, onRemove, id, onEdit, state, setState, style } = props
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: props.children })

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			// className={styles.item}
			className={classes.div}
			style={{
				transform: CSS.Transform.toString(transform),
				transition: transition,
				style,
			}}
		>
			<li className={classes.li}>{item}</li>
			<div>
				<Button
					className={classes.button}
					id={id}
					onClick={e => {
						onEdit(id)
						setState(!state)
					}}
				>
					Редактировать
				</Button>
				<Button className={classes.button} id={id} onClick={e => onRemove(id)}>
					Удалить
				</Button>
			</div>
		</div>
	)
}

export default SortableItem
