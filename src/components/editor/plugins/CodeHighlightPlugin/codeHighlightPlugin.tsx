import { $createCodeNode, registerCodeHighlighting } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { useEffect } from "react";

function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);


  editor.update(() => {

    const root = $getRoot();

    const codeNode = $createCodeNode();
    root.append(codeNode);

  })



  return null;
}

export { CodeHighlightPlugin };
