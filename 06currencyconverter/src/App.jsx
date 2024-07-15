import { useState } from "react"
import { InputBox } from "./components/index"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState('')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    // console.log(currencyInfo[to]);
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url(https://images.pexels.com/photos/164637/pexels-photo-164637.jpeg?auto=compress&cs=tinysrgb&w=600)`}}
    >
      <div className="w-full">
        <h1 className="text-3xl text-white text-center mb-2 italic underline">Currency Converter</h1>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-2'>
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
