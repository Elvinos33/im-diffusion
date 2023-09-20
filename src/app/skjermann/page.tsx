"use client";

import Link from "next/link";
import { useState } from "react";
import { io } from "socket.io-client";

type Object = {
    time: string,
    prompt: string,
}

export default function Page() {
    const [prompts, setPrompts] = useState<Object[]>([])

    const socket = io("ws://10.58.176.142:8000", {
        path: "/ws/socket.io",
    })

    socket.on("prompt", (data: Object) => {
        console.log(data)
        setPrompts(oldPrompts => [data, ...oldPrompts]);
    })

    return (
        <main className={"w-full h-screen"}>
            <div className={"w-full"}>
                <div className="w-full p-2 sticky top-0 flex items-center space-x-3">
                    <Link href={"/"} className="text-3xl font-bold">ARTISM</Link>
                    <span className="text-xl brightness-75 font-extralight">http://10.58.176.142/</span>
                </div>
                <ul className={"p-2 flex flex-col space-y-3 items-center w-full"}>
                    {prompts.map((item) => (
                        <li key={item.prompt} className={"flex gap-1 items-center bg-white/5 p-2 rounded w-full"}>
                            <p className={"brightness-50 font-light w-12"}>{item.time}</p>
                            <p className="flex-1 line-clamp-4">{item.prompt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}