import React from 'react';

export interface ITodoContextProps {
    todos: Todo[]
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    addTodo: ({ text }: Omit<Todo, 'completed' | 'id'>) => void;
}

export const TodoContext = React.createContext<ITodoContextProps>({
    /* eslint-disable */
    todos: [],
    checkTodo: () => { },
    deleteTodo: () => { },
    addTodo: () => {}
});