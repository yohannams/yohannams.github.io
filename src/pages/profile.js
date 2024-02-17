import React from "react";

const Profile = () => {
  return (
    <>
      <section
        id="profile"
        className="h-screen lg:px-60 lg:py-60 md:px-20 md:py-20 sm:px-10 sm:py-10 flex flex-col items-center justify-center min-h-screen"
      >
        <h5 className="font-semibold text-center">A little about me</h5>
        <label className="font-semibold text-center text-xl mt-9">
          I am a frontend developer. I have experience working with HTML,
          JavaScript, jQuery, CSS, and Bootstrap. I have also studied about
          React.js and Next.js during my bootcamp. Additionally, I have gained
          knowledge in QA through bootcamp sessions using Cypress and Selenium.
        </label>
      </section>
    </>
  );
};

export default Profile;
