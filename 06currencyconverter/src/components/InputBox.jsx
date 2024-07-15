/* eslint-disable react/prop-types */
import { useId } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  currencyOptions = [],
  className = ""
}) {
  const id = useId()
  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex${className}`}>
      <div className="w-1/2">
        <label htmlFor={`Inp_${id}_${label}`} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={`Inp_${id}_${label}`}
          type="number"
          className="text-black/40 w-full bg-transparent p-2"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          required
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          id={`select${id}_${label}`}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none uppercase"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectedCurrency}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox