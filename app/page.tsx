"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1)
    // GA4のイベントを送信
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "button_click", {
        event_category: "engagement",
        event_label: "hello_button",
        value: clickCount + 1,
      })
    }
  }

  useEffect(() => {
    // コンポーネントがマウントされたときにページビューイベントを送信
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view")
    }
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Aizubrandhall LP2</h1>
      <p className="mb-4">Click count: {clickCount}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click me!
      </button>
    </main>
  )
}
