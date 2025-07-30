import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center mt-5">Welcome back</h1>
        <div className=" flex flex-col gap-y-5 mt-5">
          <div className="ps-5">
            <p>Email</p>
            <input type="email" className="border-1 rounded-lg" />
          </div>
          <div className="ps-5">
            <p>Password</p>
            <input type="password" className="border-1 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
