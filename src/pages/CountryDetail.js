import React, { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage';
import BackButton from '../assets/images/back.png'
import NoImage from '../assets/images/no-image.jpg'
import { withRouter } from 'react-router-dom';
import { formatDate, formatNumbers, nativeLanguage, convertObjectToArray, findPercentage } from './UtilityFunctions'

const CountryDetail = (props) => {
    const [countryDetail, setCountryDetail] = useState([]);
    const [moreCountryDetail, setMoreCountryDetail] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorStatus, seterrorStatus] = useState(false);

    useEffect(() => {
        setCountryDetail(JSON.parse(localStorage.getItem('countryDetail')))
        fetchMoreCountryDetail((JSON.parse(localStorage.getItem('countryCode'))))
      },[]);

      // This function fetch more information on a country
      const fetchMoreCountryDetail= (countryCode) =>  {
          // GET request using fetch with error handling
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            // Setting the values of countries and latest 
            setMoreCountryDetail(data)

        })
        .catch(error => {
            // Setting the error message from the Api and changing the status to true to display error message
            setErrorMessage("An error occured with the Country Api. Please try again later")
            seterrorStatus(true)

            setTimeout(function() {
                // Setting the timer to remove error message
                seterrorStatus(false)
                }.bind(),5000)
        });
      }

    return (
        <React.Fragment>
         {/* Error Messgae */}
         <ErrorMessage errorMessage={errorMessage} errorStatus={errorStatus} />  
        <div className="bg-gray-100 rounded rounded-t-lg overflow-hidden object-center mx-auto shadow-lg max-w-3xl">
            {/* {fetchMoreCountryDetail(countryDetail.CountryCode)} */}
            <div className="flex 0 mt-4">
                <div>
                <a href="/#" onClick={props.history.goBack}><img src={BackButton} alt="back" className="h-12 mx-auto rounded-md" /></a>
                </div>
                <img src={moreCountryDetail.flag ? moreCountryDetail.flag : NoImage } alt="Country" className="h-32 mx-auto rounded-md" />		
            </div>
            <div className="text-center px-3 pb-2">
                <h1 className="text-gray-600 text-2xl font-bold font-sans">{ countryDetail.Country ? countryDetail.Country : "N/A" }</h1>
            </div>
            <div className="px-12 sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div id="jh-stats-positive" className="flex flex-col justify-center px-1 bg-white shadow-md border-b-2 border-gray-300 rounded">
                    <div>
                    <p className="flex items-center justify-end text-green-500 text-md">
                            <span className="font-bold">{findPercentage(countryDetail.NewDeaths,countryDetail.TotalDeaths)}%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path className="heroicon-ui" d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z" />
                            </svg>
                    </p>
                    </div>
                    <p className="text-2xl font-semibold text-center text-gray-600">{ formatNumbers(countryDetail.TotalDeaths ? countryDetail.TotalDeaths: "0") }</p>
                    <p className="text-md font-semibold text-center text-gray-500">Total number of deaths</p>
                </div>

                <div id="jh-stats-negative" className="flex flex-col justify-center px-1 bg-white shadow-md border-b-2 border-gray-300 rounded">
                    <div>
                        <div>
                        <p className="flex items-center justify-end text-red-500 text-md">
                            <span className="font-bold">{findPercentage(countryDetail.NewConfirmed,countryDetail.TotalConfirmed)}%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path className="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z" />
                            </svg>
                        </p>
                        </div>
                        <p className="text-2xl font-semibold text-center text-gray-600">{ formatNumbers(countryDetail.TotalConfirmed ? countryDetail.TotalConfirmed : "0" ) }</p>
                        <p className="text-md font-semibold text-center text-gray-500">Total confirmed cases</p>
                    </div>
                </div>
                
                <div id="jh-stats-negative" className="flex flex-col justify-center px-1 bg-white shadow-md border-b-2 border-gray-300 rounded">
                    <div>
                        <div>
                        <p className="flex items-center justify-end text-red-500 text-md">
                            <span className="font-bold">{findPercentage(countryDetail.NewRecovered,countryDetail.TotalRecovered)}%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path className="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z" />
                            </svg>
                        </p>
                        </div>
                        <p className="text-2xl font-semibold text-center text-gray-600">{ formatNumbers(countryDetail.TotalRecovered ? countryDetail.TotalRecovered : "0") }</p>
                        <p className="text-md font-semibold text-center text-gray-500">Total mumber of recovered</p>
                    </div>
                </div>
                
            </div>

            <div className="md:w-1/2 h-full sm:w-full rounded-lg shadow-lg bg-white mx-auto my-4">
                <div className="flex 0 px-5 py-4">
                    <span className="font-bold mx-auto text-gray-600 text-lg">More Information</span>
                    <div>
                        <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
                    </div>
                </div>
            
                <div className="block flex overflow-y-auto px-10 py-2 mb-12 text-gray-600">
                    <ul className="dropdown-menu w-full h-full relative text-gray-700 h-10">
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">Date: {formatDate(countryDetail.Date)}</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">Population: {formatNumbers(moreCountryDetail.population)}</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">Region: {moreCountryDetail.region ? moreCountryDetail.region : "N/A"}</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">Native language: {nativeLanguage(moreCountryDetail.languages)}</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">Lat: {convertObjectToArray(moreCountryDetail.latlng)[0]} , long: {convertObjectToArray(moreCountryDetail.latlng)[1]}</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">New Deaths: { countryDetail.NewDeaths ? countryDetail.NewDeaths : "0" }</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">New Confirmed: { countryDetail.NewConfirmed ? countryDetail.NewConfirmed: "0" }</li>
                        <li className="text-gray-600 border-b-2 border-gray-100 p-1">New of Recovered: { countryDetail.NewRecovered ? countryDetail.NewRecovered : "0" }</li>
                    </ul>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default withRouter(CountryDetail)
