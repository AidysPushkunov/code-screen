"use client";

import React from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { FunctionComponent } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { CodeNode, CodeHighlightNode, $createCodeNode } from "@lexical/code";
// import { CodeNode, CodeHighlightNode, $createCodeHighlightNode } from './node';
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { PlaygroundEditorTheme } from "./themes/playgroundEditorThemes";
import { LimeEditorTheme } from "./themes/limeEditorTheme";
import { ClipBoard } from "@/components/clipboard";
import { CircleButton } from "@/components/circleButton";

import { $getRoot } from "lexical";
import { getLinedCodeNodes } from "./node/LinedCodeNode/Overrides";
import LinedCodePlugin from "./node/LinedCodeNode/LinedCodePlugin";

import { defaultTheme } from './themes/defaultTheme';



// import { $createCodeNode } from "./node";


const onChange = (editorState: any) => {
    editorState.read(() => {
        const json = editorState.toJSON();
        console.log(JSON.stringify(json));
    })
}

// 1/3 Create LinedCodeNode theme (see Readme for fallback classes)

function initialCode() {
    const root = $getRoot();
    if (root.getFirstChild() === null) {
        const codeNode = $createCodeNode();
        root.append(codeNode);
    }
}


const Editor: FunctionComponent = () => {

    // const EMPTY_CONTENT =
    //     '{"root":{"children":[{"children":[],"direction":null,"format":"code","indent":0,"type":"code","version":1}],"direction":null,"format":"code","indent":0,"type":"root","version":1}}';


    const initialConfig = {
        namespace: "MyEditor",
        editorState: initialCode,
        onError: (error: Error) => console.log(error),
        editable: true,
        theme: defaultTheme,
        nodes: [
            HeadingNode,
            CodeNode,
            CodeHighlightNode,
            ...getLinedCodeNodes({
                activateTabs: true,
                // theme: defaultTheme,
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

