import React from "react";
import { Card } from "flowbite-react";
import bg from "../img/bg.jpg";
import portfolio4 from "../img/Portfolio-job.png";
import portfolio3 from "../img/Portfolio-inv.png";
import portfolio2 from "../img/Portfolio-kp.png";
import portfolio1 from "../img/Portfolio-maranatha.png";

const Portfolio = () => {
  const backgroundStyle = {
    // background: "linear-gradient(261deg, #c69bf2, #8ef988, #91d7f5, #f3df8c)",
    // backgroundSize: "800% 800%",
    // animation: "AnimationName 32s ease infinite",
    // paddingTop: "150px",
    // paddingBottom: "150px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section
        id="portfolio"
        className="mx-auto w-full h-fit justify-center bg-slate-900"
      >
        <div className="px-6 py-28 sm:px-10 sm:py-20 md:py-20 items-center flex flex-col justify-center min-h-screen">
          <h1 className="font-semibold text-center text-2xl sm:text-3xl mb-8 sm:mb-12 lg:mb-16 text-slate-200">
            Portfolio
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 mx-auto">
            <div class="border-spacing-2 border-2 border-gray-400 p-2 hover:opacity-757 transition-opacity duration-300 mb-4">
              <a href="https://one.maranatha.edu/" target="_blank">
                <div class="flex justify-center">
                  <img
                    src="/static/media/Portfolio-maranatha.8e17c4d9e53cef6c4859.png"
                    class="grow h-full max-w-full rounded-lg"
                  />
                </div>
              </a>
              <div class="p-2">
                <h5 class="text-lg font-bold text-slate-200 grow mb-2">
                  Maranatha One
                </h5>
                <p class="text-sm mb-4 text-slate-200">
                  Maranatha One is a website utilized by students, parents, and
                  staff of Maranatha. This website serves as a platform for
                  managing academic data of students, staff information,
                  research, and providing academic updates.
                </p>
                <div class="flex flex-wrap gap-x-2 text-white spec">
                  <p class="text-xs bg-blue-500 rounded-3xl p-2 mb-2">HTML</p>
                  <p class="text-xs bg-blue-500 rounded-3xl p-2 mb-2">CSS</p>
                  <p class="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Javascript
                  </p>
                  <p class="text-xs bg-blue-500 rounded-3xl p-2 mb-2">jQuery</p>
                  <p class="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="border-spacing-2 border-2 border-gray-400 p-2 mb-4">
              <div className="">
                <a href="https://kamarpelajar.id/" target="_blank">
                  <img
                    src={portfolio2}
                    class="grow h-full max-w-full rounded-lg"
                  ></img>
                </a>
              </div>
              <div className="mb-4 p-2">
                <h5 className="text-l font-bold text-slate-200 grow mb-2">
                  Kamar Pelajar
                </h5>
                <p className="text-xs mb-4 text-slate-200">
                  Kamar Pelajar is a company operating in the travel tourism
                  sector. The Kamar Pelajar website processes room data, user
                  information, and room rentals worldwide.
                </p>
                <div className="flex flex-wrap gap-x-2 text-white spec">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    HTML
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    CSS
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Javascript
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Laravel
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="border-spacing-2 border-2 border-gray-400 p-2 mb-4">
              <div className="">
                <a
                  href="https://yohannams.github.io/by-invitation/"
                  target="_blank"
                >
                  <img
                    src={portfolio3}
                    class="grow h-full max-w-full rounded-lg"
                  ></img>
                </a>
              </div>
              <div className="mb-4 p-2">
                <h5 className="text-l font-bold text-slate-200 grow mb-2">
                  Wedding Invitation
                </h5>
                <p className="text-xs mb-4 text-slate-200">
                  This website is able to confirm guests and provide greetings
                  on the website, with the data being entered into a Google
                  spreadsheet.
                </p>
                <div className="flex flex-wrap gap-x-2 text-white spec">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    HTML
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    CSS
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Javascript
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="border-spacing-2 border-2 border-gray-400 p-2 mb-4">
              <div className="">
                <a
                  href="https://silly-crepe-7acfd3.netlify.app/"
                  target="_blank"
                >
                  <img
                    src={portfolio4}
                    class="grow h-full max-w-full rounded-lg"
                  ></img>
                </a>
              </div>
              <div className="mb-4 p-2">
                <h5 className="text-l font-bold text-slate-200 grow mb-2">
                  Job Portal
                </h5>
                <p className="text-xs mb-4 text-slate-200">
                  The website was developed during a React bootcamp conducted by
                  Sanbercode. This website is capable of managing job data, such
                  as viewing, editing, adding, and deleting data. It features
                  job CRUD operations, filtering, searching, registration,
                  login, and password changing functionalities.
                </p>
                <div className="flex flex-wrap gap-x-2 text-white spec">
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
                    React
                  </p>
                  <p className="text-xs bg-blue-500 rounded-3xl p-2 mb-2">
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
