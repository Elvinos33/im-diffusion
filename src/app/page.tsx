import { Blob } from "@/components/blob";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Blob />
      <div className="w-full flex justify-center items-center h-[90vh]">
        <div className="flex flex-col">
          <span className="text-7xl font-bold">ARTISM</span>
          <Button variant={"default"} asChild >
            <Link href={"/generate"}>
              Generate
            </Link>
          </Button>
        </div>
      </div>
      <div className={"p-2"}>
        <span className={"opacity-50 text-[11px]"}>The authors of this project are not responsible for any content generated using this interface.</span>
      </div>
    </main>
  )
}
