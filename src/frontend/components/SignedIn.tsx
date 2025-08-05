import React, { useState } from 'react'
import { db } from "../../backend/Firebase.ts"
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import {auth} from "../../backend/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigate } from 'react-router-dom';

const SignedIn = () => {
const user = auth.currentUser;
const userID = user?.uid;
const navigate = useNavigate();
const [username, setUsername] = useState("Guest");
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
          navigate("/")

        } 
      } catch (error) {
        if (FirebaseError) {
          console.log("Firebase error occured: ", FirebaseError)
        } else {
          console.log("Unexpted error occured: ", error)
        }
      }
    }
  

    
  return (
      <>
      <div className="flex flex-col gap-x-5 mt-5 justify-between mx-5">
        <div className='flex justify-between w-full'>
          <p>Currently signed in as: {username}</p>
          <form onClick={handleLogOut}><button className="hover:cursor-pointer border-1 rounded-lg ps-5">Sign out</button></form>
        </div>
          <p className='mt-5'>images</p>
        </div>
        </>
    )
}

export default SignedIn