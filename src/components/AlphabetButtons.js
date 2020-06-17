import React from 'react'
import PropTypes from 'prop-types'

function AlphabetButtons({ alphabet, countrySearch }) {
    return (
    <button onClick={countrySearch.bind(this, alphabet)} className="bg-white text-gray-600 hover:bg-blue-400 hover:text-white font-bold py-1 px-2 rounded shadow-md">{alphabet}</button>
    )
}

AlphabetButtons.propTypes = {
    alphabet: PropTypes.string.isRequired,
    countrySearch: PropTypes.func.isRequired,
}

export default AlphabetButtons
