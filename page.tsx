"use client"

import { useState, useEffect } from "react"
import { useReportWebVitals } from "next/web-vitals"

export default function Page() {
  const [clickCount, setClickCount] = useState(0)

  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric)
    const url = "/analytics"

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: "POST", keepalive: true })
    }
  })

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
    <div>
      <h1>Welcome to my GA4 test page</h1>
      <p>Click count: {clickCount}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}
