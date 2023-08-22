"use client";

import React from 'react';
import { copyBlobToClipboard } from 'copy-image-clipboard'



const ClipBoard = () => {
  const [copySuccess, setCopySuccess] = React.useState('');
  const [codeImage, setCodeImage] = React.useState<any>(null);
  const [copy, setCopy] = React.useState('Copy Image')

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
    <div
      onClick={() => copyToClipBoard('')}
      className="absolute top-50 right-[-50px] hover:right-[0] ease-in duration-300  cursor-pointer rounded-l-lg bg-white hover:bg-[#DEB887] text-[12px] text-black pr-[55px] pl-[10px] py-[25px] z-50"
    >
      {copy}
    </div>
  );
};

export { ClipBoard };
