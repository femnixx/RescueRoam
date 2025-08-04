import React from "react";
import { getAuth, signInWithEmailAndPassword, validatePassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../backend/Firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { Firestore } from "firebase/firestore";
import { db } from "../../backend/Firebase"
import { Outlet, Link } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = auth.currentUser;
  const navigate = useNavigate();
  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault();


    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
       if (login) {
        window.alert('Successfully logged in! as: ' + login.user?.email) 
        navigate("/")
      }
    } catch (error) {
      if (FirebaseError) {
        console.log("Firebase erorr: ", FirebaseError)
      } else {
        console.log("Unknown error: ", error)
      }
    }
  } 
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="">
          <h1 className="text-center mt-5">Welcome back</h1>
          <div className=" flex flex-col gap-y-5 mt-5">
            <div className="ps-5">
              <p>Email</p>
              <input type="email" className="border-1 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p className={`text-red-500 ${email === "" ? "block" : "hidden"}`}>* Email required</p>
            </div>
            <div className="ps-5">
              <p>Password</p>
              <input type="password" className="border-1 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className={`text-red-500 ${password === "" ? "block" : "hidden"}`}>* Password required</p>
            </div>
          </div>
          <button type="submit" className="ps-5 mt-5 px-2 border-1 rounded-lg flex justify-center items-center ml-5 text-center">Submit</button>
        <div className="mt-5 ">
                  <Link to="/" className="ms-5 border-1 px-3 py-1 rounded-lg">Return to landing page</Link>
                </div>
        <p className="ms-5 mt-5">Don't have an account? <Link to="/Signup" className="font-semibold hover:cursor-pointer hover:underline">Sign Up</Link></p>
        </div>
      </form>
      <p> Hi there</p>
    </>
  );
};

export default LoginPage;
