import React, { useState } from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="font-semibold text-xl text-center">RescueRoam</p>
      </div>
      <div className="flex flex-col gap-y-2  items-start ps-5">
        <button className="hover:cursor-pointer">Link to Login</button>
        <button className="hover:cursor-pointer">Link to Sign Up</button>
      </div>
    </>
  );
};

export default LandingPage;
