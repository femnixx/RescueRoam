import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { auth } from "../../backend/Firebase.ts"
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";

const SignupPage = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handle sign up logic for site from firebase
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
       await createUserWithEmailAndPassword(auth, email, password);
       window.alert("successfuly signed in!");
       navigate("/login")
      } catch (error) {
      if (FirebaseError) {
        console.log("Caught exception firebase error: ", FirebaseError);
      } if (password.length < 8) {
          window.alert("Password must be at least 8 characters.")
          console.log('Weak password.')
        } else {
          console.log('Unknown error detected: ', error)
        }
      }
    }

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="">
          <h1 className="text-center mt-5">Create An Account</h1>
          <div className="ps-5 mt-5">
            <p>Username</p>
            <input type="username" className="border-1 rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <p className={`text-red-500 ${username === "" ? "block" : "hidden"}`}>* Username is required</p>
          </div>
          <div className="ps-5 mt-5">
            <p className="">Email</p>
            <input type="email" className="border-1 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className={`text-red-500 ${email === "" ? "block" : "hidden"}`}>* Email is required</p>
          </div>
          <div className="ps-5 mt-5">
            <p>Password</p>
            <input type="password" className="border-1 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className={`text-red-500 ${password === "" ? "block" : "hidden"}`}>* Password is required</p>
          </div>
        </div>
        <button type="submit" className="ps-5 mt-5 px-2 border-1 rounded-lg flex justify-center items-center ml-5">Submit</button>

        <button className="border-1 ms-5 mt-5 rounded-lg">Return to landing page</button>
      </form>
    </>
  );
};

export default SignupPage;
