import { GeneratedObject } from "@/app/generate/page";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export function GenerateCard(props: GeneratedObject){
    return (
        <Card className="bg-transparent text-primary-foreground border-slate-600">
            <CardHeader>
                <CardTitle className="w-full text-start line-clamp-1">
                    {props.prompt}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {props.image ? (
                    <Image alt="AI bilde" className="w-full rounded" src={`data:image/png;base64,${props.image}`}  width={500} height={500} />
                ) : (
                    <Skeleton className="w-full aspect-square"/>
                )}
            </CardContent>
        </Card>
    )
}
