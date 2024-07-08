import { useState, useEffect } from "react";

export function useSetBlockList() {
    const [blockedLists, setBlockLists] = useState([]);

    useEffect(() => {
        chrome.storage.local.get(['blockedLists'], ({ blockedLists }) => {
            setBlockLists(blockedLists || []);
        })
    }, [])

    return { blockedLists, setBlockLists }
}
