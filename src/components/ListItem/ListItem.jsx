import Button from '../Button/Button';
import classes from './ListItem.module.css';

export default function ListItem(props) {
  const { item, onRemove, id } = props;

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
          id={id}
          onClick={(e) => onRemove(id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
