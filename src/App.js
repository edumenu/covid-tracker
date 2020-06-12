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
      global: {},
      totalNumberOfCountries: '',
      loading: false,
      errorMessage: '',
      errorStatus: false, 
    }

    async componentDidMount() {
        // Calling the get function
        // this.getCovidData();
        this.setState({
          // Seeting the values of countries and latest 
          countries: JSON.parse(localStorage.getItem('countries')),  
          global: JSON.parse(localStorage.getItem('global')),  
      });

    }

    // Get request to fetch data
    getCovidData(){
        // GET request using fetch with error handling
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

            // setter
            localStorage.setItem('countries', JSON.stringify(data.Countries));
            localStorage.setItem('global', JSON.stringify(data.Global));

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
        const { countries, global, errorMessage, errorStatus } = this.state;

        return (
            <Router>
            <div className="App">
              {/* Header component */}
              < Header />
              {/* Error Messgae */}
              <ErrorMessage errorMessage={errorMessage} errorStatus={errorStatus} />
              <div className="container mx-auto my-10">
                <div className="container max-w-full mx-auto py-2">
                  <div className="relative block flex flex-col md:flex-row items-center">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                        {/* Graph Card */}
                        <GraphCard global={global}/>
                        {/* Stats card */}
                        <StatsCard global={global} countries={countries} />
                        {/* Form card */}
                        <FormCard global={global} countries={countries}/>
                      </React.Fragment>
                    )} />
                  </div>
                </div>
              </div>
              {/* Country details components */}
              <Route path="/details" component={CountryDetail} />
              {/* About page for the web application  */}
              <Route path="/about" component={About} />
            </div>
            </Router>
        )
    }
}

export default App
