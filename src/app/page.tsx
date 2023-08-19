import { Header } from '@/components/header';
import { MenuBarCodeEditor } from '@/components/menubarCodeEditor';
import { Editor } from '@/components/editor';


export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex justify-center bg-lightgray h-[100vh] w-[100vw] overflow-auto text-left text-[64px] text-slategray font-inter pb-[20%]">
          <div>
            <Header />
            <MenuBarCodeEditor />
            <Editor />
          </div>
        </div>
      </div>
    </main>
  )
}
