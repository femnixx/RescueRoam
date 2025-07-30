import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="font-semibold text-xl text-center">RescueRoam</p>
      </div>
      <div className="flex flex-col gap-y-2  items-start ps-5">
        <Link to="/Login">Link to Sign In</Link>
        <Link to="/Signup">Link to Sign Up</Link>
      </div>
    </>
  );
};

export default LandingPage;
