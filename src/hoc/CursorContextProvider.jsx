// src/components/CustomCursor.jsx
import { createContext, useState, useContext } from "react";
const CursorContext = createContext();
export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({ children }) => {
  // state
  ///////////////////////////////////
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  ///////////////////////////////////

  const data = {
    // state

    cursorText,
    setCursorText,
    cursorVariant,
    setCursorVariant,
  };

  return (
    <CursorContext.Provider value={data}>{children}</CursorContext.Provider>
  );
};
