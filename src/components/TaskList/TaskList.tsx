import { useTodo } from '../../utils/context';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };


export const TaskList:React.FC = () => {
  const { todos } = useTodo();

  return (
    <ul className={css.list}>
      {todos.map((todo) => ( <Task key={todo.id} todo={todo} /> ))}
        
      
    </ul>
  );
};
