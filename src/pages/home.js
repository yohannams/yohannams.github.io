import React from "react";
import background from "../img/bg2.jpg";
import avatar from "../img/Yohanna.jpg";

const Home = () => {
  const backgroundStyle = {
    // background: "rgb(238,174,202)",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // background:
    //   "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(219,177,209,1) 8%, rgba(218,177,209,1) 16%, rgba(218,177,209,1) 22%, rgba(213,178,211,1) 28%, rgba(199,180,216,1) 43%, rgba(187,181,220,1) 56%, rgba(174,183,224,1) 71%, rgba(165,184,227,1) 81%, rgba(148,187,233,1) 100%)",
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
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            className="mx-auto"
          />
          <label className="font-bold text-center title">
            Hello, I'm Yohanna!
          </label>
          <br />
          <label className="font-semibold text-center title">
            Frontend Developer
          </label>
        </div>
      </div>
    </>
  );
};

export default Home;
