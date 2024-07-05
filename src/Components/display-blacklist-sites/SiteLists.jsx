
import Site from "./Site"
export default function SiteLists({ RemoveBlockUrl, blockedLists }) {
    return (
        <>
            <p className='font-bold text-md text-left pt-5 pb-2'>BLOCKED SITES</p>
            <div
                className='p-4 rounded-lg  border-2 border-slate-600 h-32 overflow-auto space-y-2'>
                {blockedLists.map((url, index) => {
                    return <Site key={index} index={index} handleRemoveBlockedUrl={RemoveBlockUrl} url={url} />
                })}
            </div>
        </>
    )

}