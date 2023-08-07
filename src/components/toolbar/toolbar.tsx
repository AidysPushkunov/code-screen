"use client";

import React from "react";
import { ClipBoard } from "../clipboard";

const Toolbar = () => {
  const [theme, setTheme] = React.useState(true);

  function changeTheme() {
    document.body.classList.toggle("dark");
    setTheme(!theme);
  }

  function changeWidth() {
    let width = prompt("Change code screen width: ", "60");
    if (width === null) {
      width = "60";
    }
    console.log("Width = ", width);
  }

  function changeHeight() {
    let height = prompt("Change code screen height: ", "50");
    if (height === null) {
      height = "50";
    }
    console.log("Height = ", height);
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
            Width
          </div>
          <div
            onClick={() => changeHeight()}
            className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white"
          >
            Height
          </div>
          <div className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle text-white">
            Padding
          </div>
        </div>
        <ClipBoard />
      </div>
    </>
  );
};

export { Toolbar };
