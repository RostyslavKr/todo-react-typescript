import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useTodo } from '../../utils/context';

interface ITaskItemProps {
  todo: Todo,
  
}
export const Task: React.FC<ITaskItemProps> = ({ todo }) => {
  const { checkTodo, deleteTodo } = useTodo();
  return (
    <li key={todo.id} className={css.listItem}>
      <div className={css.wrapper}>
        <input
        type="checkbox"
        onClick={() => checkTodo(todo.id)}
        className={css.checkbox}
        
      />
      <p className={css.text}>{todo.text}</p>
        <button onClick={() =>deleteTodo(todo.id)} className={css.btn}>
          
        <MdClose size={24} />
      </button></div>
      
    </li>
  );
};
