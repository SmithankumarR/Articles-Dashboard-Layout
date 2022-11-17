import React from 'react'

function NotFound() {
    return (
        <div className='w-full'>
            <h2 className='text-center py-4 bg-blue-400 font-bold text-white'>404 Page Not Found on routes not defined</h2>
            <img className="w-full  m-auto" src="/images/error.png" alt="" />
        </div>
    )
}

export default NotFound;