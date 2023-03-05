import React from "react";
// import Footer from "../components/Footer"
import NavigationBar from "../components/navigationbar";

const LayoutLanding = (props) => {

    return(
        <>
            <div className="mx-auto">
                <NavigationBar />
                <div>
                    {props.children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )

}

export default LayoutLanding;