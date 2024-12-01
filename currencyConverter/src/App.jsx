import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("USD")
  const [to,setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency Converter</h1>
    </>
  )
}

export default App
