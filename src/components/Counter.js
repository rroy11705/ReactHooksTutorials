import React from 'react'

const Counter = ({ index, count, setCount }) => {
    const resetValue = 0;

    const handleChange = (value) => {
        setCount(prevCount => [...prevCount.slice(0, index), prevCount[index] + value, ...prevCount.slice(index + 1)])
    }

    const handleReset = () => {
        setCount(prevCount => [...prevCount.slice(0, index), resetValue, ...prevCount.slice(index + 1)])
    }

    return (
        <>
            <h1>Counter {index + 1}</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button onClick={() => handleChange(5)}>+ 5</button>
                <button onClick={() => handleChange(1)}>+</button> 
                <span>{count}</span>
                <button disabled={count <= 0} onClick={() => handleChange(-1)}>-</button>
                <button disabled={count < 5} onClick={() => handleChange(-5)}>- 5</button>
                <button disabled={count === 0} onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default Counter