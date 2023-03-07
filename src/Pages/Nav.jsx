import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    // console.log("hi")
  }, []);

  const clickHandler = (event) => {
		if(event.detail == 5){
      navigate('/login');
    }
	}

  
  
    // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('sample.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'sample.pdf';
        alink.click();
      })
    })
  }
  return (
    <>
      <nav className="bg-white shadow-lg Nav">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <div  onClick={clickHandler} className="flex items-center py-4 px-2">
                  <img
                   id="tripple"
                    src="/pp1.jpg"
                    alt="Logo"
                    className="h-8 w-8 mr-2 rounded-full"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    Htet Thu Ya Aung
                  </span>
                </div>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1 ml-2 ">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="py-4 px-2 text-green-900 border-b-2 border-green-900 font-semibold "
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="py-4 px-2 text-gray-500 font-semibold  transition duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/project"
                      className="py-4 px-2 text-gray-500 font-semibold transition duration-300"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="py-4 px-2 text-gray-500 font-semibold  transition duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ml-2 ">
              <Link
                to="/"
                onClick={onButtonClick}
                className="py-2 px-2 font-medium text-white bg-green-900 rounded hover:bg-green-800 transition duration-300"
              >
                Download CV
              </Link>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="md:hidden flex justify-between mobile-menu items-center">
          <Link
            to="/"
            className="py-4 px-2 text-green-900  border-green-800 font-semibold "
          >
            Home
          </Link>

          <Link
            to="/service"
            className="block text-sm px-2 py-4 hover:bg-green-800 hover: transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/project"
            className="block text-sm px-2 py-4 hover:bg-green-800 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block text-sm px-2 py-4 hover:bg-green-800 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={onButtonClick}
            className="py-2 px-2 font-medium text-white bg-green-900 rounded hover:bg-green-800 transition duration-300"
          >
            Download CV
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
