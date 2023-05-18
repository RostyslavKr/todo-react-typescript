import { useState } from "react";
import { Button } from '../Button/Button';
import css from './TaskForm.module.css';
import { useTodo } from "../../utils/context";


export const TaskForm: React.FC= () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState('');
  console.log(todo);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }
  const onClick = () => {
    addTodo({ text: todo });
    setTodo('');
  }
  return (
    <form className={css.form} >
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
        onChange={onChange}
        value={todo}
      />
      <Button  selected={false} onClick={onClick } type="button">Add task</Button>
    </form>
  );
};
