"use client";

import React from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { FunctionComponent } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

import { CodeNode, CodeHighlightNode } from "./node/CodeNode";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { ClipBoard } from "@/components/clipboard";
import { CircleButton } from "@/components/circleButton";
import { getLinedCodeNodes } from "./node/LinedCodeNode/Overrides";
import LinedCodePlugin from "./node/LinedCodeNode/LinedCodePlugin";
import { defaultTheme } from './themes/defaultTheme';
import { ParagraphNode } from "lexical";


const onChange = (editorState: any) => {
    editorState.read(() => {
        const json = editorState.toJSON();
        console.log(JSON.stringify(json));
    })
}


const Editor: FunctionComponent = () => {

    const initialConfig = {
        namespace: "MyEditor",
        onError: (error: Error) => console.log(error),
        editable: true,
        theme: PlaygroundEditorTheme,
        nodes: [

            HeadingNode,
            CodeNode,
            CodeHighlightNode,

            {

                replace: ParagraphNode,
                with: (node: ParagraphNode) => {
                    return new CodeNode();
                }

            },

            ...getLinedCodeNodes({
                activateTabs: true,
                theme: defaultTheme,
            })],

    };

    return (
        <>
            <div className="relative w-[85vw] sm:w-[60vw] h-[80%] text-[20px] drop-shadow-xl">
                <div className="flex justify-between items-center">
                    <div className="flex mb-10">
                        <CircleButton />
                        <CircleButton />
                        <CircleButton />
                        <CircleButton />
                        <CircleButton />
                        <CircleButton />
                    </div>
                    <div className="mb-10">
                        <ClipBoard />
                    </div>
                </div>

                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin
                        contentEditable={
                            <div className="PlaygroundEditorTheme">
                                <div className="editor">
                                    <ContentEditable
                                        className="absolute rounded-lg p-sm bg-white w-[85vw] sm:w-[60vw] h-[60vh] focus:border-teal focus:outline-none overflow-auto resize scrollbar-hide"
                                    >
                                    </ContentEditable>

                                </div>
                            </div>
                        }
                        placeholder={null}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <LinedCodePlugin />
                    <CodeHighlightPlugin />
                    <HistoryPlugin />
                    <OnChangePlugin onChange={onChange} />
                </LexicalComposer>
            </div >
        </>
    );
};



export { Editor };

