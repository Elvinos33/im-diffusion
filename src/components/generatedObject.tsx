import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GeneratedObject } from "@/app/generate/page";
import { Skeleton } from "./ui/skeleton";

export function GeneratedImageCard(props: GeneratedObject){
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    {props.prompt}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {props.image ? (
                    // <Image alt="AI bilde" className="w-full" src={`data:image/png;base64,${props.image}`}  width={500} height={500} />
                    <Image alt="AI bilde" className="w-full" src={`${props.image}`}  width={500} height={500} />
                ) : (
                    <Skeleton className="w-full aspect-square"/>
                )}
            </CardContent>
        </Card>
    )
}