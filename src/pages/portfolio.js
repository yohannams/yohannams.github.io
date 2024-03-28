import React from "react";
import { Card } from "flowbite-react";
import portfolio4 from "../img/Portfolio-job.png";
import portfolio3 from "../img/Portfolio-inv.png";
import portfolio2 from "../img/Portfolio-kp.png";
import portfolio1 from "../img/Portfolio-maranatha.png";

const Portfolio = () => {
  const backgroundStyle = {
    background: "linear-gradient(261deg, #c69bf2, #8ef988, #91d7f5, #f3df8c)",
    backgroundSize: "800% 800%",
    animation: "AnimationName 32s ease infinite",
    paddingTop: "150px",
    paddingBottom: "150px",
  };

  return (
    <>
      <section id="portfolio" className="mx-auto w-full h-fit justify-center">
        <div
          style={backgroundStyle}
          className="px-6 py-6 sm:px-10 sm:py-20 items-center flex flex-col justify-center min-h-screen"
        >
          <h1 className="font-semibold text-center text-2xl sm:text-3xl mb-8 sm:mb-12 lg:mb-16">
            Work & Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-3/4 lg:w-1/2 mx-auto">
            <a
              href="https://one.maranatha.edu/"
              target="_blank"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="mb-4">
                <img
                  src={portfolio1}
                  className="grow h-full flex-1 rounded-lg w-92"
                ></img>
              </div>
            </a>
            <div className="mb-4 p-2">
              <div className="">
                <h5 className="text-l font-bold text-gray-900 dark:text-white grow mb-2">
                  Maranatha One
                </h5>
                <p className="text-xs mb-4">
                  Maranatha One is a website utilized by students, parents, and
                  staff of Maranatha. This website serves as a platform for
                  managing academic data of students, staff information,
                  research, and providing academic updates.
                </p>
                <div className="inline-flex gap-x-2 text-white">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2">HTML</p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    CSS
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Javascript
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    jQuery
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <a
                href="https://kamarpelajar.id/"
                target="_blank"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  src={portfolio2}
                  className="grow h-full flex-1 rounded-lg w-92"
                ></img>
              </a>
            </div>
            <div className="mb-4 p-2">
              <div className="">
                <h5 className="text-l font-bold text-gray-900 dark:text-white grow mb-2">
                  Kamar Pelajar
                </h5>
                <p className="text-xs mb-4">
                  Kamar Pelajar is a company operating in the travel tourism
                  sector. The Kamar Pelajar website processes room data, user
                  information, and room rentals worldwide.
                </p>
                <div className="inline-flex gap-x-2 text-white">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2">HTML</p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    CSS
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Javascript
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Laravel
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <a
                href="https://yohannams.github.io/by-invitation/"
                target="_blank"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  src={portfolio3}
                  className="grow h-full flex-1 rounded-lg w-92"
                ></img>
              </a>
            </div>
            <div className="mb-4 p-2">
              <div className="">
                <h5 className="text-l font-bold text-gray-900 dark:text-white grow mb-2">
                  Wedding Invitation
                </h5>
                <p className="text-xs mb-4">
                  This website is able to confirm guests and provide greetings
                  on the website, with the data being entered into a Google
                  spreadsheet.
                </p>
                <div className="inline-flex gap-x-2 text-white">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2">HTML</p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    CSS
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Javascript
                  </p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <a
                href="https://silly-crepe-7acfd3.netlify.app/"
                target="_blank"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  src={portfolio4}
                  className="grow h-full flex-1 rounded-lg w-92"
                ></img>
              </a>
            </div>
            <div className="mb-4 p-2">
              <div className="">
                <h5 className="text-l font-bold text-gray-900 dark:text-white grow mb-2">
                  Job Portal
                </h5>
                <p className="text-xs mb-4">
                  The website was developed during a React bootcamp conducted by
                  Sanbercode. This website is capable of managing job data, such
                  as viewing, editing, adding, and deleting data. It features
                  job CRUD operations, filtering, searching, registration,
                  login, and password changing functionalities.
                </p>
                <div className="inline-flex gap-x-2 text-white">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2">React</p>
                  <p className="text-xs grow bg-blue-500 rounded-3xl p-2">
                    Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
