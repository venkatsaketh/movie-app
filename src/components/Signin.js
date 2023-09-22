import React, { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { checkSignin } from "../utils/validation";
import Header from "./Header";

const Signin = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [err, setErr] = useState("");
  const email = useRef();
  const password = useRef();

  const toggleForm = () => {
    setIsSignin(!isSignin);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const mail = email.current.value;
    const pwd = password.current.value;
    const msg = checkSignin(email.current.value, password.current.value);
    setErr(msg);
    if (msg) return;
    if (!isSignin) {
      createUserWithEmailAndPassword(auth, mail, pwd)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErr(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, mail, pwd)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErr(errorMessage);
        });
    }
  };

  return (
    <div className="bg-gray-600 w-screen h-screen">
      <Header />
      <div className="bg-gray-800 sm:w-8/12  lg:w-5/12 mx-auto opacity-70 p-7 rounded-xl text-white mt-16">
        <p className="font-bold px-4 sm:px-12 text-3xl">
          {isSignin ? "Sign In" : "Sign Up"}
        </p>
        <form
          className="flex-row mt-8 px-4 sm:px-12"
          onSubmit={(e) => submitHandler(e)}
        >
          <div>
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="bg-gray-600 border border-white p-4 rounded-md outline-none w-full"
            ></input>
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="bg-gray-600 mt-6 border border-white p-4 rounded-md outline-none w-full"
            ></input>
          </div>
          {err && <p className="text-red-600 mt-5 text-2xl">{err}</p>}
          <button className="mt-14 bg-green-700 rounded-md p-4 w-full">
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="m-2 mt-14 cursor-pointer hover:underline"
            onClick={toggleForm}
          >
            {isSignin
              ? "new to Movie App? signup Now"
              : "Already Registered sign in now..."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
