import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>

{/* 
<div className="flex flex-wrap place-items-center h-auto">
  <section className="relative mx-auto">

    <nav className="flex justify-between bg-slate-700 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">Logo Here.</a>
  
        <ul className="hidde md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-gray-200" href="#">Home</a></li>
          <li><a className="hover:text-gray-200" href="#">Catagory</a></li>
          <li><a className="hover:text-gray-200" href="#">Collections</a></li>
          <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
        </ul>
        
        <div className="hidden xl:flex items-center space-x-5 ">
          <a className="hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
          </a>
      
          <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          
        </div>
      </div>
      
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    
  </section>
</div>
 
 */}
<header
  className="bg-gray-500 sm:flex justify-between sm:px-4 sm:py-1 py-2 sm:items-center"
  data-controller="navbar" data-navbar-state-value="false">
  <div className="flex justify-between px-4 py-1 sm:p-0 items-center">
    <div className="font-bold text-xl  font-mono text-gray-200">
      <span className="text-orange-400">Dev</span>Prof
    </div>
    
    <div className="sm:hidden">
      <button className="text-orange-400 focus:text-white focus:outline-none hover:text-white block"
        type="button"
        data-action="click->navbar#toggle" >
        <span className="sr-only">Open main menu</span>
        <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path data-navbar-target="x"    strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" className="hidden" />
          <path data-navbar-target="bars" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      
    </div>
  </div>

  <div className="hidde sm:flex px-2 pt-2 pb-4 sm:pb-2" data-navbar-target="menu">
  <Link className="block text-gray-200 font-semibold hover:bg-gray-800 rounded px-2 py-1" to="app">Home</Link>
  <Link className="block text-gray-200 font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2" to="contact">Contact Us</Link>
 
  </div>
  <div className="hidden">
  <a className="flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-400 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
  </div>
</header>

    </>
  )
}

export default Navbar
    //       <ul className="hidde gap-9 flex px-4 mx-auto font-semibold font-heading">
    //         <li>        
    //  <Link className="text-white hover:text-gray-200" to="app">Home</Link>
    //           </li>
    //         <li>
    //  <Link className="text-white hover:text-gray-200">Contact Us</Link>
    //         </li>
    //         <li>
    //  <Link className="text-white hover:text-gray-200" to="singleproduct">Single</Link>
    //         </li>
    //       </ul>