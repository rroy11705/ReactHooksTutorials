import React, { useState, useEffect, useRef } from 'react'

const RefExample = () => {
    // const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);    // useRef is a hook that lets you store a reference to a DOM element in a component.

    useEffect(() => {
        // setCount(count + 1);
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div>{count.current}</div>
        </>
    )
}

export default RefExample