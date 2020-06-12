import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const CountrySearchResult = ({global, country}) => {
    const [countryDetail, setSingleCountryDetail] = useState([]);

    const setCountryDetail = (countrySelected) => {
        // setSingleCountryDetail(country)
        // console.log(countryDetail)
        localStorage.setItem('countryDetail', JSON.stringify(countrySelected));
    }
    
    return (
    <li className="border-b-2 border-gray-300 font-medium text-gray-600">
        <Link to={`/details`} className="hover:bg-blue-400 font-medium hover:text-white py-2 px-4 block whitespace-no-wrap" onClick={setCountryDetail.bind(this, country)}>{country.Country}</Link>
    </li>
    )
}

export default CountrySearchResult
