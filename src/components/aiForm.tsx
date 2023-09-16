import axios from "axios";
import {useForm} from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
    setImageData(): any
}

export default function AiForm(props:Props) {

    const {handleSubmit, reset, register} = useForm()


    function onSubmit(data: any) {


        axios.get(`http://127.0.0.1:8000/?prompt=${data.prompt}`)
            .then((response) => {
                console.log(response);
                props.setImageData(response.data.image);
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
                    <Button type="submit" variant={"outline"}>Generer</Button>
                </div>
            </form>
        </>
    )
}