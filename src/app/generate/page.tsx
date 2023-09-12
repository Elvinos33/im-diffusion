import Image from "next/image"

export default function Page() {
    return (
        <div className="w-screen flex-col items-center flex">
            <main className="flex w-screen flex-col h-screen items-center gap-1">
                <section className="  flex w-full h-1/4 items-center justify-end flex-col gap-2">
                    <input placeholder="Skriv her min venn :)" className="h-10 w-3/6 rounded-lg p-2 text-black" type="text" />
                    <button className="bg-violet-500 text-white w-1/6 h-10 rounded-lg">Generate</button>
                </section>
                <section className="mt-12 w-4/6 items-center justify-center">
                        <Image alt="AI bilde" src="/images/1.png" width={500} height={500} />
                </section>
            </main>
            <section className="flex bg-gray-700 w-3/4 h-screen">
                
            </section>
        </div>
    )
}