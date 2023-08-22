import { Editor } from '@/components/editor';
import { ClipBoard } from '@/components/clipboard';

export default function Home() {
  return (
    <main className="fixed flex justify-center items-center bg-lightgray h-[100vh] w-[100vw] overflow-hidden text-left text-[64px] text-slategray font-inter">
      <ClipBoard />
      <Editor />
    </main>
  )
}
