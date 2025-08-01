import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center mt-5">Create An Account</h1>
        <div className="ps-5 mt-5">
          <p>Username</p>
          <input type="username" className="border-1 rounded-lg" />
        </div>
        <div className="ps-5 mt-5">
          <p>Email</p>
          <input type="email" className="border-1 rounded-lg" />
        </div>
        <div className="ps-5 mt-5">
          <p>Password</p>
          <input type="password" className="border-1 rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
