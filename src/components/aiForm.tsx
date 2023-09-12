import axios from "axios";
import {useForm} from "react-hook-form";
import {useState} from "react";

type Props = {
    setImageData(): void
}

export default function aiForm(props:Props) {

    const {handleSubmit, reset, register} = useForm()

    const [renderData, setRenderData] = useState([])

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function onSubmit(data: any) {

        const requestData = {
            "prompt": data.prompt,
            "seed": getRandomNumber(1000, 100000000),
            "used_random_seed": true,
            "negative_prompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,",
            "num_outputs": 1,
            "num_inference_steps": 35,
            "guidance_scale": 7,
            "width": 512,
            "height": 512,
            "vram_usage_level": "high",
            "sampler_name": "euler_a",
            "use_stable_diffusion_model": "DreamShaper",
            "clip_skip": false,
            "use_vae_model": "",
            "stream_progress_updates": true,
            "stream_image_progress": false,
            "show_only_filtered_image": true,
            "block_nsfw": true,
            "output_format": "jpeg",
            "output_quality": 75,
            "output_lossless": false,
            "metadata_output_format": "none",
            "original_prompt": data.prompt,
            "active_tags": [],
            "inactive_tags": [],
            "save_to_disk_path": "/home/ai/Stable Diffusion UI",
            "use_upscale": "RealESRGAN_x4plus",
            "upscale_amount": "4"
        }

        axios.post("10.58.176.142:9000/render", requestData)
            .then(function (response) {
                setRenderData(response)
        })

        setTimeout(getImageData, 7000)
    }

    function getImageData() {
        axios.get(`10.58.176.142:9000/image/stream/${renderData.task}`)
            .then((response) => {
                console.log(response);
                props.setImageData(response);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={"Skriv her.."} {...register("prompt", {required: true})}/>
                <button>Generer</button>
            </form>
        </>
    )
}