import React, { useEffect, useState } from "react";
import movie from "../movie.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [togglePage, setTogglePage] = useState(false);
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
    // const unsub = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     const { uid, email } = user;
    //     dispatch(addUser({ uid: uid, email: email }));
    //     if (location.pathname === "/") navigate("/browse");
    //   } else {
    //     // User is signed out
    //     navigate("/");
    //     dispatch(removeUser());
    //   }
    // });
    navigate("/browse");
    // return () => unsub();
  }, []);
  const userData = useSelector((store) => store.user);
  return (
    <div className="sticky top-0 z-20">
      <div className="p-2 sm:px-8 flex justify-between bg-gray-800 ">
        <div
          className="flex items-center cursor-pointer sm:w-6/12"
          onClick={() => {
            navigate("/browse");
            setTogglePage(false);
          }}
        >
          <img alt="LOGO" className="w-10" src={movie} />
          <p className="text-2xl sm:text-4xl text-sky-400 ml-3 ">Movie App</p>
        </div>
        {
          <div className="flex justify-between">
            <button
              className="p-2 sm:px-4 bg-cyan-800 rounded-md text-slate-200"
              onClick={() => {
                if (!togglePage) {
                  navigate("/search");
                  setTogglePage(!togglePage);
                } else {
                  navigate("/browse");
                  setTogglePage(!togglePage);
                }
              }}
            >
              {togglePage ? "Home" : "Search"}
            </button>
            {/* <button
              className="p-2 sm:px-4 ml-2 bg-red-500 rounded-md text-slate-200"
              onClick={handleSignOut}
            >
              Sign Out
            </button> */}
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
