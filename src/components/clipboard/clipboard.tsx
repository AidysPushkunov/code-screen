"use client";

import React from "react";
import Image from "next/image";

import { copyBlobToClipboard } from 'copy-image-clipboard'
import { EditorContext } from "@/app/providers/editorProvider";


const ClipBoard = () => {
  const [copySuccess, setCopySuccess] = React.useState("");
  const { code } = React.useContext(EditorContext);

  // const parser = new DOMParser();
  // const doc = parser.parseFromString(code, 'text/html');
  // const all_inputs = doc.querySelectorAll('input');
  // console.dir(doc);

  const [codeImage, setCodeImage] = React.useState<any>(null);

  const url = new URLSearchParams();

  url.append("code", JSON.stringify(code))
  // let codeHTMLContent = new DOMParser().parseFromString(code, "text/html").getElementsByTagName("pre")[0]


  React.useEffect(() => {
    fetch(`/api/og/?${url}`)
      .then((res) => res.blob())
      .then((blob) => setCodeImage(blob));
  }, [codeImage, url]);



  const copyToClipBoard = async (copyMe: any) => {
    copyBlobToClipboard(
      codeImage,
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
          onClick={() => copyToClipBoard('')}
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
