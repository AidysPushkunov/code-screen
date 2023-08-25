"use client";

import React from 'react';
import { copyBlobToClipboard } from 'copy-image-clipboard'
import { Button } from "@/components/ui/button"

import Image from 'next/image';


const ClipBoard = () => {
  const [copySuccess, setCopySuccess] = React.useState('');
  const [codeImage, setCodeImage] = React.useState<any>(null);
  const [copy, setCopy] = React.useState(true)

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
    <Button
      variant="outline"
      className='cursor-pointer bg-white'
    >Copy</Button>
  );
};

export { ClipBoard };
