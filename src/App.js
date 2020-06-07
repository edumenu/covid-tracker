import React from 'react';
import './assets/main.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      < Header />

      <div className="container mx-auto my-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
          <div className="container max-w-full mx-auto py-32 px-6">

            <div className="max-w-full md:max-w-6xl mx-auto md:px-8">
              <div className="relative block flex flex-col md:flex-row items-center">
                {/* <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 z-0 rounded-lg shadow-lg md:-mr-4"> */}
                  <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Hobby</h1>
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                    </div>
                    <div className="flex flex-wrap mt-3 px-6"> </div>
                    <div className="block flex items-center p-8  uppercase">
                      {/* <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"> Select </button> */}
                    </div>
                  </div>
                {/* </div> */}

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
