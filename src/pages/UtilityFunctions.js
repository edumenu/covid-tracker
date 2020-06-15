//This file contians all utility functions for the application

// This function for formating dates
export const formatDate = (countryDate) => {
    countryDate ? countryDate = new Date(countryDate).toLocaleDateString() : countryDate = 'N/A'
    return countryDate
}

// Function to format numbers
export const formatNumbers = (countryPopulation) => {
    countryPopulation ? countryPopulation = new Intl.NumberFormat().format(countryPopulation) : countryPopulation = 'N/A'
    return countryPopulation
}

// Function for returning string in a nested object
export const nativeLanguage = (languages) => {
    languages ? languages.map((d) => languages = d['name']) : languages = "N/A"
    return languages
}

// Function for converting object to array
export const convertObjectToArray = (latlng) => {
    let lat_long_array = []
    latlng ? latlng.map((item) => { lat_long_array.push(item) }) : lat_long_array = ['N/A','N/A']
    return lat_long_array
}

// This function finds the percentages
export const findPercentage = (value, total)  => {
    return value && total ? ((value / total) * 100).toFixed(1) : 0;
}