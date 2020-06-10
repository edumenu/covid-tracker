import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/main.css';
import Header from './components/Header';
import CountryDetail from './pages/CountryDetail';
import GraphCard from './components/GraphCard';
import StatsCard from './components/StatsCard';
import FormCard from './components/FormCard';
import ErrorMessage from './components/ErrorMessage';
import About from './pages/About';

class App extends Component {
    state = {
      countries: [],
      global: [],
      totalNumberOfCountries: '',
      loading: false,
      errorMessage: '',
      errorStatus: false,  
    }

    async componentDidMount() {
        // GET request using fetch with error handling
        // fetch('https://api.npms.io/v2/invalid-url')
        fetch('https://api.covid19api.com/summar')
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({
                // Seeting the values of countries and latest 
                countries: data.Countries,
                global: data.Global,    
            });

        })
        .catch(error => {
            this.setState({
                // Setting the error message from the Api 
                errorMessage: error.toString(),
                errorStatus: true
            });

            setTimeout(function() {
                // Setting the timer to remove error message
                    this.setState({errorStatus: false});
                }.bind(this),5000);

        });

    }


    render() {
        const { countries, global, errorMessage, errorStatus, countNUmberOfCountries } = this.state;

        return (
            <Router>
            <div className="App">
              {/* Header component */}
              < Header />
              {/* Error Messgae */}
              <ErrorMessage errorMessage={errorMessage} errorStatus={errorStatus} />
                {/* <h1>{countries.map(location => (
                <li key={location.id}>{location.country}</li> //Always remember to pass a key whne mapping through a list
              ))}</h1> */}
              <div className="container mx-auto my-10">
                <div className="container max-w-full mx-auto py-2">
                  <div className="relative block flex flex-col md:flex-row items-center">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                        {/* Graph Card */}
                        <GraphCard />
                        {/* Stats card */}
                        <StatsCard global={global} countries={countries} />
                        {/* Form card */}
                        <FormCard />
                      </React.Fragment>
                    )} />
                  </div>
                  {/* </div> */}
                </div>
              </div>
              {/* Country details components */}
              <Route path="/details" component={CountryDetail} />
              <Route path="/about" component={About} />
            </div>
            </Router>
        )
    }
}

export default App
