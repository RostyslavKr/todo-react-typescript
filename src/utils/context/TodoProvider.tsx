import React from 'react';
import {nanoid} from 'nanoid';
import { TodoContext } from './TodoContext';
const DEFAULT_TODO_LIST = [
  
    { id: '0', text: 'Learn HTML and CSS', completed: true },
    { id: '1', text: 'Get good at JavaScript', completed: true },
    { id: '2', text: 'Master React', completed: false },
    { id: '3', text: 'Discover Redux', completed: false },
    { id: '4', text: 'Build amazing apps', completed: false },
  
];
interface ITodoProviderProps{
    children: React.ReactNode
}

export const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
    /* eslint-disable */
    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
   console.log(nanoid());
   console.log(todos, setTodos);
   const addTodo = ({ text }: Omit<Todo, 'completed' | 'id'>) => {
     setTodos([...todos, { id: nanoid(), text, completed: false }]);
   } 
   const checkTodo = (id: Todo['id']) => {
     setTodos(todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),)
     
   }
   const deleteTodo = (id: Todo['id']) => {
     setTodos(todos.filter(todo => todo.id !== id))
    }
    const value = React.useMemo(() => ({
        todos, addTodo, checkTodo, deleteTodo
    }), [todos, addTodo, checkTodo, deleteTodo]);

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}