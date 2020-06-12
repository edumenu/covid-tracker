import React, { useState } from 'react';
import PropTypes from 'prop-types'
import AlphabetButtons from './AlphabetButtons'
import CountrySearchResult from './CountrySearchResult'

const FormCard = ({global, countries}) => {
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const [countriesResult, setCountriesResult] = useState([]);

    const countrySearch = (alphabet) => {
        // Filtering through the countries to find the
        var result = countries.filter(country => country.Country[0] == alphabet)
        // Setting countries to the countriesResult
        setCountriesResult(result)
    }

    return (
        <div className="h-full max-w-md bg-white text-black border-b-4 border-yellow-400 rounded-lg shadow-inner shadow-lg overflow-hidden">
              <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
              <h1 className="text-lg font-bold text-blue-400 p-3 pb-0 text-center tracking-wide"> Select a country</h1>
              <div className="Flex justify-center text-lg p-3 mb-2 border-b-2 border-grey-100">
                  {/* Creating a list of alphabet buttons */}
                  {[...alpha].map((alphabet, index) => <AlphabetButtons key={index} alphabet={alphabet} countrySearch={countrySearch}/> ) }
              </div>
              <div className="block flex pb-56 bg-white uppercase overflow-y-auto">
                <ul className="dropdown-menu w-full relative text-gray-700 h-10">
                    { countriesResult.map((result, index) => <CountrySearchResult key={index} global={global} country={result}/> )}
                </ul>
              </div>
            </div>
    )
}

// Proptype to determine the type of prop being used
FormCard.propTypes = {
    countries: PropTypes.array.isRequired,
    global: PropTypes.object.isRequired,
}

export default FormCard
