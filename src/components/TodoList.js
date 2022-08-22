import { memo } from 'react'

const TodoList = ({ todo, addTodo }) => {
    console.log('TodoList rendered');
    return (
        <>
            <h1>Todo List</h1>
            {todo.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
            <button type="button" onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(TodoList)