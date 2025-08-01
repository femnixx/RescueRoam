import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { auth } from "../../backend/Firebase.ts"
const SignupPage = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // handle sign up logic for site from firebase
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
       await createUserWithEmailAndPassword(auth, email, password);
       window.alert("successfuly signed in!");
    } catch (error) {
      if (FirebaseError) {
        console.log("Caught exception firebase error: ", FirebaseError);
      } else {
        console.error("Unknown error caught", error);
        window.alert("Error upon attempt to creaste a new user")
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
          </div>
          <div className="ps-5 mt-5">
            <p>Email</p>
            <input type="email" className="border-1 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="ps-5 mt-5">
            <p>Password</p>
            <input type="password" className="border-1 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit" className="ps-5 mt-5">Submit</button>
      </form>
    </>
  );
};

export default SignupPage;
