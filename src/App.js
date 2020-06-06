import React from 'react';
import './assets/main.css';

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
            <a href="#" className="font-semibold text-xl tracking-tight">Covid tracker</a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
          <div className="w-full block lg:w-auto">
            <div className="text-lg lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                About
              </a>
            </div>
          </div>
        </nav>

      <div className="container mx-auto my-64">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
          <div className="container max-w-full mx-auto py-24 px-6">

            <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
              <div className="relative block flex flex-col md:flex-row items-center">
                <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                  <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Hobby</h1>
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                    </div>
                    <div className="flex flex-wrap mt-3 px-6"> </div>
                    <div className="block flex items-center p-8  uppercase">
                      {/* <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"> Select </button> */}
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg border-b-4 border-blue-500">
                  <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"> Most Popular </div>
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Expert</h1>
                      Stripe offers everything needed to run an online business at
                      scale. Get in touch for details.
                  </div>
                  <div className="flex pl-12 justify-start sm:justify-start mt-3"></div>

                  <div className="block flex items-center p-8  uppercase">
                    {/* <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"> Select </button> */}
                  </div>
                </div>

                <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                  <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Enteprise </h1>
                      <h2 className="text-sm text-gray-500 text-center pb-6">€39 /mo</h2>
                      Stripe offers everything needed to run an online business
                      at scale. Get in touch for details.
                    </div>
                    <div className="flex flex-wrap mt-3 px-6"> </div>

                    <div className="block flex items-center p-8  uppercase">
                      <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"> Select </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
        
    </div>
  );
}

export default App;
