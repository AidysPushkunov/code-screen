"use client";

import React, { createContext } from "react";

interface IEditorContext {
  currentHeightEditor: string;
  currentWidthEditor: string;
  setCurrentWidthEditor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentHeightEditor: React.Dispatch<React.SetStateAction<string>>;
  paddingEditor: string;
  setPaddingEditor: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_EDITOR_CONTEXt_VALUE: IEditorContext = {
  currentHeightEditor: "400",
  currentWidthEditor: "700",
  paddingEditor: "0",
  code: "",
  setCurrentWidthEditor: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  setCurrentHeightEditor: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  setPaddingEditor: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  setCode: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  }
};

const EditorContext = createContext<IEditorContext>(
  DEFAULT_EDITOR_CONTEXt_VALUE
);

const EditorProvider = ({ children }: any) => {
  const [currentHeightEditor, setCurrentHeightEditor] = React.useState("400");
  const [currentWidthEditor, setCurrentWidthEditor] = React.useState("700");
  const [paddingEditor, setPaddingEditor] = React.useState("0");
  const [code, setCode] = React.useState("");

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
