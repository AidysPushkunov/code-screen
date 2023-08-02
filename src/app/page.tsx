import { Editor } from "@/components/editor";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#333A45]">
      <h1 className="text-[white] font-bold">Code Screen</h1>
      <Editor />
    </main>
  )
}
