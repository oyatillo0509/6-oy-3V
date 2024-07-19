import { useState } from "react";
import Masala from "./assets/componens/Masala";
import Two from "./assets/componens/Two";
import Three from "./assets/componens/Three";
import Games from "./assets/componens/Games";
import Galarey from "./assets/componens/Galarey";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <Masala />
      <Two />
      <Three />
      <Games />
      <Galarey />
    </div>
  );
}

export default App;
