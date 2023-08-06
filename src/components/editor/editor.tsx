"use client";

import React from 'react';

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $createCodeNode, CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from './themes/playgroundEditorThemes';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { HeadingNode } from '@lexical/rich-text';
import { $getRoot } from 'lexical';




const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();


  const [copySuccess, setCopySuccess] = React.useState('');
  const textAreaRef = React.useRef(null);
  React.useEffect(() => {
    editor.focus();
  }, [editor])

  return null
}


function initialCode() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const codeNode = $createCodeNode();
    root.append(codeNode);
  }
}

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    editorState: initialCode,
    onError: (error: Error) => console.log(error),
    editable: true,
    theme: PlaygroundEditorTheme,
    nodes: [HeadingNode, CodeNode, CodeHighlightNode],
  }

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <div className="PlaygroundEditorTheme">
              <div className="editor">
                <ContentEditable className="relative min-h-[50vh] h-[100%] w-[60vw] p-[15px] bg-[#ffffff] dark:bg-[#23272F] text-[black] dark:text-[white] rounded-[10px] m-[10px] focus:border-teal focus:outline-none"
                />
              </div>
            </div>
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <CodeHighlightPlugin />
        <MyCustomAutoFocusPlugin />
        <HistoryPlugin />
      </LexicalComposer >
    </>
  )
}

export { Editor };