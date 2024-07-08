import { useState } from "react";


export default function useInput() {
    const [inputUrl, setInputUrl] = useState();

    function handleInput(event) {
        setInputUrl(event.target.value)
    }
    return { handleInput, inputUrl }
}



