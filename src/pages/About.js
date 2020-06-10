import React from 'react'

function About() {
    return (
        <React.Fragment>  
        <div className="bg-gray-100 rounded rounded-t-lg overflow-hidden object-center mx-auto shadow max-w-3xl">
            <div className="text-center px-3 pb-2">
                <h1 className="text-black text-2xl bold font-sans">About</h1>
            </div>
            <div className="px-12 sm:grid sm:h-32 sm:grid-flow-row">
                <p>During 'The Last Dance' documentary, Michael Jordan denied the rumor that he had kept Isiah Thomas off 
                    the Dream Team. Audio has now come out of Jordan telling NBA reporter Jack McCallum that he wouldn’t 
                    play if Isiah was on the team</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About
