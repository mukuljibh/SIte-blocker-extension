import { useState } from "react";


export default function useInput() {
    const [inputUrl, setInputUrl] = useState();

    function HandleInput(event) {
        setInputUrl(event.target.value)
    }
    return { HandleInput, inputUrl }
}



