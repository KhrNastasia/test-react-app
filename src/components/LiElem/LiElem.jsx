import Button from '../Button/Button'

export default function LiElem(props) {
	return (
		<div>
			<li key={props.key}>{props.item}</li>
			<Button id={props.item} onClick=''>
				Удалить
			</Button>
		</div>
	)
}
