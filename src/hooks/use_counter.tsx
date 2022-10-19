import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(x => x + 1)
  const decrement = () => setCount(x => x - 1)
  const reset = () => setCount(initialValue)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}

export default useCounter