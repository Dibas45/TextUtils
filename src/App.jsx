import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
   const UpperCase = () => {
     setText(text.toUpperCase())
   }

   const LowerCase = () => {
     setText(text.toLowerCase())
   }

   const ResetTask = () => {
     setText('')
   }

   const Copy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
    
  
   }
  return (
    <div className="bg-slate-400 min-h-screen p-10 text-white">
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-slate-800">
      <h1 className="text-center text-4xl font-bold mb-6">
        A Text Utility to Customize Your Text
      </h1>
      <textarea
        className="w-full h-40 p-4 rounded-lg border border-gray-300 focus:outline-none  text-slate-800"
        placeholder="Enter Your Text Here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-2 transition"
          onClick={UpperCase}
        >
          Uppercase
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-2 transition"
          onClick={LowerCase}
        >
          Lowercase
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-2 transition"
          onClick={ResetTask}
        >
          Reset Text
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-2 transition"
          onClick={Copy}
        >
          Copy to Clipboard
        </button>
      </div>
      <div className="mt-8 bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Text Statistics</h2>
        <p>Word Count: {text.split(/\s+/).filter((word) => word).length}</p>
        <p>Character Count: {text.length}</p>
        <p>Estimated Reading Time: {Math.ceil(text.split(/\s+/).filter((word) => word).length / 200)} min</p>
      </div>
    </div>
  </div>
  
  )
}

export default App