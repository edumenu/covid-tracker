import React  from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function GraphCard({ global }) {

      const data = [
        {
          name: 'New Confirmed', uv: (!global['NewConfirmed'] || global['NewConfirmed'] === null ) ? 0 : global['NewConfirmed'],
        },
        {
          name: 'Total Confirmed', uv: (!global['TotalConfirmed'] || global['TotalConfirmed'] === null ) ? 0 : global['TotalConfirmed'],
        },
        {
          name: 'New Deaths', uv: (!global['NewDeaths'] || global['NewDeaths'] === null ) ? 0 : global['NewDeaths'],
        },
        {
          name: 'Total Deaths', uv: (!global['TotalDeaths'] || global['TotalDeaths'] === null ) ? 0 : global['TotalDeaths'],
        },
        {
          name: 'New Recovered', uv: (!global['NewRecovered'] || global['NewRecovered'] === null ) ? 0 : global['NewRecovered'],
        },
        {
          name: 'Total Recovered', uv: (!global['TotalRecovered'] || global['TotalRecovered'] === null ) ? 0 : global['TotalRecovered'],
        },
      ];  

    return (
        <div className="w-full h-full max-w-md bg-white text-black border-b-4 border-yellow-400 bg-white rounded-lg shadow-inner shadow-lg overflow-hidden">
        <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
        <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black lg:px-2">
          <h1 className="text-lg font-bold text-blue-400 uppercase p-1 pb-0 text-center tracking-wide"> Summary Graph</h1>
            <AreaChart width={420} height={320} data={data}
                    margin={{top: 10, right: 90, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#67b4ed' fill='#67b4ed' />
            </AreaChart>
        </div>
        {/* <div className="flex flex-wrap mt-3 px-6"> </div> */}
        <div className="block flex items-center p-8  uppercase">
        </div>
      </div>
    )
}

// Proptype to determine the type of prop being used
GraphCard.propTypes = {
  global: PropTypes.object.isRequired,
}

export default GraphCard
