import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center my-7">
            <div className={inter.className}>
                <div className="text-[30px]">
                    CodeScreen
                </div>
                <div className="text-[12px] w-[50vw] whitespace-normal">
                    Сopy the screenshot of your code to the clipboard
                </div>
            </div>
            <img
                className="w-[4rem] h-[4rem] cursor-pointer origin-center ease-in-out duration-300 hover:rotate-45"
                alt=""
                src="/settings.svg"
            />
        </div >
    )
}

export { Header }