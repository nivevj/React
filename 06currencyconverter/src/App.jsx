import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import currencyinfo from './hooks/currencyinfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const[convertamount, setconvertamount] = useState(0)
  
  const info = currencyinfo(from)

  console.log(info)

  const options = Object.keys(info)

  const convert = ()=>{
    setconvertamount(amount*info[to])
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertamount)
    setconvertamount(amount)
    
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/5277966/pexels-photo-5277966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <div className=''>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              currencyChange={(currency)=>setFrom(currency)}
              amountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className=''>
              <InputBox
              label="to"
              amount={convertamount}
              currencyOptions={options}
              amountDisabled
              currencyChange={(currency)=>setTo(currency)}
              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()} 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
