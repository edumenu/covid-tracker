import React from 'react'

function About() {
    return (
        <React.Fragment>  
        <div className="w-full h-full max-w-lg mx-auto my-5 relative z-10  rounded-lg shadow-lg border-b-4 border-yellow-400 bg-white">
            <img className="w-full h-40 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
            <h1 className="text-lg font-bold text-blue-400 uppercase p-3 pb-0 text-center tracking-wide"> About </h1>
            <div className="p-2 pb-32 pb-2 ">
                <p className="text-gray-600 my-4 p-4 font-bold"> This is a react web application built from scratch using tailwind css. All information on this web application 
                were obtained from a <a className="text-indigo-500" href="https://covid-19-apis.postman.com/">Covid 19</a> and <a className="text-indigo-500" href="https://restcountries.eu/">Countries api</a>. Users can gather a summary of information of all
                Covid 19 cases in every country all over the world. This application gives users the ability to search for countries individually to obtain more information. </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About
