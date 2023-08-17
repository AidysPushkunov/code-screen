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
        </div >
    )
}

export { Header }