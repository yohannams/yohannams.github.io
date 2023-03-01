import React from "react";
import background from '../img/background.jpg';

const Home = () => {
    return(
        <>
            <div className="mx-auto w-full h-screen flex flex-col justify-center">
                <div style={{backgroundImage: `url(${background})` }} className="flex h-screen items-center justify-center">
                    <h1 className="font-bold text-center">Hello, </h1>
                    <h2 className="font-semibold ">I'm Frontend Developer</h2>
                </div>
            </div>
        </>
    );
}

export default Home;