import React, { useState, useEffect } from 'react';

const EffectCounter = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // handle side effect
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        console.log(`Counter 2 - ${count2}`);
    } , [count2]);

    return (
        <div>
            <h1>Counter 1</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h1>Counter 2</h1>
            <p>You clicked {count2} times</p>
            <button onClick={() => setCount2(count2 + 1)}>
                Click me
            </button>
        </div>
    );
}

export default EffectCounter;
