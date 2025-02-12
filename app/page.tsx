"use client"

export default function Page() {
  const handleClick = () => {
    // Add your click handling logic here
    console.log("Button clicked!");
  };

  return (
    <main>
      <h1>Welcome to Aizubrandhall LP2</h1>
      <button 
        onClick={handleClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Click me!
      </button>
    </main>
  )
}
