import { $createCodeNode, registerCodeHighlighting } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, KEY_BACKSPACE_COMMAND } from "lexical";
import { useEffect, useLayoutEffect } from "react";

function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();


  // Прослушивать события и когда элемент code станет пустым запретить стирание. 
  // Разобраться с Editor-Paragraph где оно создается и если есть возможность удалить без последствий удалить

  useLayoutEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const codeContent = document.getElementsByTagName('code')
      console.log('This code content', codeContent[0].innerText.length)
      editor._editable = true;

      if (event.code === 'Backspace') {

        if (codeContent[0].innerText.length === 1) {
          editor._editable = false;
        }
      } else {
        editor._editable = true;
      }
    }


    return editor.registerRootListener((rootElement: HTMLElement | null, prevRootElement: HTMLElement | null) => {
      if (prevRootElement !== null) {
        prevRootElement.removeEventListener('keydown', onKeyDown)
      }
      if (rootElement !== null) {
        rootElement.addEventListener('keydown', onKeyDown)
      }
    })

  }, [editor]);




  return null;
}

export { CodeHighlightPlugin };
