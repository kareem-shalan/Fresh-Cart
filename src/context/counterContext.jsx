import React, { createContext, useState } from "react";

// Create the context
let CounterContext = createContext();

export default function CounterContextProvider(props) {
  const [Counter, setCounter] = useState(0);

  // Function to update the counter
  function increase() {
    setCounter(Math.random());
  }

  // Provide the context value
  return (
    <CounterContext.Provider value={{ Counter, increase }}>
      {props.children}
    </CounterContext.Provider>
  );
}

// Export the context to be used elsewhere
export { CounterContext };
