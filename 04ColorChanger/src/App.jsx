import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color , setColor] = useState()

  return (
    <>
      <div className=" w-screen h-screen duration-200"
      style={{backgroundColor:color}}>
        <div classNam="fixed flex flex-wrap justify-centre bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          onClick={()=> setColor("Green")}
          >Green</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          onClick={()=> setColor("Red")}
          >Red</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          onClick={()=> setColor("purple")}
          >Purple</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          onClick={()=> setColor("Grey")}
          >Grey</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          onClick={()=> setColor("Orange")}
          >orange</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          onClick={()=> setColor("olive")}
          >Olive</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          onClick={()=> setColor("brown")}
          >brown</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
