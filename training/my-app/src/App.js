// To import another component //
import AnotherComponent from "./AnotherComponent";
import React, { Component } from "react";
import styled from "styled-components";

function App() {
  const [input, setInput] = React.useState("");
  const input_ref = React.useRef();
  //console.log(input_ref);

  const handleCLick = () => {
    input_ref.current.focus();
  };

  const [color, setColor] = React.useState("Blue");

  return (
    <>
      <div className="App">
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          ref={input_ref}
        />
        <button onClick={handleCLick}>Button</button>
        <div>{input}</div>
        <div>
          <button onClick={() => setColor("Red")}>Red</button>
          <button onClick={() => setColor("Blue")}>Blue</button>
        </div>
        <div>{color}</div>
      </div>
    </>
  );

  // // [getter, function to set (setter)] = usestate
  // const [counter, setCounter] = React.useState(0);
  // const handleCLick = () => {
  //   setCounter(counter + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={handleCLick}> Button {counter}</button>
  //   </div>
  // );

  // // Component //
  // return (
  //   <AnotherComponent number={1} array={[1, 2, 3]} greeting="Hello guys" />
  // );
}

export default App;
