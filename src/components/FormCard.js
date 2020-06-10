import React from 'react';
import PropTypes from 'prop-types'
import AlphabetButtons from './AlphabetButtons'

function FormCard() {
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    return (
        <div className="h-full max-w-md bg-white text-black border-b-4 border-yellow-400 rounded-lg shadow-inner shadow-lg overflow-hidden">
              <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
              <h1 className="text-lg font-bold text-blue-400 p-3 pb-0 text-center tracking-wide"> Select a country</h1>
              <div className="Flex justify-center text-lg p-3 mb-2 border-b-2 border-grey-100">
                  {[...alpha].map((alphabet, index) => <AlphabetButtons key={index} alphabet={alphabet}/> )}
              </div>
              <div className="block flex pb-56 bg-white uppercase overflow-y-auto">
                <ul className="dropdown-menu w-full relative text-gray-700 h-10">
                  <li className="border-b-2 border-gray-300 font-medium text-gray-600"><a className="hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                  <li className="border-b-2 border-gray-300 font-medium text-gray-600"><a className="hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                </ul>
              </div>
            </div>
    )
}

// Proptype to determine the type of prop being used
FormCard.propTypes = {
    
}

export default FormCard
