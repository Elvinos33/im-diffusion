"use client";

import Image from "next/image"
import AiForm from "@/components/aiForm"
import {useState} from "react";
import Link from "next/link";
import { GeneratedImageCard } from "@/components/generatedImageCard";

export type GeneratedObject = {
    image: string,
    prompt: string,
    id: number,
}

export default function Page() {
    const [list, setList] = useState([]);


    return (
        <main className="flex justify-center">
            <div className="w-full mx-2 sm:mx-0 sm:w-11/12 md:w-4/6 lg:w-3/6 space-y-2">
                <div className="w-full pt-2">
                    <Link href={"/"} className="text-3xl font-bold">ARTISM</Link>
                </div>
                <div className="flex-col items-center flex">
                    <AiForm setList={setList}/>
                    {/* <section className="p-12 w-4/6 flex items-center justify-center">
                        {image && (
                            <Image alt="AI bilde" src={`data:image/png;base64,${image}`}  width={500} height={500} />
                        )}
                    </section> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {list.map((card: GeneratedObject) => (
                        <GeneratedImageCard id={card.id} image={card.image} prompt={card.prompt} key={card.id}/>
                    ))}
                    <GeneratedImageCard id={1} image="" prompt="ong"/>
                </div>
            </div>
        </main>
    )
}