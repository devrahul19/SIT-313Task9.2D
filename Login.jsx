import React, { useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };


  return (
    <div className="loginpage">
      <div className="google">
        <p>Sign In with Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
