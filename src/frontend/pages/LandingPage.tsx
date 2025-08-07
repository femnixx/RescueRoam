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
        <div className="mt-5 gap-y-2 flex flex-col">
          <p>Signing up is optional, but what you'll gain:</p>
          <p>- Easier paperwork</p>
          <p>- Verified badge</p>
          <p>- Earning up points for rewards</p>
          <p>- Happy ever after story access</p>

          <div className="mt-10 flex flex-col gap-y-5 justify-center items-center">
            <p>image carousel goes here</p>
            <p>image carousel goes here</p>
          </div>
          <p className="mt-10">some other message like achievements and stuff</p>
          <p>Copyight and also protected by etc etc</p>
        </div>
      
      </div>

    </>
  );
};
  }
  

export default LandingPage;
