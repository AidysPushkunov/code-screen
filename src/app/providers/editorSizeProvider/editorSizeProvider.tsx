"use client";

import React, { createContext } from "react";

const EditorSizeContext = createContext();

const EditorSizeProvider = ({ children }: any) => {
  const [currentHeightEditor, setCurrentHeightEditor] = React.useState();
  return (
    <EditorSizeContext.Provider
      value={{ currentHeightEditor, setCurrentHeightEditor }}
    >
      {children}
    </EditorSizeContext.Provider>
  );
};

export { EditorSizeProvider };
