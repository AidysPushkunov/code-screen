"use client";

import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { $createCodeNode, CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";

// import { theme } from "./playgroundEditorTheme";
import { PlaygroundEditorTheme } from "./playgroundEditorTheme";

import { $getRoot } from "lexical";

// import './playgroundEditorTheme.css'

function initialCode() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const codeNode = $createCodeNode();
    root.append(codeNode);
  }
}

export const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    editorState: initialCode,
    onError: (error: Error) => console.log(error),
    editable: true,
    nodes: [CodeNode, CodeHighlightNode],
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <div className="PlaygroundEditorTheme">
            <ContentEditable className="h-[50vh] w-[60vw] p-[2rem] bg-[#23272F] text-[white] rounded-[10px] m-[10px] focus:border-teal focus:outline-none" />
          </div>
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <CodeHighlightPlugin />
    </LexicalComposer>
  );
};
