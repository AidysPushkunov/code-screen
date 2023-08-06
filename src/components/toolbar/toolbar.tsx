'use client'

import React from 'react';
import { ClipBoard } from '../clipboard';

const Toolbar = () => {
    const [theme, setTheme] = React.useState(true);

    function changeTheme() {
        document.body.classList.toggle('dark')
        setTheme(!theme)
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="flex">
                    <div onClick={() => changeTheme()} className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle">{theme ? 'Light' : 'Dark'}</div>
                    <div className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle">Width</div>
                    <div className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle">Height</div>
                    <div className="mx-[1px] py-[10px] max-h-[45px] w-[110px] bg-[#806FF2] cursor-pointer hover:bg-[#BC94FA] ease-in duration-300 hover:scale-105 text-center align-middle">Padding</div>
                </div>
                <ClipBoard />
            </div>
        </>
    )
}

export { Toolbar }