import React, { useState, useEffect, useRef } from 'react'

const RefExample = () => {
    // const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        // setCount(count + 1);
        // console.log(count.current);
        count.current = count.current + 1;
        console.log(inputRef.current.value);
    });

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input type="text" value={inputValue} ref={inputRef} onChange={(e) => setInputValue(e.target.value)} />
            <button type="button" onClick={focusInput}>Focus Input</button>
            <div>{count.current}</div>
        </>
    );
}

export default RefExample
