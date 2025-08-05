import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {auth} from "../../backend/Firebase";
import firebase from "firebase/compat/app";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../backend/Firebase.ts" 

const LandingPage = () => {
  const user = auth.currentUser;
  const displayEmail = user?.email;
  const displayID = user?.uid;

  // handle getDoc 
  
  


  // handle signout
  const handleLogOut = () => {
    try {
      signOut(auth);
      if (!user) {
        window.alert('Successfully logged out.')
        console.log("User session ended.")
      } 
    } catch (error) {
      if (FirebaseError) {
        console.log("Firebase error occured: ", FirebaseError)
      } else {
        console.log("Unexpted error occured: ", error)
      }
    }
  }

  if (user !== null) {
    return (
      <>
      <div className="flex gap-x-5 mt-5 justify-between mx-5">
        <p>Currently signed in as: {}</p>
        <form onClick={handleLogOut}><button className="hover:cursor-pointer border-1 rounded-lg ps-5">Sign out</button></form>
        </div>
        </>
    )
  } else {
    return (
    <>
      <div className="flex justify-center items-center">
        <p className="font-semibold text-xl text-center mt-5">RescueRoam</p>
      </div>
      <div className="flex flex-col gap-y-2  items-start ps-5">
        <Link to="/Login">Link to Sign In</Link>
        <Link to="/Signup">Link to Sign Up</Link>
      </div>
    </>
  );
};
  }
  

export default LandingPage;
