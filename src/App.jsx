import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log(count)
  return (
    <>
      {/* <span className="cross">&times;</span> */}
      {/* <button>Начать</button> */}

      <h1>Vite + React = Love</h1>

      {/* <div className="logo-container">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>+</p>
        <img src="/react.svg" className="logo" alt="React logo" />
        <p>=</p>
        <img src="/love.svg" className="logo" alt="Love logo" />
      </div> */}

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
  );
}

export default App;
