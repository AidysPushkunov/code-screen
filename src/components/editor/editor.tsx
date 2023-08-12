"use client";

import React from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $createCodeNode, CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { HeadingNode } from "@lexical/rich-text";
import { $getRoot } from "lexical";

import { EditorContext } from "@/app/providers/editorProvider";

import { HtmlPlugin } from "./plugins/HtmlPlugin";



function initialCode() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const codeNode = $createCodeNode();
    root.append(codeNode);
  }
}



const Editor = () => {
  const { currentHeightEditor, currentWidthEditor } = React.useContext(EditorContext);
  const { setCode } = React.useContext(EditorContext);


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
                    transition: "all .3s",
                  }}
                  className="editor_editable relative h-[100%] p-[15px] bg-[#ffffff] dark:bg-[#23272F] text-[black] dark:text-[white] rounded-[10px] m-[10px] focus:border-teal focus:outline-none"
                />
              </div>
            </div>
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HtmlPlugin
          onHtmlChanged={(html) => setCode(html)}
          initialHtml=''
        />
        <CodeHighlightPlugin />
        <HistoryPlugin />
      </LexicalComposer>
    </>
  );
};

export { Editor };
