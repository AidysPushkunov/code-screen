"use client";

import React, { createContext } from "react";

export const EditorSizeContext = createContext(null);

const EditorSizeProvider = ({ children }: any) => {
  const [currentHeightEditor, setCurrentHeightEditor] = React.useState("400");
  const [currentWidthEditor, setCurrentWidthEditor] = React.useState("700");
  const [paddingEditor, setPaddingEditor] = React.useState("0");

  return (
    <EditorSizeContext.Provider
      value={{
        currentHeightEditor,
        setCurrentHeightEditor,
        currentWidthEditor,
        setCurrentWidthEditor,
        paddingEditor,
        setPaddingEditor,
      }}
    >
      {children}
    </EditorSizeContext.Provider>
  );
};

export { EditorSizeProvider };
