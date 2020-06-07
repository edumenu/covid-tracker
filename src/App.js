import React from 'react';
import './assets/main.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      < Header />

      <div className="container mx-auto my-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
          <div className="container max-w-full mx-auto py-6">
            {/* <div className="max-w-full md:max-w-6xl md:px-2"> */}
              <div className="relative block flex flex-col md:flex-row items-center">

                {/* Graph card */}
                <div className="h-full max-w-md bg-white text-black border-b-4 border-yellow-500 rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/28/06/57/medicine-5103043_960_720.jpg" alt="avatar" />
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black lg:px-2">
                        <h1 className="text-lg font-medium uppercase p-1 pb-0 text-center tracking-wide"> Summary Graph</h1>
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
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

                {/* Stats card */}
                <div className="w-full h-full max-w-md sm:w-2/3 lg:w-1/2 sm:my-5 relative z-10 bg-white rounded-lg shadow-lg border-b-4 border-blue-500">
                  <img className="w-full h-40 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png" alt="avatar" />
                    <div className="block text-left text-sm sm:text-md max-w-md mx-auto mt-12 text-black px-8 py-6 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Covid Summary</h1>
                      Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                          Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                          Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                          Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                          Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                          Stripe offers everything needed to run an online business
                          at scale. Get in touch for details.
                    </div>
                    <div className="flex pl-12 justify-start sm:justify-start mt-3"></div>

                    <div className="block flex items-center p-8  uppercase">
                      {/* <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"> Select </button> */}
                    </div>
                </div>

                {/* Form card */}
                <div className="h-full max-w-md bg-white text-black border-b-4 border-yellow-500 rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <img className="w-full h-24 object-cover object-center rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/03/15/17/22/mask-4934337_960_720.jpg" alt="avatar" />
                    {/* <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black lg:px-2"> */}
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"> Select a country</h1>
                      <div class="Flexjustify-center text-lg p-3 mb-2 border-b-2 border-grey-100">
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">A</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">B</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">C</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">D</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">E</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">F</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">G</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">H</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">I</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">J</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">K</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">L</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">M</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">N</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">O</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">L</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">M</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">N</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">O</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">L</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">M</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">N</button>
                        <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded shadow-md">O</button>
                      </div>
                    {/* </div> */}
                    {/* <div className="flex flex-wrap mt-3 px-6"> </div> */}
                    <div className="block flex pb-56 uppercase overflow-y-auto">
                      <ul className="dropdown-menu w-full relative text-gray-700 h-10">
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">United States</a></li>
                      </ul>
                    </div>
                </div>
              </div>
            {/* </div> */}
          </div>




        </div>
        
    </div>
  );
}

export default App;
