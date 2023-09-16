import axios from "axios";
import {useForm} from "react-hook-form";
import { Button } from "./ui/button";

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
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3 w-1/2"}>
                <input autoComplete="off" type="text" className={"p-5 rounded-md text-black bg-slate-100 transition hover:bg-white focus:bg-white"} placeholder={"Skriv her.."} {...register("prompt", {required: true})}/>
                <Button variant={"default"}>Generer</Button>
            </form>
        </>
    )
}