import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    let todos = useSelector(state => state);

    return (
        <div className="mt-4">

           {
               todos.map(todo => {
                   return <TodoItem todo={todo} key={todo.key} />
               })
           }
        </div>
    );
};

export default TodoList;