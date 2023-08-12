"use client";

import React from "react";
import Image from "next/image";

import { copyImageToClipboard } from 'copy-image-clipboard'
import { EditorContext } from "@/app/providers/editorProvider";


const ClipBoard = () => {
  const [copySuccess, setCopySuccess] = React.useState("");
  const { code } = React.useContext(EditorContext);


  // const url = new URLSearchParams();

  // url.append("code", JSON.stringify(code))

  const req = async () => {
    let response = await fetch(`http://localhost:3000/api/og}`);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  // console.log(url)

  const copyToClipBoard = async (copyMe: any) => {
    req();
    copyImageToClipboard(
      'http://localhost:3000/api/og?code=Aidys Pushkunov',
    )
      .then(() => {
        console.log('Image Copied')
      })
      .catch((e) => {
        console.log('Error: ', e.message)
      });
  };

  return (
    <div>
      <div>
        <div
          onClick={() => copyToClipBoard("some text to copy")}
          className="flex cursor-pointer w-[55px] h-[50px]"
        >
          <Image
            key={13213343}
            className="hover:scale-105 ease-in duration-300"
            src="/copy.png"
            srcset="/copy.png"
            width={50}
            height={50}
            alt="CopyBoard"
          />
          <div className="text-center text-[#000] dark:text-[#fff] m-1">
            {copySuccess}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClipBoard };
