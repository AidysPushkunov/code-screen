"use client";

import React, { DOMElement, JSXElementConstructor } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $createCodeNode, CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { HeadingNode } from "@lexical/rich-text";
import { $getRoot } from "lexical";

import { EditorState } from "lexical";
import { EditorSizeContext } from "@/app/providers/editorSizeProvider/editorSizeProvider";

const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const [copySuccess, setCopySuccess] = React.useState("");
  const textAreaRef = React.useRef(null);
  React.useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};

function initialCode() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const codeNode = $createCodeNode();
    root.append(codeNode);
  }
}

function OnChangePlugin(props: {
  onChange: (editorState: EditorState) => void;
}): null {
  const { setCurrentHeightEditor } = React.useContext(EditorSizeContext);
  const [editor] = useLexicalComposerContext();
  const { onChange } = props;

  React.useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
      setCurrentHeightEditor(
        document.querySelector(".editor_editable").clientHeight,
      );
      // console.log(currentHeightEditor);
    });
  }, [editor, onChange]);

  return null;
}

const Editor = () => {
  const { currentHeightEditor, currentWidthEditor } =
    React.useContext(EditorSizeContext);

  const initialConfig = {
    namespace: "MyEditor",
    editorState: initialCode,
    onError: (error: Error) => console.log(error),
    editable: true,
    theme: PlaygroundEditorTheme,
    nodes: [HeadingNode, CodeNode, CodeHighlightNode],
  };

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <div className="PlaygroundEditorTheme">
              <div className="editor">
                <ContentEditable
                  style={{
                    width: currentWidthEditor + "px",
                    height: currentHeightEditor + "px",
                    padding: 10 + "px",
                  }}
                  className="editor_editable relative min-h-[50vh] h-[100%] p-[15px] bg-[#ffffff] dark:bg-[#23272F] text-[black] dark:text-[white] rounded-[10px] m-[10px] focus:border-teal focus:outline-none"
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
        <OnChangePlugin onChange={(ediorState) => console.log(ediorState)} />
      </LexicalComposer>
    </>
  );
};

export { Editor };
