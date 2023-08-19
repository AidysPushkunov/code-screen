import { Header } from '@/components/header';
import { MenuBarCodeEditor } from '@/components/menubarCodeEditor';
import { Editor } from '@/components/editor';

const CodeEditor: React.FC = () => {
    return (
        <>

            <div className="flex justify-center">
                <div className="flex justify-center bg-lightgray h-[100vh] w-[100vw] overflow-hidden text-left text-[64px] text-slategray font-inter">

                    <div>

                        <Header />
                        <MenuBarCodeEditor />
                        <Editor />

                    </div>

                </div>
            </div>
        </>
    )
}

export { CodeEditor }