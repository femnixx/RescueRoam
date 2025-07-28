import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="font-semibold text-xl text-center">RescueRoam</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="px-2 mt-5">Link to Login</p>
        <p className="px-2">Link to Sign up</p>
      </div>
    </>
  );
};

export default LandingPage;
