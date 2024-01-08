import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter ] = useState(15)

const addValue = ()=>{
  if(counter<20){
    counter = counter+1;
  }
  
  setCounter(counter)
}

const removeValue = ()=>{   
  if(counter>0){
    counter = counter-1;
  }
  
  setCounter(counter)
}
  return (
    <>
      <div>
        <h2>Counter project</h2>
        <h3>Counter : {counter}</h3>
        <button onClick={addValue}>Add number</button>
        <button onClick={removeValue}>Remove number</button>

      </div>
    </>
  )
}

export default App
