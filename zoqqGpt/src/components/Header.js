import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO } from '../utilis/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      }else{
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribed when component unmounts
    return () => unsubscribe();
  },[]);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className='w-44'
        src={LOGO}
        alt="logo"
      />
      {/**display this div when we have user */}
      {
        user && (
          <div className='flex p-2'>
          <img className='w-12 h-12'
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>  
        )
      }
    </div>
  )
}

export default Header