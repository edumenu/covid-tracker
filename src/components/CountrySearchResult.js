import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function CountrySearchResult({country}){
    const countryCode = country.CountryCode;

    const setCountryDetail = (countrySelected) => {
        // Storing country detail and code in the local storage 
        localStorage.setItem('countryDetail', JSON.stringify(countrySelected));
        localStorage.setItem('countryCode', JSON.stringify(countrySelected.CountryCode));
    }
    
    return (
    <li className="border-b-2 border-gray-300 font-medium text-gray-600">
        {/* Link to navigate to the details page */}
        <Link to={{pathname: `/details`, query: {countryCode}}} className="hover:bg-blue-400 font-medium hover:text-white py-2 px-4 block whitespace-no-wrap" onClick={setCountryDetail.bind(this, country)}>{country.Country}</Link>
    </li>
    )
}

// Proptype to determine the type of prop being used
CountrySearchResult.propTypes = {
    country: PropTypes.object.isRequired,
}

export default CountrySearchResult
