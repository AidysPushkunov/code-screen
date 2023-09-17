import { $createCodeNode, registerCodeHighlighting } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect } from "react";

function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);

  useEffect(() => {

    editor.update(() => {
      let selection = $getSelection();

      if ($isRangeSelection(selection)) {
        const textContent = selection.getTextContent();
        const codeNode = $createCodeNode();
        selection.insertNodes([codeNode]);
        selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertRawText(textContent);
      }

    })
  }, [editor])

  return null;
}

export { CodeHighlightPlugin };
