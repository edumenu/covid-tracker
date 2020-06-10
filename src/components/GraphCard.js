import React  from 'react'
import {PieChart, Pie, Tooltip,} from 'recharts';

function GraphCard() {
    const data01 = [
        { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
      ];

    return (
        <div className="h-full max-w-md bg-white text-black border-b-4 border-yellow-400 bg-white rounded-lg shadow-inner shadow-lg overflow-hidden">
        <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
        <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black lg:px-2">
          <h1 className="text-lg font-bold text-blue-400 uppercase p-1 pb-0 text-center tracking-wide"> Summary Graph</h1>
          <PieChart width={350} height={300}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={180} cy={150} outerRadius={70} fill="#67b4ed" label />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-wrap mt-3 px-6"> </div>
        <div className="block flex items-center p-8  uppercase">
        </div>
      </div>
    )
}

export default GraphCard
