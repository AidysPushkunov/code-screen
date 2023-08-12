"use client";

// import { ThemeProvider } from '';
import { EditorProvider } from "./editorProvider";

function Providers({ children }: any) {
  return <EditorProvider>{children}</EditorProvider>;
}

export { Providers };
