"use client";

import Image from "next/image"
import AiForm from "@/components/aiForm"
import {useState} from "react";

export default function Page() {

    const [image, setImage] = useState("")

    return (
        <div className="w-screen flex-col items-center flex">
            <main className="flex w-screen flex-col h-screen items-center gap-1">
                <span className={"py-10 text-6xl font-bold"}>STAI_AI_Kaptein</span>
                <section className="flex w-full h-1/4 items-center justify-end flex-col gap-2">
                    <AiForm setImageData={setImage}/>
                </section>
                <section className="p-12 w-4/6 items-center justify-center">
                        <Image alt="AI bilde" src={image} width={500} height={500} />
                </section>
            </main>
            <section className="m-10 flex bg-gray-700 w-3/4 h-screen">
                
            </section>
        </div>
    )
}