import React, { useEffect } from "react";
import movie from "../movie.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsub();
  }, []);
  const userData = useSelector((store) => store.user);
  return (
    <div className="sticky top-0 z-20">
      <div className="p-3 sm:px-8 flex justify-between bg-gray-800 ">
        <div className="flex items-center">
          <img alt="LOGO" className="w-10" src={movie} />
          <p className="text-2xl sm:text-4xl text-purple-400 ml-3 ">
            Movie App
          </p>
        </div>
        {userData && (
          <button
            className="p-2 px-4 bg-red-500 rounded-md text-slate-200"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
