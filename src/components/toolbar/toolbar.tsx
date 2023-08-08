"use client";

import React from "react";
import { ClipBoard } from "../clipboard";
import { EditorSizeContext } from "@/app/providers/editorSizeProvider/editorSizeProvider";

const Toolbar = () => {
  const {
    currentHeightEditor,
    currentWidthEditor,
    setCurrentHeightEditor,
    setCurrentWidthEditor,
    paddingEditor,
    setPaddingEditor,
  } = React.useContext(EditorSizeContext);

  const [theme, setTheme] = React.useState(true);

  function changeTheme() {
    document.body.classList.toggle("dark");
    setTheme(!theme);
  }

  function changeWidth() {
    let width = prompt("Change code screen width: ", currentWidthEditor);
    if (width === null) {
      width = currentWidthEditor;
    }
    console.log("Width = ", width);
    setCurrentWidthEditor(width);
  }

  function changeHeight() {
    let height = prompt("Change code screen height: ", currentHeightEditor);
    if (height === null) {
      height = currentHeightEditor;
    }
    console.log("Height = ", height);
    setCurrentHeightEditor(height);
  }

  function changePadding() {
    let padding = prompt("Change code screen padding: ", paddingEditor);
    if (padding === null) {
      padding = paddingEditor;
    }

    setPaddingEditor(padding);
    const rows = document.getElementsByTagName("span");
    for (let i = 0; i <= rows.length; i++) {
      rows[i].style.padding = paddingEditor + "px";
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div
            onClick={() => changeTheme()}
            className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white"
          >
            {theme ? "Light" : "Dark"}
          </div>
          <div
            onClick={() => changeWidth()}
            className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white"
          >
            Width {currentWidthEditor}
          </div>
          <div
            onClick={() => changeHeight()}
            className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white"
          >
            Height {currentHeightEditor}
          </div>
          <div
            onClick={() => changePadding()}
            className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white"
          >
            Padding {paddingEditor}
          </div>
        </div>
        <ClipBoard />
      </div>
    </>
  );
};

export { Toolbar };
