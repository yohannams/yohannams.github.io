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
          I am a frontend developer with 5 years of experience in building
          responsive and user-friendly websites. I specialize in using HTML5,
          CSS3, and JavaScript to create modern and intuitive user interfaces
          that enhance user experience.
        </label>
      </section>
    </>
  );
};

export default Profile;
