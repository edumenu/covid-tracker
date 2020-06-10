import React, {useState} from 'react'

function Header() {
  const [buttonVis, setButtonVis] = useState(true)  //Button status
  var isButtonVis = buttonVis ? 'block' : 'hidden';

  // This function switches isButtonVis from true to false and vice versa  
  const collapseAbout = () => {
    console.log(isButtonVis)
      buttonVis ? setButtonVis(false) : setButtonVis(true)
  }


    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
            <a href="/" className="font-bold text-white text-xl tracking-tight hover:text-yellow-400">Covid tracker</a>
          </div>
          <div className="block lg:hidden md:hidden">
            <button onClick={collapseAbout} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
          <div className={"w-full block lg:w-auto md:w-auto sm:auto " + isButtonVis}>
            <div className="text-lg lg:flex-grow md:flex-grow sm:flew-grow">
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 md:inline-block sm:inline-block font-bold text-white text-xl hover:text-yellow-400 mr-4">
                About
              </a>
            </div>
          </div>
        </nav>
    )
}

export default Header
