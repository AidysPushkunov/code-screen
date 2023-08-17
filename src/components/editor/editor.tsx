"use client";

import React from "react";
import { FunctionComponent } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { Header } from "./header";
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
    // const { currentHeightEditor, currentWidthEditor } = React.useContext(EditorContext);
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
            <div className="flex justify-center bg-lightgray h-[100vh] w-[100vw] overflow-hidden text-left text-[64px] text-slategray font-inter">
                <div className="">
                    <Header />
                    <div className="relative w-[65vw] text-[20px] drop-shadow-xl">
                        <LexicalComposer initialConfig={initialConfig}>
                            <RichTextPlugin
                                contentEditable={
                                    <div className="PlaygroundEditorTheme">
                                        <div className="editor">
                                            <ContentEditable
                                                // style={{
                                                //     width: currentWidthEditor + "px",
                                                //     height: currentHeightEditor + "px",
                                                //     padding: 10 + "px",
                                                //     transition: "all .3s",
                                                // }}
                                                className="absolute rounded-lg bg-whitesmoke w-[65vw] h-[70vh] focus:border-teal focus:outline-none"
                                            />
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
                    </div>
                </div>
            </div >
        </>
    );
};

export { Editor };
