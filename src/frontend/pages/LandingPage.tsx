import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {auth} from "../../backend/Firebase";
import firebase from "firebase/compat/app";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../backend/Firebase.ts" 
import { useEffect } from "react";

const LandingPage = () => {
  const user = auth.currentUser;
  const displayEmail = user?.email;
  const userID = user?.uid;
  const displayName = user?.displayName;
  const [username, setUsername] = useState('Guest');

  useEffect(() => {
    const fetchUsername = async () => {
      if (userID) {
        try {
          const docRef = doc(db, "users", userID);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUsername(userData.displayName);
            console.log("Document data: ", userData);
          } else {
            console.log("Such document does not exist.")
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      }
    };
    fetchUsername();
  }, [userID]);


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
        <p>Currently signed in as: {username}</p>
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
