import React, { useState } from "react";

const App = () => {
  let a = [1, 2, 3, 4, 5, 6, 7];

  const [numbers, setNumbers] = useState(a);
  const [number, setNumber] = useState(0);

  const AddNumberInNumbers = () => {
    setNumbers([...numbers, number]);
  };

  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      {numbers.map((x) => x)}
      <button onClick={AddNumberInNumbers}>Click</button>
    </div>
  );
};

export default App;
