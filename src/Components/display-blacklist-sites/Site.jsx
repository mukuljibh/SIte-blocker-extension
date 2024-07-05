import React from 'react';

function Site({ url, handleRemoveBlockedUrl, index }) {
    return (
        <div>
            <div className='flex justify-between '>
                <p className='font-semibold text-lg'> {url} </p>
                <button onClick={() => handleRemoveBlockedUrl(index)} style={{ outline: "none" }}
                    className='outline-none border-none transition duration-300 text-white rounded-md hover:bg-red-400 '>
                    <img className='w-4' src='trash.png' />
                </button>
            </div>
        </div >
    )
}

export default Site