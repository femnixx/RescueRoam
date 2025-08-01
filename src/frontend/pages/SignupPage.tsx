import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
const SignupPage = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  
  // handlesignup
  const handleSignup = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        const user = userCredential.user;
        window.alert("Successfully signed in!");
       })
    } catch (error) {
      if (FirebaseError) {
        console.log("Caught exception firebase error: ", FirebaseError);
      } else {
        console.error("Unknown error caught", error);
      }
    }
  }

  return (
    <>
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
    </>
  );
};

export default SignupPage;
