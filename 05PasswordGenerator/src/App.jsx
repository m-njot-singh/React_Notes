import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //01 : USE USESTATE FOR ALL DEPENDECIES

  const [length ,setLength] = useState(8);

  const [numberAllowed , setNumberAllowed] = useState(false);

  const [characterAllowed , setCharacterAllowed ] = useState(false);

  const [password , setPassword] = useState("");


  //02 :  SET PASSWORD DEPENDING ON DEPENDIES

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num="0123456789"
    let char="~!@$%^&*()_+{}|:<>?/"

    
    if(numberAllowed) str += num 
    if(characterAllowed) str += char

    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random()*(str.length));
      console.log(randomNum);
      pass += str.charAt(randomNum);
      
    }
    setPassword(pass)

  } , [length , numberAllowed , characterAllowed , setPassword])

  //03 : useEffect hook to show password in password field

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed , characterAllowed , passwordGenerator])

  //04 : Use Ref hook

  const passwordRef = useRef()

  //05 : copyPasswordToClip function

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

        {/*Text passwordGenerator */}

        <h1 className='text-white text-center my-3'>Password generator</h1>

            {/* password input box */}

            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly  ref={passwordRef}/>
              <button onClick={copyPasswordToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
            </div>

          
            <div className='flex text-sm gap-x-2'>

            {/* length button */}

            <div className='flex items-center gap-x-1'>
              <input  type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
              <label>Length: ({length})</label>
            </div>
 
            {/* Number checkbox */}

            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={numberAllowed}  id="numberInput" onChange={()=>{setNumberAllowed((prev)=> !prev);}}/>
              <label htmlFor="numberInput">Numbers</label>
            </div>

            {/* character checkbox */}
            
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={characterAllowed}  id="characterInput"  onChange={()=>{setCharacterAllowed((prev)=>!prev);}}/>
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
