
import { useState, useEffect } from "react";

export default function useToggleState() {
    const [checked, setChecked] = useState(true);
    useEffect(() => {
        chrome.storage.local.get(['toggeleState'], ({ toggeleState }) => {
            setChecked(toggeleState)
        })
    }, [])
    function HandleToggle(event) {
        const toggeleState = event.target.checked
        chrome.storage.local.set({ toggeleState }, () => {
            setChecked(toggeleState)
        });
    }
    return { checked, HandleToggle }

}