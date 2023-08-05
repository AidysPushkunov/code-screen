import { Editor } from "@/components/editor/editor";
import { Toolbar } from "@/components/toolbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#f0f0f0] dark:bg-[#333A45]">
      <Editor />
      <Toolbar />
    </main>
  )
}
