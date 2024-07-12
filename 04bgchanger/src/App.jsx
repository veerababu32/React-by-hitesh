import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  const changeColor = (color) => {
    setColor(color);
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className="text-white p-5 text-center text-4xl">BGchanger using vite + tailwind.</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-sky-500 px-3 py-2 rounded-2xl">
          <button
           className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-500"
           onClick={() => changeColor("red")}
          >Red</button>
          <button
           className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-blue-500"
           onClick={() => setColor("blue")}
          >Blue</button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-500"
            onClick={() => setColor("green")}
          >Green</button>
          <button
           className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-yellow-500"
           onClick={() => setColor("yellow")}
          >Yellow</button>
          <button
           className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-violet-500"
           onClick={() => setColor("violet")}
          >Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
