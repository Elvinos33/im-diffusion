import axios from "axios";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

type Props = {
    setImageData(): void
}

export default function AiForm(props:Props) {

    const {handleSubmit, reset, register} = useForm()

    const [renderData, setRenderData] = useState([])

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function onSubmit(data: any) {

        const requestData = {
            prompt: data.prompt,
            seed: getRandomNumber(1000, 100000000),
            used_random_seed: true,
            negative_prompt: "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,",
            num_outputs: 1,
            num_inference_steps: 35,
            guidance_scale: 7,
            width: 512,
            height: 512,
            vram_usage_level: "high",
            sampler_name: "euler_a",
            use_stable_diffusion_model: "DreamShaper",
            clip_skip: false,
            use_vae_model: "",
            stream_progress_updates: true,
            stream_image_progress: false,
            show_only_filtered_image: true,
            block_nsfw: true,
            output_format: "jpeg",
            output_quality: 75,
            output_lossless: false,
            metadata_output_format: "none",
            original_prompt: data.prompt,
            active_tags: [],
            inactive_tags: [],
            save_to_disk_path: "/home/ai/Stable Diffusion UI",
            use_upscale: "RealESRGAN_x4plus",
            upscale_amount: "4"
        }

        axios.post("http://10.58.176.142:9000/render", requestData)
            .then(function (response) {
                console.log(response)
                setRenderData(response)
                setTimeout(getImageData, 7000)
        })
        reset();
    }

    useEffect(() => {
        console.log(renderData.data)
    }, [renderData]);

    function getImageData() {
        axios.get(`http://10.58.176.142:9000/image/stream/${renderData.data.task}`)
            .then((response) => {
                console.log(response);
                props.setImageData(response);
                return
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // Retry the request after 2 seconds
                setTimeout(getImageData, 2000);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3 w-1/2"}>
                <input type="text" className={"p-5 rounded-md text-black bg-slate-100 transition hover:bg-white focus:bg-white"} placeholder={"Skriv her.."} {...register("prompt", {required: true})}/>
                <button className={"bg-slate-800 py-3 rounded-md font-bold transition hover:bg-slate-300 hover:text-black"}>Generer</button>
            </form>
        </>
    )
}