import React from 'react'
import PropTypes from 'prop-types'

function StatsCard({ global, countries }) {
    
    return (
        <div className="w-full h-full max-w-md sm:w-2/3 lg:w-1/2 sm:my-5 relative z-10  rounded-lg shadow-lg border-b-4 border-yellow-400 bg-white">
              <img className="w-full h-40 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
              <h1 className="text-lg font-bold text-blue-400 uppercase p-3 pb-0 text-center tracking-wide"> Covid Summary</h1>
              <div className="flex block overflow-y-auto pb-12 text-left text-sm sm:text-md max-w-md mx-auto mt-2 text-black px-8 py-6 lg:px-6">

                <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-6 sm:grid-cols-2">
                  <div id="jh-stats-positive" className="flex flex-col justify-center px-1 border-b-4 border-yellow-300 rounded">
                      <p className="text-2xl font-semibold text-center text-gray-600">{countries.length ? countries.length :"0"}</p>
                      <p className="text-md text-center text-gray-600">Total number of countries</p>
                  </div>

                  <div id="jh-stats-negative" className="flex flex-col justify-center px-1 border-b-4 border-yellow-300 rounded">
                  <p className="text-2xl font-semibold text-center redTextColor">{global['TotalConfirmed'] ? global['TotalConfirmed']:"0"}</p>
                      <p className="text-md text-center text-gray-600">Total confirmed cases</p>
                  </div>

                  <div id="jh-stats-negative" className="flex flex-col justify-center px-1 border-b-4 border-yellow-300 rounded">
                      <p className="text-2xl font-semibold text-center redTextColor">{global['TotalDeaths'] ? global['TotalDeaths']:"0"}</p>
                      <p className="text-md text-center text-gray-600">Total number of deaths</p>
                  </div>

                  <div id="jh-stats-neutral" className="flex flex-col justify-center px-1 border-b-4 border-yellow-300 rounded">
                      <p className="text-2xl font-semibold text-center text-green-500">{global['TotalRecovered'] ? global['TotalRecovered']:"0"}</p>
                      <p className="text-md text-center text-gray-600">Total number of recoveries</p>
                  </div>
                </div>

              </div>
              <div className="flex p-4 pb-16 justify-start sm:justify-start">
                  <p className="text-gray-600 font-bold"> This web application gives viewers an overview of Covid 19 case all over the world by country. All the information on this page was obtained from <a href="https://covid19api.com" target="_blank">https://covid19api.com</a>.   </p>
              </div>
        </div>
    )
}

// Proptype to determine the type of prop being used
StatsCard.propTypes = {
    global: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired
}

export default StatsCard
