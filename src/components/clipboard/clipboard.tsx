"use client";

import React from "react";
import Image from "next/image";
import { copyBlobToClipboard } from 'copy-image-clipboard'



const ClipBoard = () => {
  const [copySuccess, setCopySuccess] = React.useState("");

  const [codeImage, setCodeImage] = React.useState<any>(null);

  const url = new URLSearchParams();

  url.append("code", JSON.stringify('Hello world!'))

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
        setCopySuccess('Image Copied')
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
            key={1234}
            className="absolute right-1 top-1 overflow-hidden cursor-pointer"
            data-title="Copy"
            src="/frame2.svg"
            alt="CopyBoard"
            width={45}
            height={45}
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
