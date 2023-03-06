import React from "react";
import { Card } from "flowbite-react";
import portfolio1 from "../img/image1.jpg";
import portfolio3 from "../img/logoMaranatha.png";

const Portfolio = () => {
  const backgroundStyle = {
    background: "rgb(238,174,202)",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(219,177,209,1) 8%, rgba(218,177,209,1) 16%, rgba(218,177,209,1) 22%, rgba(213,178,211,1) 28%, rgba(199,180,216,1) 43%, rgba(187,181,220,1) 56%, rgba(174,183,224,1) 71%, rgba(165,184,227,1) 81%, rgba(148,187,233,1) 100%)",
  };

  return (
    <>
      <section
        id="portfolio"
        className="mx-auto w-full h-screen justify-center"
      >
        <div
          style={backgroundStyle}
          className="lg:px-60 lg:py-60 md:px-20 md:py-20 sm:px-10 sm:py-10 h-screen items-center text-center"
        >
          <h1 className="font-semibold text-center text-2xl mb-8">My Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5 mx-auto">
            <div className="flex flex-col max-w-xs mx-auto">
              <a
                href="https://silly-crepe-7acfd3.netlify.app/"
                target="_blank"
                className="h-full"
              >
                <Card imgSrc={portfolio1} className="h-full grow">
                  <div className="">
                    <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white grow">
                      Final Project Bootcamp (Sanbercode)
                    </h5>
                    <p className="text-m font-semibold tracking-tight text-gray-900 dark:text-white grow">
                      React, Tailwind
                    </p>
                  </div>
                </Card>
              </a>
            </div>
            <div className="flex flex-col max-w-xs mx-auto">
              <a
                href="https://one.maranatha.edu/"
                target="_blank"
                className="h-full"
              >
                <Card imgSrc={portfolio3} className="grow h-full flex-1">
                  <div className="">
                    <h5 className="text-l font-bold text-gray-900 dark:text-white grow">
                      University Internal Website
                    </h5>
                    <p className="text-m font-semibold text-gray-900 dark:text-white grow">
                      HTML5, CSS3, Javascript, Bootstrap
                    </p>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
