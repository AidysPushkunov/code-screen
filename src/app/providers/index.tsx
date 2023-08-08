"use client";

// import { ThemeProvider } from '';
import { EditorSizeProvider } from "./editorSizeProvider";

function Providers({ children }: any) {
  return <EditorSizeProvider>{children}</EditorSizeProvider>;
}

export { Providers };
