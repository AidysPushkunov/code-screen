'use client'

import React from 'react';
import { Inter } from 'next/font/google';
import Balancer from 'react-wrap-balancer'


const inter = Inter({ subsets: ['latin'] })


const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center my-7 max-h-10">
            <div className={inter.className}>
                <div className="text-[30px]">
                    <Balancer>CodeScreen</Balancer>
                    <div className="text-[12px] whitespace-normal">
                        <Balancer>Сopy the screenshot of your code to the clipboard</Balancer>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { Header }