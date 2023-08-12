"use client";

import React, { createContext } from "react";

const EditorContext = createContext(null);

const EditorProvider = ({ children }: any) => {
  const [currentHeightEditor, setCurrentHeightEditor] = React.useState("400");
  const [currentWidthEditor, setCurrentWidthEditor] = React.useState("700");
  const [paddingEditor, setPaddingEditor] = React.useState("0");
  const [code, setCode] = React.useState('');

  return (
    <EditorContext.Provider
      value={{
        currentHeightEditor,
        setCurrentHeightEditor,
        currentWidthEditor,
        setCurrentWidthEditor,
        paddingEditor,
        setPaddingEditor,
        code,
        setCode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider, EditorContext };
