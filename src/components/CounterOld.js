import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement1 = () => {
        setCount(count + 1)
    }

    const handleDecrement1 = () => {
        // if (count > 0) {
        //     setCount(count - 1)
        // }
        // count > 0 ? setCount(count - 1) : setCount(0)
        setCount(count > 0 ? count - 1 : 0)
    }

    const handleIncrement2 = () => {
        setCount2(count2 + 1)
    }

    const handleDecrement2 = () => {
        setCount2(count2 > 0 ? count2 - 1 : 0)
    }

    return (
        <>
            <h1>Counter 1</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button onClick={handleIncrement1}>+</button> 
                <span>{count}</span>
                <button disabled={count <= 0} onClick={handleDecrement1}>-</button> 
            </div>
            <h1>Counter 2</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button onClick={handleIncrement2}>+</button> 
                <span>{count2}</span>
                <button disabled={count2 <= 0} onClick={handleDecrement2}>-</button> 
            </div>
        </>
    )
}

export default Counter