import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../backend/Firebase";
import { FirebaseError } from "firebase/app";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successful");
      window.alert(`Signed in with user: ${email} successful.`);
    } catch (error) {
      if (FirebaseError) {
        console.log("Firebase erorr: ", FirebaseError)
      } else {
        console.log ("Unknown error: ", error)
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
                  <button type="submit" className="ps-5 mt-5 px-2 border-1 rounded-lg flex justify-center items-center ml-5">Submit</button>

        </div>
      </form>
    </>
  );
};

export default LoginPage;
