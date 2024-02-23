import React from "react";
import NavigationBar from "../components/navigationbar";

const LayoutLanding = (props) => {
  return (
    <>
      <div className="mx-auto">
        <NavigationBar />
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default LayoutLanding;
