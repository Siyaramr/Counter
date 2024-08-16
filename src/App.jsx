import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 20

  const [counter,setCounter] = useState(20)

  const Increase = () => {
      console.log("Clicked", counter);
      
      //counter = counter + 1
      setCounter(counter + 1)
    }
  
    const Decrease = () => {
    
      //counter = counter + 1
      setCounter(counter - 1)
    }

  return (
    
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={Increase}>Increase</button>
      <br/>
      <button onClick={Decrease}>Decrease</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
