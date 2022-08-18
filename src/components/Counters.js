import React from 'react'
import Counter from './Counter'

const Counters = () => {
    const [count, setCount] = React.useState([0, 0, 0, 0, 0]);

    return (
        <>
            {count.map((count, index) => (
                <Counter key={index} count={count} index={index} setCount={setCount} />
            ))}
        </>
    )
}

export default Counters