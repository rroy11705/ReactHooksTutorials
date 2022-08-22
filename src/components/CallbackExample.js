import React, { useState, useCallback } from 'react'
import TodoList from './TodoList'

const CallbackExample = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const increment = () => {
        setCount(count + 1);
    }

    // useCallback hook returns a memorized callback function
    const addTodo = useCallback(() => {
        setTodo((prevTodo) => [...prevTodo, "New Todo"]);
    }, [setTodo]);

    return (
        <>
            <TodoList todo={todo} addTodo={addTodo} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', paddingTop: '32px' }}>
                Count: {count} {' '}
                <button type="button" onClick={increment}>+</button>
            </div>
        </>
    )
}

export default CallbackExample