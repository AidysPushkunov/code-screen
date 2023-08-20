"use client";

import React from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { FunctionComponent } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { ClipBoard } from "../clipboard";


const onChange = (editorState: any) => {
    editorState.read(() => {
        const json = editorState.toJSON();
        console.log(JSON.stringify(json));
    })
}

const Editor: FunctionComponent = () => {

    const EMPTY_CONTENT =
        '{"root":{"children":[{"children":[],"direction":null,"format":"code","indent":0,"type":"code","version":1}],"direction":null,"format":"code","indent":0,"type":"root","version":1}}';


    const initialConfig = {
        namespace: "MyEditor",
        editorState: EMPTY_CONTENT,
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
                    <CodeHighlightPlugin />
                    <HistoryPlugin />
                    <OnChangePlugin onChange={onChange} />
                </LexicalComposer>
            </div >
        </>
    );
};

export { Editor };
