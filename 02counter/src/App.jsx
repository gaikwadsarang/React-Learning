import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 const [counter , setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    
    // counter = counter + 1
    // setCounter(counter)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
   <>
     <h1>Sarang</h1>
     <h2>Counter: {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}>remove value {counter}</button>
   </>
  )
}

export default App
