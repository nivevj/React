import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const value = [1,2,3,4,5,6,,7,8,9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite and Tailwind</h1>
      <Card username="AAA" job="Engineer" array={["B.E.","CSE"]}/>
      <Card array={value} /> {/* here we can pass any parameter but all must be in object format */}
      <Card array={[9,8,7,6,5,4,3,2,1]}/>
    </>
  )
}

export default App
