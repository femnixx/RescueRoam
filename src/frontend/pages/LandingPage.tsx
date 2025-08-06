import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {auth} from "../../backend/Firebase";
import SignedIn from "../components/SignedIn";

// Landing page page
const LandingPage = () => {
  const user = auth.currentUser;
  const displayEmail = user?.email;
  const userID = user?.uid;
  const displayName = user?.displayName;
  const [username, setUsername] = useState('Guest');

  // Validation if user is not logged in
  if (user !== null) {
    return (
      <>
        <SignedIn></SignedIn>
        </>
    )
  } else {
    return (
    <>
      <div className="flex justify-center items-center">
        <p className="font-semibold text-xl text-center mt-5">RescueRoam</p>
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
