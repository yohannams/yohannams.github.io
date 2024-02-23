import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const NavigationBar = () => {
  const handleClickScroll = (e) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <Navbar
        fluid={true}
        rounded={true}
        className="w-full fixed p-0 bg-transparent"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto w-11/12 mx-auto">
          <Link to="/" className="flex items-center">
            {/* <img
              src={LogoFinal}
              className="h-10 mr-3 w-16"
              alt="Connect"
            /> */}
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  onClick={() => handleClickScroll("home")}
                >
                  Home
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  onClick={() => handleClickScroll("profile")}
                >
                  Profile
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  onClick={() => handleClickScroll("portfolio")}
                >
                  Work & Projects
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  onClick={() => handleClickScroll("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
