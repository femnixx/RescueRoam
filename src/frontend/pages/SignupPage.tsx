import React from "react";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { auth, db } from "../../backend/Firebase.ts"
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { Outlet, Link } from "react-router-dom";

const SignupPage = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handle sign up logic for site from firebase
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
     const createUser = await createUserWithEmailAndPassword(auth, email,password); 
     if (createUser) {
        // add a new document 
    await setDoc(doc(db, "users", createUser.user.uid), {
      uid: createUser.user.uid,
      username: username,
      email: email,
      createdAt: new Date()
    });
      signOut(auth);
      console.log("Successfully signed in with user: " + createUser.user.uid)
      navigate("/Login")
    } 
    } catch (error) {
      if (FirebaseError) {
        console.log("")
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

        <div className="mt-5 ">
          <Link to="/" className="ms-5 border-1 px-3 py-1 rounded-lg">Return to landing page</Link>
        </div>
        <p className="mt-5 ms-5">Already have an account? <Link className="font-semibold hover:cursor-pointer hover:underline" to="/Login">Sign In</Link></p>
      
      </form>
    </>
  );
};

export default SignupPage;
