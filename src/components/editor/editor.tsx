"use client";

import React from "react";
import { FunctionComponent } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { $createCodeNode, CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { EditorContext } from "@/app/providers/editorProvider";
import { $getRoot } from 'lexical';
import { HtmlPlugin } from "./plugins/HtmlPlugin";
import { ClipBoard } from "../clipboard";


function initialCode() {
    const root = $getRoot();
    if (root.getFirstChild() === null) {
        const codeNode = $createCodeNode();
        root.append(codeNode);
    }
}


const Editor: FunctionComponent = () => {
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
            <div className="relative w-[85vw] sm:w-[60vw] text-[20px] drop-shadow-xl">
                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin
                        contentEditable={
                            <div className="PlaygroundEditorTheme">
                                <div className="editor">
                                    <ContentEditable
                                        className="absolute rounded-lg bg-whitesmoke w-[85vw] sm:w-[60vw] h-[70vh] focus:border-teal focus:outline-none overflow-auto resize-y"
                                    >
                                    </ContentEditable>

                                </div>
                                <ClipBoard />
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
            </div >
        </>
    );
};

export { Editor };
