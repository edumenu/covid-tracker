import React from 'react'

function ErrorMessage({ errorStatus }) {
    var isError = errorStatus ? '' : 'hidden';

    return (
        <div className={"bg-red-900 text-center py-4 lg:px-4 md:px-2 " + isError}>
            <div className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
                <span className="font-semibold mr-2 text-left flex-auto">{"An error occured with the Api. Please try again later"}</span>
            </div>
        </div>
    )
}

export default ErrorMessage
