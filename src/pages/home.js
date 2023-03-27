import React from "react";
// import background from "../img/background.jpg";
import avatar from "../img/avatar.png";

const Home = () => {
  const backgroundStyle = {
    // background: "rgb(238,174,202)",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(219,177,209,1) 8%, rgba(218,177,209,1) 16%, rgba(218,177,209,1) 22%, rgba(213,178,211,1) 28%, rgba(199,180,216,1) 43%, rgba(187,181,220,1) 56%, rgba(174,183,224,1) 71%, rgba(165,184,227,1) 81%, rgba(148,187,233,1) 100%)",
  };

  return (
    <>
      <div className="mx-auto w-full h-screen justify-center" id="home">
        <div
          style={backgroundStyle}
          className="lg:px-60 lg:py-60 md:px-20 md:py-20 sm:px-10 sm:py-10 h-screen items-center text-center flex flex-col items-center justify-center min-h-screen"
        >
          <img
            alt="background"
            src={avatar}
            style={{ width: "100px", height: "100px" }}
            className="mx-auto"
          />
          <label className="font-bold text-center text-2xl">Hello, </label>
          <br />
          <label className="font-semibold text-center text-2xl">
            I'm Yohanna Marsella Santoso
          </label>
          <div className="align-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mb-1 inline-block w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <label className="font-semibold text-center text-l">
              Bandung, Indonesia
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
