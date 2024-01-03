import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setlen] = useState(7)
  const [numallow, setnum] = useState(false)
  const [charallow, setchar] = useState(false)
  const [psw, setpsw] = useState('')

  const pswref= useRef(null) //refers to the field

  const copypsw= ()=>{
    window.navigator.clipboard.writeText(psw)
    pswref.current?.select()
  }

  const generatorpsw= useCallback(()=>{
    let res=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numallow) str+="0123456789"
    if(charallow) str+="!@#$%^&*()_+"

    for(let i=1;i<len;i++){
      const idx = Math.floor(Math.random()*str.length+1);
      res+=str.charAt(idx)
    }

    setpsw(res)

  },[len,numallow,charallow]) //use call back where dependenices dont change oftenly

  useEffect(()=>{
    generatorpsw()
  },[len,numallow,charallow]) //used when something changes

  return (
    <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-black-500'>
      
      <h1 className='text-white text-center'>Password generator</h1><br></br>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={psw}
        placeholder='Password'
        readOnly 
        className='outline-none w-full py-1 px-3' 
        ref={pswref}     
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypsw}>
          Copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={5}
        max={15}
        value={len}
        onChange={(e)=> setlen(e.target.value)}
        className='cursor-pointer'
        />
        <label htmlFor='length' className='text-white'>
          Length : {len}
        </label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={numallow}
        onChange={()=>{
          setnum((prev)=>!prev)
        }}
        />
        <label htmlFor='number' className='text-white'>
          Numbers
        </label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={charallow}
        onChange={()=>{
          setchar((prev)=>!prev)
        }}
        />
        <label htmlFor='char' className='text-white'>
           Character
        </label>
      </div>

     </div>
    </div>
  )
}

export default App
