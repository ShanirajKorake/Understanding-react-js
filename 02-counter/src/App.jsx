import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(0)

  const addVal= () =>{
    count = count+1
    setCount(count)
    console.log(`counter : ${count}`)
  }

  const remVal = () =>{
    count = count-1
    setCount(count)
    console.log(`counter : ${count}`)
  }
  return (
    <>
      <h1>ShaniRaj</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addVal}>Add value : {count}</button>
      <button onClick={remVal}>Remove value : {count}</button>
      <p>Footer : : {count}</p>
    </>
  )
}

export default App
