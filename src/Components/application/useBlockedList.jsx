import { useState, useEffect } from "react";
import useInput from "../../shared/hooks/useInput";

export function useBlockedList() {
    const [blockedLists, setBlockLists] = useState([]);
    const { inputUrl, handleInput } = useInput()
    useEffect(() => {
        chrome.storage.local.get(['blockedLists'], ({ blockedLists }) => {
            setBlockLists(blockedLists || []);
        })
    }, [])

    function RemoveBlockUrl(index) {
        const updatedBlockedList = blockedLists.filter((url, ind) => {
            return ind != index
        })
        chrome.storage.local.set({ blockedLists: updatedBlockedList }, () => {
            setBlockLists([...updatedBlockedList])
        });
    }
    function AddBlockUrl() {
        //make sure that input must not empty
        if (inputUrl.length != 0) {
            setBlockLists((prevBlockedLists) => {
                const updatedBlockedLists = [...prevBlockedLists, inputUrl];
                chrome.storage.local.set({ blockedLists: updatedBlockedLists }, () => {
                });
                return updatedBlockedLists
            })
        } else {
            alert("Invalid Host Name")
        }
    }

    return { handleInput, inputUrl, blockedLists, RemoveBlockUrl, AddBlockUrl }
}
