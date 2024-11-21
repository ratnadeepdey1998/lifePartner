import React from "react";
import Navbarr from "../components/navbar";
import Footer from "../components/footer";

const AuthLayout = (props) => {
  return (
    <>
      <Navbarr />
      <div>{props.children}</div>
      <Footer/>
    </>
  );
};

export default AuthLayout;
