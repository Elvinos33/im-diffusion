"use client";

import Image from "next/image"
import AiForm from "@/components/aiForm"
import {useState} from "react";

export default function Page() {

    const [image, setImage] = useState(null)

    return (
        <div className="w-screen flex-col items-center flex">
            <main className="flex w-screen flex-col h-screen items-center gap-1">
                <section className="flex w-full h-1/4 items-center justify-end flex-col gap-2">
                    <AiForm setImageData={setImage}/>
                </section>
                <section className="p-12 w-4/6 flex items-center justify-center">
                    {image && (
                        <Image alt="AI bilde" src={`data:image/png;base64,${image}`}  width={500} height={500} />
                    )}
                </section>
            </main>
        </div>
    )
}