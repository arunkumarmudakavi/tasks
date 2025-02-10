import React, { useState } from 'react'

const Task = () => {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count + 1);
    }
    const Decrease = () => {
        if (count > 0) 
            setCount(count - 1)
    }

  return (
    <>
      <h1>Task 1</h1>
      <div>
        <section>{count}</section>
        <button onClick={() => Increase()}>Increase + 1</button>
        <button onClick={() => Decrease()}>Increase - 1</button>
      </div>
    </>
  )
}

export {Task}