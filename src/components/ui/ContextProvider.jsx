import React, { useState } from "react";
import { Context } from "./Context";
export function ContextProvider({ children }) {
  const [box, setBox] = useState(false);
  const toggleBox = () => {
    setBox(!box);
  };
  return (
    <Context.Provider value={{ box, toggleBox }}>
        {children}
    </Context.Provider>
  );
}
