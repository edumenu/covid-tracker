import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/main.css';
import loader from './assets/images/spinnerload.gif';

import Header from './components/Header';
import CountryDetail from './pages/CountryDetail';
import GraphCard from './components/GraphCard';
import StatsCard from './components/StatsCard';
import FormCard from './components/FormCard';
import ErrorMessage from './components/ErrorMessage';
import About from './pages/About';

class App extends Component {
  state = {
    countries: JSON.parse(localStorage.getItem('countries')) || [],
    global: JSON.parse(localStorage.getItem('global')) || {},
    totalNumberOfCountries: '',
    loading: true,
    errorMessage: '',
    errorStatus: false,
  }

  async componentDidMount() {
    // Obtaining the counter in the local storage
    var counter = localStorage.getItem('counter')
    // Check for null counter
    if(counter === null) this.getCovidData();

    // Checking for counter less than 6 to prevent multiple calls to the api
    if (counter < 6) {
      this.setState({
        // Increase counter by 1
        counter: counter++,
     });
      // increasing counter when it's less than 8
      // Setting the new counter after increment
      localStorage.setItem('counter', counter)
    } else {
      // Clear the locla storage and call the get function
      localStorage.clear();
      this.getCovidData();
    }

  }

  // Get request to fetch data
  getCovidData() {
    // GET request using fetch with error handling
    fetch('https://api.covid19api.com/summary')
      .then(async response => {
        const data = await response.json();
        this.loading = false

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.setState({
          // Setting the values of countries and latest 
          countries: data.Countries,
          global: data.Global,
        });

        // setting the local values
        localStorage.setItem('countries', JSON.stringify(data.Countries));
        localStorage.setItem('global', JSON.stringify(data.Global));
        localStorage.setItem('counter', 0);

      })
      .catch(error => {
        this.setState({
          // Setting the error message from the Api 
          errorMessage: "An error occured with the Covid Api. Please try again later",
          errorStatus: true
        });

        setTimeout(function () {
          // Remove error message after 5 seconds
          this.setState({ errorStatus: false });
        }.bind(), 5000);
      });
  }


  render() {
    //  Setting the state values
    const { countries, global, errorMessage, errorStatus } = this.state;

    return (
      <Router>
        <div className="App">
          {/* Header component */}
          < Header />
          {/* Error Messgae  */}
          <ErrorMessage errorMessage={errorMessage} errorStatus={errorStatus} />
          <div className="container mx-auto">
            <div className="container max-w-full mx-auto py-2">
              {/* Loader image */}
              {this.loading ? <img className="mx-auto my-auto" src={loader} alt="loading" /> :
                <div className="relative block flex flex-col md:flex-row items-center">
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                      {/* Graphvard component */}
                      <GraphCard global={global} />
                      {/* Statscard component */}
                      <StatsCard global={global} countries={countries} />
                      {/* Formcard component */}
                      <FormCard global={global} countries={countries} />
                    </React.Fragment>
                  )} />
                </div>
              }
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
