import { Editor } from "@/components/editor/editor";
import { Toolbar } from "@/components/toolbar";
import { ClipBoard } from "@/components/clipboard"

import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex min-h-screen  justify-between p-24 bg-[#f0f0f0] dark:bg-[#333A45]">
      <div>
        <Toolbar />
        <Editor />
      </div>
    </main>
  )
}
