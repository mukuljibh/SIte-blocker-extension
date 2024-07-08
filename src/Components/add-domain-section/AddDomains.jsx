export default function AddDomains({ handleInput, AddBlockUrl }) {
    return (
        <div className>
            <p className='text-3xl font-bold'>Block Sites</p>
            <p className='text-lg font-thin text-slate-400'>Block sites permanently</p>
            <div className='flex gap-3'>
                <input
                    className=" w-72 pl-3 pr-3 rounded-lg py-1 border-2 bg-neutral-300 transition duration-200 ease-in-out hover:border-gray-200 hover:shadow-md focus:border-gray-200 focus:shadow-md outline-none "
                    placeholder="Enter a domain"
                    onChange={handleInput}></input>
                <button style={{ outline: "none" }}
                    className="border-none w-20 transition duration-300 ease-in-out bg-red-600 text-white rounded-md hover:bg-red-400"
                    onClick={AddBlockUrl}>
                    Add Sites
                </button>
            </div>
        </div>
    )
}