import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }
  function handleMouseEnter(item) {
    setActiveItem(item)
  }

  function handleMouseLeave() {
    setActiveItem("");
  }

  return (
    <>
      {isOpen ? <span onClick={toggleIsOpen} className="cross">&times;</span> : <button onClick={toggleIsOpen}>Начать</button>}

    {isOpen && 
    <>
      <h1>Vite + React = {count >= 3 ? "LOVE" : ""}</h1>

      <div className="logo-container">
        <img src="/vite.svg" className={`logo ${count >= 1 || activeItem === "vite" ? "active" : ""}`} alt="Vite logo" onMouseEnter={() => handleMouseEnter("vite")} onMouseLeave={handleMouseLeave} />
        <p>+</p>
        <img src="/react.svg" className={`logo ${count >= 2 || activeItem === "react" ? "active" : ""}`} alt="React logo" onMouseEnter={() => handleMouseEnter("react")} onMouseLeave={handleMouseLeave} />
        <p>=</p>
        <img src="/love.svg" className={`logo ${count >= 3 || activeItem === "heart" ? "active" : ""}`} alt="Love logo" onMouseEnter={() => handleMouseEnter("heart")} onMouseLeave={handleMouseLeave} />
      </div>

      <hr />

      <div className="card">
        <p className="count-paragraph">count is {count}</p>
        <div className="increment-buttons">
          <button onClick={() => setCount((prev) => prev + 1 )}>+1</button>
          <button onClick={() => setCount((prev) => prev - 1 )}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
    }

      
    </>
  );
}

export default App;
