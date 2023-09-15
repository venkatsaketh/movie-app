import React, { useEffect } from "react";
import movie from "../movie.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // const { uid, email, displayName } = user;
        // dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        // dispatch(removeUser());
      }
    });
    return () => unsub();
  }, []);
  return (
    <div>
      <div className="p-3 px-8 flex justify-between bg-gradient-to-b from-cyan-800">
        <div className="flex">
          <img alt="LOGO" className="w-10" src={movie} />
          <p className="text-4xl text-gray-800 ml-3 font-bold">Movie App</p>
        </div>
        <button
          className="p-2 px-4 bg-red-500 rounded-md"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
