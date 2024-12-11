import { useState } from 'react';
import ListForm from '../ListForm/ListForm';
import ListItem from '../ListItem/ListItem';
import classes from './List.module.css';

function List() {
  const [num, setNum] = useState('');

  const [arr, setArr] = useState([]);

  function handleChange(event) {
    setNum(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (num) {
      setArr((arr) => [...arr, num]);
      setNum('');
    }
  }

  const removeItemHandler = (index) => {
    console.log({ index });

    setArr((prev) =>
      prev.filter((a, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div className={classes.div}>
      <ul>
        {arr.map((item, key) => {
          return (
            <ListItem
              id={key}
              item={item}
              key={key}
              onRemove={removeItemHandler}
            />
          );
        })}
      </ul>

      <ListForm num={num} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default List;
