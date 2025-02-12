"use client"

import { useState } from "react"

export default function Page() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount((prev) => prev + 1)
    console.log("Button clicked!")
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Aizubrandhall LP2</h1>
      <p className="mb-4">Click count: {clickCount}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Click me!
      </button>
    </main>
  )
}

