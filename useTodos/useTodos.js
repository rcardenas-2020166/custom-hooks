
import { useEffect, useReducer } from 'react';

//JS//
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () =>
{
   return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => 
{
    const [ todos, dispatch ] = useReducer( todoReducer , [], init );

    useEffect(() => 
    {
        localStorage.setItem('todos', JSON.stringify( todos ) || [])
    }, [todos])
    

    const handleNewTodo = ( todo ) => 
    {
        const action = 
        {
            type : '[TODO] add ToDo',
            payload : todo
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => 
    {
        const action = 
        {
            type : '[TODO] remove ToDo',
            payload : id
        }
        dispatch( action );
    }

    const handleToggleTodo = ( id ) => 
    {
        const action = 
        {
            type : '[TODO] toggle ToDo',
            payload : id
        }
        dispatch( action );
    }

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
