'use client'
import React from 'react';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })


const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center my-7 max-h-10">
            <div className={inter.className}>
                <div className="text-[30px]">
                    CodeScreen
                </div>
                <div className="text-[12px] mx-1 whitespace-normal">
                    Сopy the screenshot of your code to the clipboard
                </div>
            </div>
        </div >
    )
}

export { Header }