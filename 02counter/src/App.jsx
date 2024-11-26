import { useState } from "react";

function App() {
  //to propagate the change in the ui or inside DOM
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter >= 20) {
      console.log("please enter value less than 20");
      alert("You can't add more than 20");
      
    } else {
      counter = counter + 1;
      console.log("added", counter);
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      console.log("please enter positive value");
      alert("Counter can't be negative");
      
    } else {
      counter = counter - 1;
      console.log("removed", counter);
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
