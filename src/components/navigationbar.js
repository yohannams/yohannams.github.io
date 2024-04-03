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
    <Navbar
      expand="lg"
      className="w-full fixed p-0 lg:bg-transparent md:bg-transparent sm:bg-transparent"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container flex-col md:flex-row flex-wrap items-center justify-between mx-auto md:w-11/12 mx-auto">
        <ul className="flex mt-4 no-border border-gray-100 rounded-lg flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700 float-right">
          <li className="mr-2">
            <Link
              to="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:bg-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleClickScroll("home")}
            >
              Home
            </Link>
          </li>
          {/* <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  onClick={() => handleClickScroll("profile")}
                >
                  Profile
                </Link>
              </li> */}
          <li className="mr-2">
            <Link
              to="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:bg-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleClickScroll("portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:bg-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleClickScroll("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
