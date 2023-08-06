'use client'

import React from 'react';
import Image from 'next/image';


const ClipBoard = () => {
    const [copySuccess, setCopySuccess] = React.useState('');

    const copyToClipBoard = async (copyMe: any) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div>
            <div>
                <div onClick={() => copyToClipBoard('some text to copy')} className="flex realative cursor-pointer w-[50px] h-[50px]">
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


    )
}

export { ClipBoard }