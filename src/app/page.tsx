import { Editor } from '@/components/editor';
import { ClipBoard } from '@/components/clipboard';

export default function Home() {
  return (
    <main className="fixed flex justify-center items-center bg-[#F5F5F5] h-[100vh] w-[100vw] overflow-hidden text-left text-[64px] text-slategray font-inter">
      <Editor />
    </main>
  )
}
