import axios from "axios";

export default function aiForm() {

    function getImageData() {
        axios.get("10.58.176.142:9000/image/stream")
    }

    return (
        <>
            <form action="">
                <input type="text"/>
            </form>
        </>
    )
}