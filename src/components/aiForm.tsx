import axios from "axios";
import {useForm} from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GeneratedObject } from "@/app/generate/page";

type Props = {
    // setImageData(): void
    setList(): void,
}

export default function AiForm(props:Props) {

    const {handleSubmit, reset, register} = useForm()

    function addToList(newObject: GeneratedObject){
        props.setList(list => [...list, newObject])
    }

    function onSubmit(data: any) {
        axios.get(`http://127.0.0.1:8000/?prompt=${data.prompt}`)
            .then((response) => {
                console.log(response);
                // props.setImageData(response.data.image);
                const object: GeneratedObject = {
                    image: response.data.image,
                    prompt: data.prompt,
                    id: response.data.id,
                }
                addToList(object)
                return
            })
            .catch((error) => {
                console.error(error);
            })

        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
                <div className="flex items-center space-x-2">
                    <Input autoComplete="off" type="text" placeholder={"Enter prompt.."} {...register("prompt", {required: true})}/>
                    <Button type="submit" variant={"outline"}>Generate</Button>
                </div>
            </form>
        </>
    )
}