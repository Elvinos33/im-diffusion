"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GeneratedObject } from "@/app/generate/page";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogDescription, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { GenerateCard } from "./card";

export function GeneratedImageCard(props: GeneratedObject){
    return(
        <Dialog>
            <DialogTrigger>
                <GenerateCard id={props.id} image={props.image} prompt={props.prompt}/>
            </DialogTrigger>
            {props.image !== "" && (
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="line-clamp-2">{props.prompt}</DialogTitle>
                        <DialogDescription>ID: {props.id}</DialogDescription>
                    </DialogHeader>
                    {/* <img alt="AI bilde" className="w-full rounded" src={`data:image/png;base64,${props.image}`}  width={500} height={500} /> */}
                    <Image alt="AI bilde" className="w-full rounded" src={`data:image/png;base64,${props.image}`}  width={500} height={500} />
                    <DialogFooter>
                        <a download={`${props.prompt}.png`} href={`data:image/png;base64,${props.image}`}>
                            <Button variant={"outline"} className="flex items-center gap-2"><Download size={18}/>Download</Button>
                        </a>
                    </DialogFooter>
                </DialogContent>
            )}
        </Dialog>
    )
}