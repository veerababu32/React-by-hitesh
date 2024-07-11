import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(32);

  // In interview they will what will be the result it'll give 33 only because
  // It's executes first one by batching method cause remaining all are same.
  // const addVal = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }
  // but interviewer asks you need add 4 on one click at that time wee need to use callback function

  const addVal = () => {
    setCount((preVal) => preVal + 1);
    setCount((preVal) => preVal + 1);
    setCount((preVal) => preVal + 1);
    setCount((preVal) => preVal + 1);
  }

  const removeVal = () => {
    setCount(count - 1);
  }

  // const removeVal = () => {
  //   setCount((preVal) => preVal - 1);
  //   setCount((preVal) => preVal - 1);
  //   setCount((preVal) => preVal - 1);
  //   setCount((preVal) => preVal - 1);
  // }

  return (
    <>
      <h1>Veer Vite + React Counter</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={addVal}>Add Value</button> {" "}
      <button onClick={removeVal}>Remove Value</button>
      <p>Result: {count}</p>
    </>
  )
}

export default App
