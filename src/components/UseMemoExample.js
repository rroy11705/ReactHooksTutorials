import React, { useState, useCallback, useMemo } from 'react'
import TodoList from './TodoList'

const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);    
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

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
            {calculation}
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("calculating...");
    for (let i = 0; i < 1000000000; i++) num +=1;
    return num;
}

export default UseMemoExample