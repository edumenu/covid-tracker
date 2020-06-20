import React from 'react'
import PropTypes from 'prop-types'
import { formatNumbers} from '../pages/UtilityFunctions'

function StatsCard({ global, countries }) {

    return (
        <div className="w-full h-full max-w-md sm:w-2/3 lg:w-1/2 my-5 relative z-10  rounded-lg shadow-lg border-b-4 border-yellow-400 bg-white">
            <img className="w-full h-40 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
            <h1 className="text-lg font-bold text-blue-400 uppercase p-3 pb-0 text-center tracking-wide">Summary of cases worldwide</h1>
            <div className="flex block overflow-y-auto pb-12 text-left text-sm sm:text-md max-w-md mx-auto mt-2 text-black px-8 py-6 lg:px-6">

                <div className="sm:grid sm:h-32 w-full sm:grid-flow-row sm:gap-6 sm:grid-cols-2">
                    <div id="jh-stats-positive" className="flex flex-col px-1 border-b-4 border-yellow-300 rounded">
                        <p className="text-2xl font-semibold text-center text-gray-600">{formatNumbers(countries.length)}</p>
                        <p className="text-md text-center text-gray-600">Total number of countries</p>
                    </div>

                    <div id="jh-stats-negative" className="flex flex-col px-1 border-b-4 border-yellow-300 rounded">
                        <p className="text-2xl font-semibold text-center redTextColor">{formatNumbers(global['TotalConfirmed'])}</p>
                        <p className="text-md text-center text-gray-600">Total confirmed cases</p>
                    </div>

                    <div id="jh-stats-negative" className="flex flex-col px-1 border-b-4 border-yellow-300 rounded">
                        <p className="text-2xl font-semibold text-center redTextColor">{formatNumbers(global['TotalDeaths'])}</p>
                        <p className="text-md text-center text-gray-600">Total number of deaths</p>
                    </div>

                    <div id="jh-stats-neutral" className="flex flex-col px-1 border-b-4 border-yellow-300 rounded">
                        <p className="text-2xl font-semibold text-center text-green-500">{formatNumbers(global['TotalRecovered'])}</p>
                        <p className="text-md text-center text-gray-600">Total number of recoveries</p>
                    </div>
                </div>

            </div>
            <div className="flex p-4 pb-16 justify-start sm:justify-start">
                <p className="text-gray-600 font-bold"> This Covid 19 tracker is obtaining information from  
                <a className="text-indigo-500" href="https://covid19api.com/" target="_blank"> Covid 19 </a> and 
                <a className="text-indigo-500" href="https://restcountries.eu/" target="_blank"> Countries </a> API which is updated daily.</p>
            </div>
        </div>
    )
}

// Proptype to determine the type of prop being used
StatsCard.propTypes = {
    global: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired
}

export default StatsCard
