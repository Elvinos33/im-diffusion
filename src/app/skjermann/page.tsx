import Link from "next/link";

export default function page() {
    return (
        <main className={"w-full h-screen"}>
            <div className={"w-full"}>
                <div className="w-full p-2 sticky top-0">
                    <Link href={"/"} className="text-3xl font-bold">ARTISM</Link>
                </div>
                <ul className={"p-2"}>
                    <li className={"flex gap-1 items-center"}>
                        <p className={"brightness-50 font-light"}>12:55</p>
                        <p>Fortnite</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}