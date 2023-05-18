import { useTodo } from '../../utils/context';
import css from './TaskCounter.module.css';
// interface ITaskCounterProps {
//     todosCounter: number,
// }
export const TaskCounter:React.FC = () => {
  const {todos} = useTodo()
  return (
    <div className={css.wrapperCounterTasks}>
      <p className={css.text}>You have <b>{todos.length}</b> task(s) </p>
      
    </div>
  );
};
