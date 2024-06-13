import { useCalculate } from "./hooks/useCalculate"

const App = () => {

  const { addToDisplay, calculate, clearDisplay, display } = useCalculate()

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="mb-4 text-right text-2xl font-mono">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} className="p-4 bg-gray-300" onClick={() => addToDisplay(item)}>{item}</button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button key={item} className="p-4 bg-gray-300" onClick={() => addToDisplay(item)}>{item}</button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button key={item} className="p-4 bg-gray-300" onClick={() => addToDisplay(item)}>{item}</button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button key={item} className="p-4 bg-gray-300" onClick={item === '=' ? calculate : () => addToDisplay(item)}>{item}</button>
          ))}
          <button className="col-span-4 p-4 bg-red-500 text-white" onClick={clearDisplay}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default App