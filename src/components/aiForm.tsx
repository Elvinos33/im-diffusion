"use client";

import axios from "axios";
import {useForm} from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GeneratedObject } from "@/app/generate/page";
import { useState } from "react";
import { Loader2 } from "lucide-react"

type Props = {
    // setImageData(): void
    setList(): void,
    list: [],
}

export default function AiForm(props:Props) {
    const [loading, setLoading] = useState(false);

    const {handleSubmit, reset, register} = useForm()

    function addToList(newObject: GeneratedObject){
        // @ts-ignore
        props.setList(list => [newObject,...list])
    }

    function removeFirst() {
        let array = props.list;
        array.slice(0, 1);
        // @ts-ignore
        props.setList(array);
    }

    function onSubmit(data: any) {
        setLoading(true)

        const object: GeneratedObject = {
            image: "",
            prompt: data.prompt,
            id: 0,
        }
        addToList(object)
        
        axios.get(`http://10.58.176.142:8000/?prompt=${data.prompt}`)
            .then((response) => {
                console.log(response);
                // props.setImageData(response.data.image);
                const object: GeneratedObject = {
                    image: response.data.image,
                    prompt: data.prompt,
                    id: response.data.id,
                }
                removeFirst()
                addToList(object)

                return
            })
            .catch((error) => {
                console.error(error);
                removeFirst()

            })
            .finally(() => {
                setLoading(false)
            })

        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
                <div className="flex items-center space-x-2">
                    <Input disabled={loading} autoComplete="off" type="text" placeholder={"Enter prompt.."} {...register("prompt", {required: true})}/>
                    <Button disabled={loading} type="submit" variant={"outline"}>
                        {!loading ? (
                            <span>
                                Generate
                            </span>
                        ): (
                            <div className="flex space-x-1 items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                <span>Generating</span>
                            </div>
                        )}
                    </Button>
                </div>
            </form>
        </>
    )
}