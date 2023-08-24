// CSS
// Conditional design
// Event OnChange
// Array

import { useState } from "react";

function App() {
  const [listOfWrestler, setListOfWrestler] = useState([
    { name: "john cena", age: "46" },
    { name: "broke lesner", age: "42" },
    { name: "roman", age: "37" },
    { name: "hadi", age: "23" },
  ]);

  return (
    <div>
      {listOfWrestler.map((i) => {
        return <h1> {i.age}</h1>;
      })}
    </div>
  );
}

export default App;
