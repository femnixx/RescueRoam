import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {auth} from "../../backend/Firebase";

const LandingPage = () => {
  const user = auth.currentUser;
  const displayName = user?.displayName;
  const displayEmail = user?.email;
  if (user !== null) {
    return (
      <><div>
        Hi there! Currently logged in as: 
        <br>
        </br>
        {displayEmail}
        </div></>
    )
  } else {
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
  }
  

export default LandingPage;
