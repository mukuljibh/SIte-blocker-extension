


export default function useModifyBlockList(inputUrl, blockedLists, setBlockLists) {
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
    return { RemoveBlockUrl, AddBlockUrl }

}