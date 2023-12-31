import { useState } from 'react'

import './App.css'

function App() {

  const[counter,setCounter] = useState(0) //[variable,function]

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const subValue = ()=>{
    setCounter(counter-1)
  }

  const addTen = ()=>{
    /* 
    setCounter(counter+5)
    setCounter(counter+5)
    this doesn't work thus callbacks are done to avoid batching
    */
    setCounter((prevalue)=>prevalue+5)
    setCounter((prevalue)=>prevalue+5)
  }

  const subTen = ()=>{
    setCounter((prevalue)=>prevalue-10)
  }

  return (
    <>
      <h1>React App with Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add 1</button>{}
      <button
        onClick={subValue}
      >Remove 1</button>{}
      <button
        onClick={addTen}
      >Add 10</button>
      <button
        onClick={subTen}
      >Remove 10</button>
    </>
  )
}

export default App
