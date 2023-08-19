'use client'
import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })


const Header: React.FC = () => {

    const [bulb, setBulb] = React.useState(true)

    return (
        <div className="flex justify-between items-center my-7 max-h-10">
            <div className={inter.className}>
                <div className="text-[30px]">
                    CodeScreen
                </div>
                <div className="text-[12px] w-[50vw] whitespace-normal">
                    Сopy the screenshot of your code to the clipboard
                </div>
            </div>
            {
                bulb ?
                    <Image
                        key={2324235235}
                        className="cursor-pointer"
                        data-title="category"
                        src="/bulb.svg"
                        alt="Category"
                        width={45}
                        height={45}
                        onClick={() => setBulb(!bulb)}
                    />
                    :
                    <Image
                        key={2324235235}
                        className="cursor-pointer"
                        data-title="category"
                        src="/bulb-off.svg"
                        alt="Category"
                        width={45}
                        height={45}
                        onClick={() => setBulb(!bulb)}
                    />
            }


        </div >
    )
}

export { Header }