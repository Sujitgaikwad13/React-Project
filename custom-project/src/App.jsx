import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(7)
  
  // let counter = 7;

  const addValue = () => {
    console.log("Clicked", counter)
    counter = counter + 1
    if (counter>=21) {
      return counter=0
    }
    setCounter(counter)
  }
  const removeValue = () => {
    console.log("Clicked", counter)
    counter = counter - 1
    if (counter<0) {
      return counter=0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Sujit</h1>
      <h2> Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
