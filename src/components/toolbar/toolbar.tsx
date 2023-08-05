'use client'
const Toolbar = () => {

    function changeTheme() {
        document.body.classList.toggle('dark')
    }

    return (
        <div className="flex">
            <div onClick={() => changeTheme()} className="mx-[1px] py-[10px] px-[40px] bg-[#00ACC1] cursor-pointer hover:bg-[#4DD0E1] ease-in duration-300 hover:scale-105">Dark</div>
            <div className="mx-[1px] py-[10px] px-[40px] bg-[#00ACC1] cursor-pointer hover:bg-[#4DD0E1] ease-in duration-300 hover:scale-105">Width</div>
            <div className="mx-[1px] py-[10px] px-[40px] bg-[#00ACC1] cursor-pointer hover:bg-[#4DD0E1] ease-in duration-300 hover:scale-105">Height</div>
            <div className="mx-[1px] py-[10px] px-[40px] bg-[#00ACC1] cursor-pointer hover:bg-[#4DD0E1] ease-in duration-300 hover:scale-105">Padding</div>
        </div>
    )
}

export { Toolbar }