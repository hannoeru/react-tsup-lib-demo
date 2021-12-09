import React, { FC, useState } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count => count + 1)}>
      count is: {count}
    </button>
  )
}

export default Counter
