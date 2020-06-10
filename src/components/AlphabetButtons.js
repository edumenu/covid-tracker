import React from 'react'
import PropTypes from 'prop-types'

function AlphabetButtons({ alphabet }) {
    return (
    <button className="bg-white text-gray-600 hover:bg-blue-400 hover:text-white font-bold py-1 px-2 rounded shadow-md">{alphabet}</button>
    )
}

AlphabetButtons.propTypes = {
    alphabet: PropTypes.string.isRequired
}

export default AlphabetButtons
