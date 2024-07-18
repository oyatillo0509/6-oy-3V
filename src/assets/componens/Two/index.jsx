import React, { useState } from "react";
import "./index.css";
function App() {
  const [isGreet, setIsGreet] = useState(true);

  function handleChangeSalom() {
    setIsGreet(true);
  }

  function handleChangeXayr() {
    setIsGreet(false);
  }

  return (
    <div className="wrp">
      <div>
        <button onClick={handleChangeSalom}>salom</button>
        <button onClick={handleChangeXayr}>xayr</button>
      </div>
      <div>{isGreet ? <p>Assalomu Alaykum</p> : <p>Xayr Sog' bo'ling</p>}</div>
    </div>
  );
}

export default App;
